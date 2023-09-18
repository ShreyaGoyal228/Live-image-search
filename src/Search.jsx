import React from 'react';
import './Search.css';
import {Box,TextField} from '@mui/material';
import { useState } from 'react';
const Search=()=>{
  const[image,setImage]=useState("");
  const url=`https://source.unsplash.com/500x400/?${image}`;
  const inputEvent=(e)=>{
    const data=e.target.value;
    console.log(data);
    setImage(data);
  }
  return(<>
    <Box className='search'>
      <Box className="middle">
        <TextField variant="outlined" 
        label='Enter the text...'
       type='text'
       id="text" className='field'
       value={image}
       onChange={inputEvent}>
       </TextField>
       {image==="" ? null :  <img src={url} alt="Not found....."/>}
    </Box>
    </Box>
    </>
  )
}

export default Search;