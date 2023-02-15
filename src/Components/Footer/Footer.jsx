import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <Stack direction={{xs:'column', sm:'column',md:'row',lg:'row'}} justifyContent='space-between' alignItems='center' sx={{marginTop:'24px'}}>
      <Stack direction='row' gap={1}>
        <HomeIcon sx={{color: 'white'}}/>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            color: "#fff",
            lineHeight: "22px",
            width: {xs:'230px',sm:'287px',md:'287px',lg:"287px"},
          }}
        >
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
          Nigeria.
        </Typography>
      </Stack>
      <Box sx={{marginTop: {xs:'15px'}, marginBottom: {xs:'15px'}}}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: '700',
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "27px",
            width: "231px",
          }}
        >
          Loyalbaze is almost here.
        </Typography>
      </Box>
      <Stack direction='row' gap={1}>
        <PhoneInTalkIcon sx={{color: 'white'}}/>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Satoshi, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            color: "#fff",
            lineHeight: "22px",
            width: "158px",
          }}
        >
          +234 903 618 9485
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
