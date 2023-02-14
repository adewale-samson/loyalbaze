import { Stack, Box, Button } from '@mui/material'
import Navlogo from '../../Assets/navlogo.svg'
import './Nav.css'


const Nav = () => {


  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>

            <img src={Navlogo} alt='' className='logo-img'/>
            
      
        <Box>
            <Button variant='outlined' sx={{ color: '#fcfcfc', fontSize: {xs:'10px',sm:'16px', md:'16px', lg: '16px'}, fontWeight: 700, padding: {xs: '10px 5px',sm:'14px 16px', md:'14px 16px', lg:'14px 16px'}, borderRadius: '100px', border:'1px solid linear-gradient(to right, rgba(84, 4, 255, 1), rgba(189, 59, 210, 0.94))', textTransform: 'initial'}}>Get Priority Access</Button>
        </Box>
    </Stack>
  )
}

export default Nav