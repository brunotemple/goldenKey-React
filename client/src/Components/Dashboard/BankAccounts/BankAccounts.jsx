import React, { Component } from 'react'
import { 
    withStyles,
    Grid,
    List,
    ListItem,
    ListItemText,
    Table,
    TableCell,
    TableHead,
    TableBody,
    TableRow,
    Paper,
    Fab
} from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'

import GlobalContext from '../../../hoc/Context/GlobalContext'
import { addOrUpdateStatement, deleteStatement } from '../../../serverApi/serverApi'
import TransactionDetails from './TransactionDetails'

const styles = theme => ({
    paper:{
        minWidth:500,
    },
    tableContainer: {
        overflow: 'auto',
        height: 500
    },
    tableHead:{
        background:theme.palette.primary.main
    },
    sortButton:{
        '&:hover':{
            cursor:'pointer',
            background:theme.palette.secondary.light
        },
        '& svg':{
            verticalAlign:'middle',
        },
        fontSize:'1.125em',
        fontWeight:500,
        color:theme.palette.secondary.main
    },
    tableCellHead:{
        verticalAlign:'middle',
        fontWeight:500,
        fontSize:'1.125em',
        color:theme.palette.secondary.main
    },
    tableRow:{
        '&:hover':{
            cursor:'pointer',
            background:theme.palette.secondary.light
        }
    },
    fabContainer:{
        background: theme.palette.background.paper,
        overflow:'hidden',
        padding:theme.spacing.unit * 2,
    },
    fabStyle:{
        float:'right'
    }
})

const newTransaction = {
    date: moment(new Date()).format(),
    amount:0
}


class BankAccounts extends Component {
    static contextType = GlobalContext
    state = {
        accountList:this.props.accountList.filter(a => a.bankId === this.props.bankSelected._id),
        transactionList:this.props.transactionList,
        accountSelected:null,
        sortListAsc:false,
        transactionSelected:null,
    }

    getTransactionsInfo = () => {
        const account = this.state.accountSelected
        const transList = this.state.transactionList
        
        const updatedTransList = transList.filter(trans => trans.accountId === account._id)
            .sort((a,b) => (a.date > b.date) ? 1 : -1)
            .map((transaction,index, array) => {
                const amount = transaction.amount
                const preAmount = index > 0 ?  array[index - 1].amount : 0
                const variation = (amount - preAmount).toLocaleString(navigator.language, { minimumFractionDigits: 2 })
                return {
                    ...transaction,
                    variation:variation,
                    percent:((1 - (preAmount / amount))*100).toFixed(2)
                }
            })
        

        const result = updatedTransList
            .sort((a,b) => {
                if(!this.state.sortListAsc){
                    if( a.date < b.date){
                        return 1
                    } else {
                        return - 1
                    }
                } else if(a.date > b.date) {
                    return 1
                } else {
                    return - 1
                }
            })
            .map(transaction => (
                <TableRow key={transaction._id} className={this.props.classes.tableRow} onClick={()=>this.setState({transactionSelected:transaction})}>
                    <TableCell component="th" scope="row">
                        {moment(transaction.date).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell align="right">{transaction.variation}</TableCell>
                    <TableCell align="right">{transaction.percent}%</TableCell>
                    <TableCell align="right">{transaction.amount.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</TableCell>
                </TableRow>
            ))
        return result
    }

    handleUpdateTransaction = transactionSelected => {
        transactionSelected = {
            ...transactionSelected,
            amount:parseFloat(transactionSelected.amount),
            userId:this.context.userAuth._id,
            accountId:this.state.accountSelected._id,
        }
        let updateTransactionList =  this.state.transactionList
        const index = updateTransactionList.findIndex(t => t._id === transactionSelected._id)
        addOrUpdateStatement(transactionSelected).then((response) => {
            if(index === -1){
                updateTransactionList.push(response.data.statement)              
            } else {
                updateTransactionList[index] = response.data.statement
            }
            this.setState({
                transactionSelected:null,
                transactionList:updateTransactionList
            })
        })
    }


    handleDeleteTransaction = transactionSelected => {
        deleteStatement(transactionSelected._id).then(() => {
            let updateTransactionList =  this.state.transactionList.filter(t => t._id !== transactionSelected._id)
            this.setState({
                transactionSelected:null,
                transactionList:updateTransactionList
            })
        })
    }

    render(){
        const { accountList, accountSelected, sortListAsc, transactionSelected, transactionList} = this.state
        const { classes } = this.props

        return (
            <Grid container spacing={8}>
                <Grid item>
                    <Paper>
                        <List>
                            {accountList.map(account =>
                                <ListItem 
                                    button
                                    key={account._id}
                                    onClick={()=>this.setState({accountSelected:account})}
                                >
                                    <ListItemText primary={account.title} />
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Grid>
                <Grid item>
                    {accountSelected &&
                        <Paper className={classes.paper} >
                            <div>
                                <Table>
                                    <TableHead>
                                        <TableRow className={classes.tableHead}>
                                            <TableCell
                                                className={classes.sortButton}
                                                onClick={()=>this.setState({sortListAsc:!sortListAsc})}
                                            >
                                                
                                                Date{!sortListAsc ? <ArrowDownward/> : <ArrowUpward/>}
                                            </TableCell>
                                            <TableCell className={classes.tableCellHead} align="right">Variation</TableCell>
                                            <TableCell className={classes.tableCellHead} align="right">Percent</TableCell>
                                            <TableCell className={classes.tableCellHead} align="right">Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </div>
                            <div className={classes.tableContainer}>
                                <Table>
                                    <TableBody>
                                        {this.getTransactionsInfo()}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className={classes.fabContainer}>
                                <Fab 
                                    className={classes.fabStyle} 
                                    color='secondary' 
                                    onClick={()=>this.setState({transactionSelected:newTransaction})}
                                >
                                    <AddIcon />
                                </Fab>
                            </div>
                        </Paper>
                    }
                </Grid>
                {transactionSelected && 
                    <Grid item>
                        <Paper>
                            <TransactionDetails 
                                transactionSelected={transactionSelected}
                                handleUpdateTransaction={this.handleUpdateTransaction}
                                handleCancel={()=>this.setState({transactionSelected:null})}
                                handleDeleteTransaction={this.handleDeleteTransaction}
                            />
                        </Paper>
                    </Grid>
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(BankAccounts)