import { Box, Alert, AlertTitle, Typography, Button } from '@mui/material';

const Confirmation = () => {
  const generateRandNum = Math.floor(Math.random() * 10000 + 1000000);
  const onClick = () => {
    window.location.href = '/';
  };
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Thank you for your purchase!
      </Alert>

      <Box m="20px auto" display="flex" flexDirection="column" gap="10px">
        <Typography>
          Your order number is <strong>#{generateRandNum}</strong>
        </Typography>
        <Typography>
          We will send you a confirmation once your item has shipped, if you
          would like to check the status of your order(s) please press the link
          below.
        </Typography>
        <Button onClick={onClick} variant="text">
          Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
