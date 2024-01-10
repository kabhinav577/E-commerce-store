/* eslint-disable react/prop-types */
import { useMediaQuery, TextField, Box } from '@mui/material';
import { getIn } from 'formik';

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  //These functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(errors, formattedName(field)) &&
        getIn(touched, formattedName(field))
    );

  const formattedHelperText = (field) =>
    getIn(errors, formattedName(field)) && getIn(touched, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
      }}
    >
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName('firstName')}
        error={formattedError('firstName')}
        helperText={formattedHelperText('firstName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName('lastName')}
        error={formattedError('lastName')}
        helperText={formattedHelperText('lastName')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName('country')}
        error={formattedError('country')}
        helperText={formattedHelperText('country')}
        sx={{ gridColumn: 'span 4' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName('street1')}
        error={formattedError('street1')}
        helperText={formattedHelperText('street1')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Street 2"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName('street2')}
        error={formattedError('street2')}
        helperText={formattedHelperText('street2')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName('city')}
        error={formattedError('city')}
        helperText={formattedHelperText('city')}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName('state')}
        error={formattedError('state')}
        helperText={formattedHelperText('state')}
        sx={{ gridColumn: '1fr' }}
      />
      <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName('zipCode')}
        error={formattedError('zipCode')}
        helperText={formattedHelperText('zipCode')}
        sx={{ gridColumn: '1fr' }}
      />
    </Box>
  );
};

export default AddressForm;
