import React from "react";
import { Typography, Box } from "@mui/material";

const Hero = () => {
 
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "700",
          fontSize: { xs: "24px", sm: "34px", md: "44px", lg: "64px" },
          fontFamily: 'Satoshi, sans-serif',
          textAlign: "center",
          color: "#ffffff",
          width: "66.964%",
          lineHeight: "130%",
          margin: "122px auto 12px auto",
        }}
      >
        Turn your best customers into{" "}
        <Typography variant='span'
          sx={{
            color: "rgba(167, 95, 210, 1)",
            fontSize: { xs: "24px", sm: "34px", md: "44px", lg: "64px" },
            fontWeight: "700", fontFamily: 'Satoshi, sans-serif',
          }}
        >
          Loyal fans
        </Typography>
      </Typography>
      <Typography sx={{color:'#FCFCFC', fontWeight: '400', fontFamily: 'Satoshi, sans-serif', fontSize: {xs:'20px', sm: '22px', md: '22px', lg:'24px'}, lineHeight: '130%', textAlign: 'center', width: '80.139%', margin: '0 auto 48px auto'}}>
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
        programs to their customers. With our AI Powered platform, you can
        easily create and manage custom loyalty and rewards programs, track
        customer engagement, and gain valuable insights to improve your
        business. Sign up now to get early access.
      </Typography>
    </Box>
  );
};

export default Hero;
