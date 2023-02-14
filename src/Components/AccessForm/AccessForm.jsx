import { Box, Button, TextField, InputAdornment, Stack, InputBase } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
};
const accessSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email("email is not valid").required("email is required"),
});

const AccessForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={accessSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack>
              {/* <TextField
                fullWidth
                variant="outlined"
                sx={{background: 'white', padding: '14px 12px'}}
                type="text"
                margin='dense'
                placeholder="Tell us your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              /> */}
              <InputBase
                fullWidth
                variant="outlined"
                margin='normal'
                sx={{background: 'inherit', color: 'white', border: '1px solid #ffffff', borderRadius: '8px', padding: '14px 12px'}}
                type="text"
                placeholder="Tell us your name"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon sx={{color: 'white'}} />
                  </InputAdornment>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <InputBase
                fullWidth
                variant="outlined"
                margin='normal'
                sx={{background: 'inherit', color: 'white', border: '1px solid #ffffff', borderRadius: '8px', padding: '14px 12px'}}
                type="text"
                placeholder="Enter your email address"
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{color: 'white'}} />
                  </InputAdornment>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AccessForm;
