import React from 'react';
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo3.svg';

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent={"space-around"} sx={{gap: {sm: '122px',xs: '40px'},mt:{sm: '32px',sx: '20px'},justifyContent: 'none'}} px='20px'>
      <Link to="/">
        <img src={Logo} alt='Logo' style={{width: '48px' , height: '48px', margin: '0 20px',filter: 'invert(22%) sepia(84%) saturate(7481%) hue-rotate(251deg)'}} />
      </Link>
      <Stack direction='row' gap="40px" fontSize={'24px'} alignItems={'flex-end'}>
        <Link to="/" style={{textDecoration: 'none',color: '#3A1212',borderBottom: '3px solid #362FD9'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none',color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar