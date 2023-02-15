import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'300px',sm:'446px',md:'446px',lg:'446px'},
  background: '#1E1E1E',
  border: 'none',
  borderRadius: '20px',
  padding: {xs:'30px 20px 45px 20px',sm:'75px 62px 115px 62px',md:'75px 62px 115px 62px',lg:'75px 62px 115px 62px'},
  textAlign: 'center'

};

export default function BasicModal({open, clickClose}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={clickClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CheckCircleIcon sx={{width: '88px',height: '88px',background: '#fff',color: '#20AC5B', border:'none', borderRadius:'50%', boxShadow: 'inset 0px -5px 20px #000000'}}/>
          <Typography id="modal-modal-title" variant="h3" sx={{fontFamily:"Satoshi, sans-serif", fontWeight: '700', fontSize:'24px', color:'#fff', marginTop:'60px', marginBottom:'8px', lineHeight:'32px'}}>
            Congratulations
          </Typography>
          <Typography id="modal-modal-description" sx={{ fontFamily:'Satoshi, sans-serif', fontWeight:'300',fontSize:'16px', lineHeight:'22px', color: 'rgba(255, 255, 255, 0.9)', width:{xs:'280px',sm:'321px',md:'321px',lg:'321px'}}}>
          Great move! You're one step closer to getting your hands on the product. Please check your mail for more information.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}