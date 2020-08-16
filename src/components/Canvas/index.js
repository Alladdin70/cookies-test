import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyle = makeStyles({
    canvas:{
        maxWidth: 'false',
        backgroundColor: 'blue',
        textAlign: 'center',
        height: '100vh'
    }
})

const Canvas = ()=>{
    const classes=useStyle();
    return(
        <Container className={classes.canvas} disableGutters='true'/>
)};

export default Canvas;
