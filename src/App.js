import React from 'react';
import {connect} from 'react-redux';
import {withCookies } from 'react-cookie';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


const App = withCookies((props)=> ((
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
  </Switch>  
)));
  

export default connect(
  (state,cookies) => ({
      myStore: state,
  }),
  dispatch => ({})
)(App);
