import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header=()=>{
  return (
      <AppBar position="static" className='appbar'>
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div">
            <Link to="/" className='text'>
            Home
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/service"  className='text'>
            Services
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/search"  className='text'>
            Search
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/user"  className='text'>
            User
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/contact"  className='text'>
            Contacts
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
export default Header;