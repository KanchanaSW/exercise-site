import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

import Logo from '../assets/images/fotter-logo2.svg'

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor={'#d0ecff'}>
      <Stack gap={'40px'} alignItems={'center'} px={'40px'} pt={'24px'}>
        <img src={Logo} alt='Logo' style={{width: '250px' , height: '80px',filter: 'invert(22%) sepia(84%) saturate(7481%) hue-rotate(251deg)'}} />
        <Typography variant='h5' pb={'40px'}>
          Made by KW 😎
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer