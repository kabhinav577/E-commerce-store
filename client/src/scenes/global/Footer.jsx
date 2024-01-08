import { useTheme, Box, Typography } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            TechMart
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit fugiat rerum fugit cum dolor a voluptates explicabo
            aperiam, ex ad repudiandae? Illo optio omnis aliquam perferendis
            sint alias at amet, ea laudantium? Cumque, repudiandae sapiente.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Careers
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Our Stores
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Tersm & Conditions
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Cares
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Help center
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Track your order
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Corporate & Bulk Purchasing
          </Typography>
          <Typography
            mb="30px"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: shades.primary[500],
                textDecoration: 'underline',
              },
            }}
          >
            Returns & Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 30%, 40%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Dehri-on-sone (821305), Rohats, Bihar
          </Typography>
          <Typography mb="30px">+91 123456789</Typography>
          <Typography mb="30px">Email: 6cJt9@example.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
