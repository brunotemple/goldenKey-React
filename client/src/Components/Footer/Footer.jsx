import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    footerStyle:{
        bottom:0,
        position:'absolute',
        width:'100%',
        height:theme.spacing.footerHeight,
        background:theme.palette.primary.main,
    }
})

class Footer extends Component {
    
    render(){
        const { classes } = this.props

        return(
            <div className={classes.footerStyle}></div>
        )
    }
}

export default withStyles(styles)(Footer)