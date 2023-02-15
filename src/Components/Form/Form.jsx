import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = ({ clickOpen }) => {
  const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      companyName: "",
      country: "Select Country",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("name is required"),
      email: Yup.string()
        .email("email is not valid")
        .required("email is required"),
      mobileNumber: Yup.string().matches(phoneRegex, 'mobile number is not valid').required("mobile number is required"),
      companyName: Yup.string().required("company name is required"),
      country: Yup.string().required("country is required"),
      message: Yup.string().required("Please drop a short message"),
    }),
    onSubmit: (values, onSubmitProps) => {
      clickOpen();
      onSubmitProps.resetForm();
    },
  });
  return (
    <Box
      sx={{
        background: "#1D2939",
        borderRadius: "20px",
        width: { xs: "100%", sm: "100%", md: "50.663%", lg: "50.663%" },
        padding: {
          xs: "30px",
          sm: "56px 70px",
          md: "56px 70px",
          lg: "56px 70px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "130%",
          color: "#fff",
          fontFamily: "Satoshi",
          marginBottom: "40px",
        }}
      >
        Book a Consultation with us
      </Typography>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ margin: "0 auto" }}>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: "32px",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: "Satoshi, sans-serif",
                },
              }}
              type="text"
              placeholder="Enter your full name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              name="fullName"
              error={!!formik.touched.fullName && !!formik.errors.fullName}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: "32px",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: "Satoshi, sans-serif",
                },
              }}
              type="text"
              placeholder="Enter your email address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              error={!!formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: "32px",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: "Satoshi, sans-serif",
                },
              }}
              type="text"
              placeholder="Mobile number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
              name="mobileNumber"
              error={
                !!formik.touched.mobileNumber && !!formik.errors.mobileNumber
              }
              helperText={
                formik.touched.mobileNumber && formik.errors.mobileNumber
              }
            />
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: "32px",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "8px",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: "Satoshi, sans-serif",
                },
              }}
              type="text"
              placeholder="Company Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.companyName}
              name="companyName"
              error={
                !!formik.touched.companyName && !!formik.errors.companyName
              }
              helperText={
                formik.touched.companyName && formik.errors.companyName
              }
            />
            <Box>
              <FormControl fullWidth>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.country}
                  name="country"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={!!formik.touched.country && !!formik.errors.country}
                  sx={{
                    background: "inherit",
                    color: "white",
                    border: "1px solid rgba(221, 221, 221, 0.5)",
                    borderRadius: "8px",
                    marginBottom: "32px",
                    fontWeight: "400",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                  }}
                >
                  <MenuItem value="Select Country">Select country</MenuItem>
                  <MenuItem value="Nigeria">Nigeria</MenuItem>
                  <MenuItem value="Ghana">Ghana</MenuItem>
                  <MenuItem value="Benin">Benin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Drop a message....."
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              name="message"
              error={!!formik.touched.message && !!formik.errors.message}
              helperText={formik.touched.message && formik.errors.message}
              sx={{
                marginBottom: "32px",
                "& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                  border: "1px solid rgba(221, 221, 221, 0.5)",
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: "Satoshi, sans-serif",
                  borderRadius: "8px",
                },
              }}
            />
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
                  textTransform: "capitalize",
                }}
              >
                Get early access
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
