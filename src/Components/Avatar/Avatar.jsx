
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
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
        "& .MuiAvatarGroup-root": { width: "200px", margin: "0 auto" },
      }}
    >
      <AvatarGroup
        total={61}
        sx={{
          fontSize: "16px",
          "& .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar": {
            border: "none !important",
            marginLeft: "20px",
            background: "inherit",
            borderRadius: "0",
            fontFamily: "inherit",
          },
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
          }}
        />
      </AvatarGroup>
    </Box>
  );
}
