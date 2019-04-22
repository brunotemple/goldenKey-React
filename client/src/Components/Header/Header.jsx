import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
    headerStyle:{
        height:theme.spacing.headerHeight,
        background:theme.palette.primary.main,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingRight:theme.spacing.unit * 2,
    },
    linkStyle: {
        margin: theme.spacing.unit,
        color:theme.palette.secondary.main,
    },
})

class Header extends Component {
    
    render(){
        const { classes } = this.props

        return(
            <div className={classes.headerStyle}>
                <Typography variant='h5' className={classes.typographyStyle}>
                    <Link href={'/'} className={classes.linkStyle}>
                        Home
                    </Link>
                </Typography>
                <Typography variant='h5' className={classes.typographyStyle}>
                    <Link href={'/dashboard'} className={classes.linkStyle}>
                        Dashboard
                    </Link>
                </Typography>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)