import React from 'react'
import { Box, Stack } from "@mui/material";
import Nav from "../../Components/Nav/Nav";
import Hero from '../../Components/Hero/Hero';
import AccessForm from '../../Components/AccessForm/AccessForm';
import Avatar from '../../Components/Avatar/Avatar';
import Priority from '../../Components/Priority/Priority';
import Form from '../../Components/Form/Form';
import Modal from '../../Components/Modal/Modal';
import Footer from '../../Components/Footer/Footer';
import ellipse1 from '../../Assets/ellipse1.svg'
import ellipse2 from '../../Assets/ellipse2.svg'
import ellipse4 from '../../Assets/ellipse4.svg'
import bluestar from '../../Assets/bluestar.svg'
import yellowstar1 from '../../Assets/yellowstar1.svg'
import yellowstar2 from '../../Assets/yellowstar2.svg'
import arrow from '../../Assets/arrow.svg'
import './Homepage.css'

const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{position:'relative', background:'#121B27', padding: {xs: '34px 30px',sm:'64px 50px', md: '64px 50px', lg: '64px 100px'}}}>
      <Nav />
      <Hero />
      <AccessForm open={open} clickOpen={handleOpen}/> 
      <Avatar />
      <Stack direction={{xs:'column',sm:'column',md:'row', lg:'row'}} justifyContent='space-between' sx={{paddingBottom: '140px', borderBottom: '1px solid #fff'}}>
        <Priority />
        <Form clickOpen={handleOpen}/>
      </Stack> 
      <Footer />
      <img src={ellipse1} alt='' className='ellipse1'/>
      <img src={ellipse2} alt='' className='ellipse2a'/>
      <img src={ellipse2} alt='' className='ellipse2b'/>
      <img src={ellipse4} alt='' className='ellipse4'/>
      <img src={bluestar} alt='' className='bluestara'/>
      <img src={bluestar} alt='' className='bluestarb'/>
      <img src={yellowstar1} alt='' className='yellowstar1a'/>
      <img src={yellowstar1} alt='' className='yellowstar1b'/>
      <img src={yellowstar1} alt='' className='yellowstar1c'/>
      <img src={yellowstar2} alt='' className='yellowstar2a'/>
      <img src={yellowstar2} alt='' className='yellowstar2b'/>
      <img src={yellowstar2} alt='' className='yellowstar2c'/>
      <img src={yellowstar2} alt='' className='yellowstar2d'/>
      <img src={arrow} alt='' className='arrow'/>

      <Modal open={open} clickClose={handleClose}/>

    </Box>
  )
}

export default Homepage