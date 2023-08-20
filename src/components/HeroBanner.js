import React from 'react'
import { Box,Button,Stack,Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner7.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg:'212px', xs: '70px'}, ml: {sm:'50px'}}} position={'relative'} p={"20px"}>
        <Typography color={"#362FD9"} fontWeight={"600"} fontSize={'26px'}>
            Fitness Club
        </Typography>
        <Typography fontWeight={'700px'} sx={{fontSize: {lg: '44px',xs: '40px'}}} mb={'23px'} mt={'30px'}>
            Sweet, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize={'22px'} lineHeight={"35px"} mb={4}>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#362FD9' , padding: '10px'}}>Explore Exercise</Button>
        <Typography fontWeight={'600px'} color={"#362FD9"} fontSize={'200px'} sx={{opacity:0.1, display: {lg: 'block' , xs: 'none'}}}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='bannerImage' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner