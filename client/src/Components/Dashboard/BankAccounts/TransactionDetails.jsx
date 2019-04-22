import React, { Component } from 'react'
import { withStyles, FormControl, InputLabel, Input, InputAdornment,  Paper, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment'
import moment from 'moment'

const styles = theme => ({
    formContainer:{
        display:'flex',
        flexDirection:'column',
        padding:theme.spacing.unit * 2
    },
    formItem:{
        marginBottom:theme.spacing.unit * 2
    },
    actionsContainer:{
        display:'flex',
        justifyContent:'flex-end'
    },
    actionsItem:{
        marginLeft:theme.spacing.unit * 2
    },
    actionsItemDelete:{
        color:theme.palette.danger.main,
        '&:hover':{
            background:theme.palette.danger.light
        }
    }
})


class TransactionDetails extends Component {
    state = {
        transactionSelected:this.props.transactionSelected
    }

    handleChange = prop => event => {
        let updateTransaction = this.state.transactionSelected
        updateTransaction[prop] = event.target.value
        this.setState({ transactionSelected: updateTransaction })
    }

    handleDateChange = date => {
        let updateTransaction = this.state.transactionSelected
        updateTransaction.date = moment(date).format()
        this.setState({transactionSelected:updateTransaction})
    } 

    handleUpdateTransaction = updatedTransaction => {
        this.setState({
            transactionSelected:null
        })
        this.props.handleUpdateTransaction(updatedTransaction)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.transactionSelected.amount !== prevProps.transactionSelected.amount)
            this.setState({transactionSelected:this.props.transactionSelected})
    }

    render(){
        const { classes, handleUpdateTransaction, handleDeleteTransaction, handleCancel } = this.props
        const { transactionSelected } = this.state

        return (
            <Paper className={classes.formContainer}>
                <FormControl className={classes.formItem}>
                    <InputLabel htmlFor='adornment-amount'>Amount</InputLabel>
                    <Input
                        id='adornment-amount'
                        value={transactionSelected.amount}
                        onChange={this.handleChange('amount')}
                        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    />
                </FormControl>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker
                        keyboard
                        format='DD/MM/YYYY'
                        mask={value =>
                            value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
                        }
                        value={transactionSelected.date}
                        onChange={date =>this.handleDateChange(date)}
                        disableOpenOnEnter
                        className={classes.formItem}
                    />
                </MuiPickersUtilsProvider>
                <div className={classes.actionsContainer}>
                    <Button className={classes.actionsItemDelete} onClick={() => handleDeleteTransaction(this.state.transactionSelected)}>Delete</Button>
                    <Button className={classes.actionsItem} onClick={handleCancel}>Cancel</Button>
                    <Button className={classes.actionsItem} color='secondary' onClick={() => handleUpdateTransaction(this.state.transactionSelected)}>Save</Button>
                </div>
            </Paper>
                
        )
    }
}

export default withStyles(styles)(TransactionDetails)