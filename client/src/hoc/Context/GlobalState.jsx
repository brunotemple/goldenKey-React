import React, { Component } from 'react'

import GlobalContext from './GlobalContext'
import { getUserByEmail } from '../../serverApi/serverApi'
import { populateData } from '../../popData'

class GlobalState extends Component {
    state= {
        userAuth:null,
    }
   
    componentDidMount = () => {
        const popData = false
        if(popData){
            console.log("Populating Fakedata")
            populateData()
        } else {
            getUserByEmail('test@test.com').then(response => {
                this.setState({
                    userAuth:response.data
                })
            })
        }
    }

    render(){
        return(
            <GlobalContext.Provider
                value={{
                    userAuth:this.state.userAuth,
                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalState