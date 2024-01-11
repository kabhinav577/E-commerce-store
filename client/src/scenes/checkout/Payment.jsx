/* eslint-disable react/prop-types */
import { Box, Typography, TextField } from '@mui/material';

const Payment = ({ values, errors, touched, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      {/* Conatct Info  */}
      <Box>
        <Typography sx={{ mb: '15px' }} fontSize="18px">
          Conatct Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          name="email"
          value={values.email}
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: 'span 4', mb: '15px' }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone No."
          onBlur={handleBlur}
          onChange={handleChange}
          name="phoneNumber"
          value={values.phoneNumber}
          error={Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: 'span 4' }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
