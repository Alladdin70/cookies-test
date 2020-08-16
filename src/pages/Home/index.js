import React from 'react';
import {connect} from 'react-redux';
import {withCookies } from 'react-cookie';
import {makeStyles} from '@material-ui/core/styles';



const useStyle = makeStyles({
    canvas:{
        maxWidth: 'false',
        backgroundColor: 'blue',
        textAlign: 'center',
        height: '100vh'
    }
});


const Home = withCookies((props)=> {
    const classes = useStyle();
    if(!props.cookies.get('isLoggedSpotyfy')){
        props.history.push('/login');
    }
    return(
        <div className={classes.canvas}></div>

    );
});
  

export default connect(
  (state,cookies) => ({
      myStore: state,
  }),
  dispatch => ({})
)(Home);
