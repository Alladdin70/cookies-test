import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import App from '../../App';

const Root = ({store}) =>(
    <CookiesProvider>
        <Provider store={store}>
            <Router>
                <Route path='/' component={App}/>
            </Router>
        </Provider>
    </CookiesProvider>    
);


export default connect(
    (state,cookies) => ({
        myStore: state,
    }),
    dispatch => ({})
)(Root)

