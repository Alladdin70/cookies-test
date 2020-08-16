import React from 'react';
import {connect} from 'react-redux';
import {withCookies } from 'react-cookie';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles({
    canvas:{
        maxWidth: 'false',
        backgroundColor: 'blue',
        textAlign: 'center',
        height: '100vh'
    },
    cell:{
        height: '32.5vh',
        lineHeight: '32.5vh'
    }
});

const Login = withCookies((props)=> {
    const classes = useStyle();
    console.log(props);
    const loginButtonHandler = () => {
        alert("You have pressed the login button!");
        fetch('/auth').then(res=>res.text()).then((res)=>{
            console.log(res);
            alert(res)
        });

    };
    return (
        <Container className={classes.canvas} disableGutters='true'>
            <Grid container spacing={2}>
                <Grid className={classes.cell} item xs={12}/>
                <Grid className={classes.cell} item xs={4}/>
                <Grid className={classes.cell} item xs={4}>
                    <Button 
                    variant="contained"
                    onClick={loginButtonHandler}
                    >
                        Spotify login
                    </Button>
                </Grid>
                <Grid className={classes.cell} item xs={4}/>
                <Grid className={classes.cell} item xs={12}/>
            </Grid>
            
        </Container>
   
    );
});
  

export default connect(
  (state,cookies) => ({
      myStore: state,
  }),
  dispatch => ({})
)(Login);