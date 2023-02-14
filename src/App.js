import React from 'react';
import { Box } from "@mui/material";
import Nav from "./Components/Nav/Nav";
import Hero from './Components/Hero/Hero';
import AccessForm from './Components/AccessForm/AccessForm';



function App() {
  return (
    <Box sx={{background:'#121B27', padding: {xs: '34px 10px',sm:'64px 50px', md: '64px 50px', lg: '64px 100px'}}}>
      <Nav />
      <Hero />
      <AccessForm />  
    </Box>
  );
}

export default App;
