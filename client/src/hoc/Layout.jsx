import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const primaryColorMain = '#272727'
const primaryColorLight = '#B0B0B0'
const primaryColorDark = '#0F0F0F'

const secondaryColorMain = '#F27B35'
const secondaryColorLight = '#FACFB5'
const secondaryColorDark = '#6E3819'


const theme = createMuiTheme({
    palette:{
        primary:{
            main:primaryColorMain,
            light:primaryColorLight,
            dark:primaryColorDark
        },
        secondary:{
            main:secondaryColorMain,
            light:secondaryColorLight,
            dark:secondaryColorDark
        },
        danger:{
            main:'#FF0000',
            light:'rgba(205,92,92,0.5)'
        }
    },
    typography: {
        useNextVariants: true,
    },
    spacing:{
        headerHeight:70,
        footerHeight:50,
        contentHeight: 'calc(100vh - 70px - 50px - 16px)'
    }
})

const Layout = props => (
    <MuiThemeProvider theme={theme}>
        {console.log(theme)}
        <Header/>
        <div id='content' style={{padding:theme.spacing.unit,height:theme.spacing.contentHeight}}>
            {props.children}
        </div>
        <Footer />
    </MuiThemeProvider>
) 
export default Layout
