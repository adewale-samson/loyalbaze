import { Box, Button, InputAdornment, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useFormik } from "formik";
import * as Yup from "yup";

const AccessForm = ({ open, clickOpen }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string()
        .email("email is not valid")
        .required("email is required"),
    }),
    onSubmit: (values, onSubmitProps) => {
      clickOpen();
      onSubmitProps.resetForm();
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%", lg: "40%" },
            margin: "0 auto",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              background: "inherit",
              borderRadius: "8px",
              color: "white",
              '& .MuiInputBase-root::placeholder': {
                color: 'white'
              },
              '& .MuiInputBase-root.MuiOutlinedInput-root': {
                color: "white",
                border: "1px solid white",
                fontFamily: "Satoshi, sans-serif",
              },
              marginBottom: "18px",
            }}
            type="text"
            placeholder="Tell us your name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            error={!!formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                background: "inherit",
                borderRadius: "8px",
                marginBottom: "32px",
                '& .MuiInputBase-root::placeholder': {
                  color: 'white'
                },
                '& .MuiInputBase-root.MuiOutlinedInput-root': {
                  color: "white",
                  border: "1px solid white",
                  fontFamily: "Satoshi, sans-serif",
                },
              }}
              type="text"
              placeholder="Enter your email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              error={!!formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box>
            <Button
              type="submit"
              sx={{
                background:
                  "linear-gradient(112.92deg, #5404FF 18.35%, rgba(189, 59, 210, 0.94) 71.49%)",
                padding: "14px 12px",
                borderRadius: "100px",
                width: "100%",
                color: "#fff",
                textTransform: "none",
                fontFamily: "Satoshi, sans-serif",
              }}
            >
              Get early access
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AccessForm;
