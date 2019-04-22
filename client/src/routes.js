import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home'
import GlobalContext from './hoc/Context/GlobalContext'

const Routes = () => {
    return (
        <GlobalContext.Consumer>
            {context => (
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        {context.userAuth && <Route path="/dashboard" exact component={Dashboard}/>}
                    </Switch>
                </Layout>
            )}
        </GlobalContext.Consumer>
    )
}

export default Routes