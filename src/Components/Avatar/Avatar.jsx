import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";


export default function TotalAvatars() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: {
          xs: "25px auto 100px auto",
          sm: "25px auto 100px auto",
          md: "25px auto 334px auto",
          lg: "25px auto 334px auto",
        },
        "& .MuiAvatarGroup-root": { width: "180px", margin: "0 auto" },
      }}
    >
        <Avatar
          alt="Gemy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            background: "#175CE1",
            border: "none !important",
            width: "32px",
            height: "32px",
            padding: "2px",
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            zIndex: '100'
          }}
        />
        <Avatar
          alt="Oravis Howard"
          src="/static/images/avatar/2.jpg"
          sx={{
            background: "#A75FD2",
            border: "none !important",
            width: "32px",
            height: "32px",
            padding: "2px",
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            marginLeft: '-6px',
            zIndex: '90'
          }}
        />
        <Avatar
          alt="Ugnes Walker"
          src="/static/images/avatar/4.jpg"
          sx={{
            background: "#175CE1",
            border: "none !important",
            width: "32px",
            height: "32px",
            padding: "2px",
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            marginLeft: '-6px',
            zIndex: '80'
          }}
        />
        <Avatar
          alt="Mrevor Henderson"
          src="/static/images/avatar/5.jpg"
          sx={{
            background: "#A75FD2",
            border: "none !important",
            width: "32px",
            height: "32px",
            padding: "2px",
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            marginLeft: '-6px',
            zIndex: '70'
          }}
        />
        <Avatar
          alt="+57 Joined"
          src="/static/images/avatar/5.jpg"
          sx={{
            background: 'inherit',
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            width: "102px",
            padding: "2px",
            textAlign: 'center',
          }}
        >+57 Joined</Avatar>
    </Box>
  );
}
