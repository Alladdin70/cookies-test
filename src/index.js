import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root';
import {createStore} from 'redux';
import './index.css';

const initialState = [];
const myReducer = (state=initialState,action) =>{
  return state;
}
const store = createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
