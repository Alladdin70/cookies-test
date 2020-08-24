import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withCookies } from 'react-cookie';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl,InputLabel,Input, Button} from "@material-ui/core";


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
    let id = '';
    const [name,setName] = useState('');
    if(!props.cookies.get('isLogged')){
        props.history.push('/login');
    }
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const buttonHandler = ()=>{
        fetch('http://localhost:3001/artist_search?name='+name)
            .then(res=>res.json())
                .then((res)=>{
                    fetch('http://localhost:3001/artist_data?id='+ res.id)
                        .then(res=>res.json)
                            .then((res)=>{console.log(res)})
                })
    };
    console.log(id);
    return(
        <div className={classes.canvas}>
            <FormControl>
                <InputLabel htmlFor="artist-name">Name</InputLabel>
                <Input id="artist-name" value={name} onChange={handleChange}/>
            </FormControl>
            <Button variant="outlined" onClick={buttonHandler}>Искать</Button>
        </div>

    );
});
  

export default connect(
  (state,cookies) => ({
      myStore: state,
  }),
  dispatch => ({})
)(Home);
