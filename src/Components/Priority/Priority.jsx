import { Box, Typography } from "@mui/material";
import scribble from "../../Assets/scribble.svg";

const Priority = () => {
  return (
    <Box sx={{ width: {xs:'100%',sm:'100%',md:"44.34%",lg:"44.34%"}, marginTop: {xs:'0px',sm:'0px',md:'200px',lg:'200px'}, marginBottom: {xs:'30px',sm:'30px'}}}>
      <Typography
        variant="h3"
        sx={{
          fontSize: {xs:'44px',sm:'44px',md:'54px',lg:"64px"},
          lineHeight: "130%",
          fontWeight: "700",
          color: "#fcfcfc",
          marginBottom: "0",
          fontFamily: "Satoshi, sans-serif",
          textAlign: {xs:'center',sm:'center',md:'start'}
        }}
      >
        Priority Access
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <img src={scribble} alt="" />
      </Box>
      <Typography
        variant="p"
        sx={{
          color: "#fcfcfc",
          fontSize: {xs:'20px',sm:'20px',md:"22px", lg:'24px'},
          fontWeight: "500",
          lineHeight: "130%",
          textAlign: "start",
          fontFamily: "Satoshi, sans-serif",
        }}
      >
        Get ready to revolutionize the way you interact with your customers and
        drive sales with Loyalbaze. Skip the waitlist and get exclusive priority
        access to LoyalBaze. Limited slots available. Please tell us a bit about
        your business and needs and of our consultants will be in
        touch Immediately!
      </Typography>
    </Box>
  );
};

export default Priority;
