import React from 'react';
import './Home.css';
import {Box} from '@mui/material';
const Home=(props)=>{
    return(
        <Box className='page'>
    <h1 className='heading'>This is the {props.info} page</h1>
    </Box>
    );
}

export default Home;