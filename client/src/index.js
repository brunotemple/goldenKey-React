import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

import GlobalState from './hoc/Context/GlobalState'
import Routes from './routes'

ReactDOM.render(
    <BrowserRouter>
        <GlobalState>
            <Routes />
        </GlobalState>
    </BrowserRouter>
    , document.getElementById('root')
)


