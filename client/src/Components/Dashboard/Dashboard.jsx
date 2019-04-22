import React, { Component, Fragment } from 'react'
import { Typography, Paper, Grid, List, ListItem, ListItemText, Divider, CircularProgress  } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import GlobalContext from '../../hoc/Context/GlobalContext'
import { getBankList, getAccountList, getTransactionList } from '../../serverApi/serverApi'
import BankAccounts from './BankAccounts/BankAccounts'

const styles = theme => ({
    paperItemStyle:{
        minWidth:350,
        maxWidth:400,
        minHeight:500,
        paddingTop:theme.spacing.unit * 2,
        display:'flex',
        flexDirection:'column',
        '&:hover':{
            cursor:'pointer',
            background:'rgba(0,0,0,0.12)'
        }
    },
    accountBalanceStyle:{
        paddingRight:0,
    },
    totalBalanceContainer:{
        display:'flex',
        flexGrow:1,
        alignItems:'flex-end',
        marginTop:theme.spacing.unit * 2,
    },
    totalBalanceContent:{
        display:'flex',
        flexGrow:1,
        justifyContent:'space-between',
        padding:theme.spacing.unit * 2,
        borderTop:'1px solid rgba(0,0,0,0.12)'
    },
    circularProgress:{
        width:'100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    }
})

class Dashboard extends Component {
    static contextType = GlobalContext

    state = {
        isLoading:true,
        bankList:[],
        accountList:[],
        transactionList:[],
        bankSelected:null
    }
        
    getCurrentAccountBalance  = account => {
        return this.state.transactionList
                .filter(t => account._id === t.accountId)
                .sort((a,b) => (a.date < b.date) ? 1 : -1)[0]
                .amount       
    }

    showBankAccounts = bank => {
        const accounts = this.state.accountList.filter(a => a.bankId === bank._id)
        let totalBalance = 0
        let result = (
            <Fragment>
                <List>
                    {accounts.map(account => {
                        const accountBalance = this.getCurrentAccountBalance(account)
                        totalBalance = totalBalance + accountBalance
                        return (
                                <ListItem key={account._id}>
                                    <ListItemText
                                        primary={account.title}
                                        secondary={account.description}
                                    /> 
                                    <ListItemText
                                        className={this.props.classes.accountBalanceStyle}
                                        align='right' 
                                        primary={accountBalance.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
                                    /> 
                                </ListItem>
                            )
                        }
                    )}
                </List>
                <div className={this.props.classes.totalBalanceContainer}>
                    <div className={this.props.classes.totalBalanceContent}>
                        <Typography variant='h6'>
                            Total Balance:
                        </Typography>
                        <Typography  variant='h6'>
                            {totalBalance.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
                        </Typography>
                    </div>
                </div>
            </Fragment>
        )
    
        return result
    }

    componentDidMount = () => {       
        getBankList(this.context.userAuth._id)
        .then(response => {
            const bankList = response.data
            getAccountList(this.context.userAuth._id)
            .then(response => {
                const accountList = response.data
                getTransactionList(this.context.userAuth._id)
                .then(response => {
                    this.setState({
                        bankList,
                        accountList,
                        transactionList:response.data,
                        isLoading:false
                    })
                })
            })
        })
    }
               
    render(){
        const { classes } = this.props
        const { bankList, accountList, transactionList, isLoading, bankSelected } = this.state
       
        return (
            <Fragment>
                {isLoading ? 
                    <div className={classes.circularProgress}>
                        <CircularProgress />                    
                    </div>
                :
                    <Fragment>
                        {!bankSelected ?
                            <Grid container spacing={8} className={classes.gridContainerStyle}>
                                {bankList.map(bank => (
                                    <Grid item key={bank.name}
                                        onClick={()=>this.setState({bankSelected:bank})}
                                    >
                                        <Paper className={classes.paperItemStyle}>
                                            <Typography variant='h6' align='center'>{bank.name}</Typography>
                                            <Divider/>
                                            {this.showBankAccounts(bank)}                                    
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid> 
                        :
                            <BankAccounts 
                                bankSelected={bankSelected}
                                accountList={accountList}
                                transactionList={transactionList}
                            />
                        }
                    </Fragment>
                }
            </Fragment>
        )
    }
}

export default withStyles(styles)(Dashboard)