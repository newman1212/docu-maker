import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import {Toolbar } from '@mui/material';
import {StyledTypography,StyledAppBar,Auth} from './nav-bar.styles';
import Logo from '../../Assets/navlogo.png';


const Navbar = () => {
  return (
    <div>
    <StyledAppBar position="static">
      <Toolbar>
            <Link to ='/'>
              <img  src = {Logo} alt ='logo'/></Link>
                <StyledTypography variant="h6" component="div">
                  DocuMaker 
                </StyledTypography>
             
              <Auth>
              <Link to='/sign-in'><span>Sign In</span></Link>
              <Link to = 'sign-up'><span>Sign Up</span></Link>
              </Auth>
    
      </Toolbar>
    </StyledAppBar>
    <Outlet/>

    </div>
  );
}

export default Navbar;
