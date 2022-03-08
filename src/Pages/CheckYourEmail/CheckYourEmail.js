import Navbar from '../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0037ff',
    },
    secondary: {
      main: '#ffffff',
      textColor: '#000000',
    },
    background: {
      main: '#ffffff',
    },
  },
});
const CheckYourEmail = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Grid container>
        <Grid item xs={0} xl={1.5}></Grid>
        <Grid item xs={12} xl={9}>
          <Card
            className="profile-card"
            sx={{m: 2}}
            style={{backgroundColor: '#f2f2f2'}}
          >
            <Typography className="header" variant="h5" gutterBottom>
              Check Your Email
            </Typography>
            <Typography className="p" variant="p" gutterBottom>
              We have sent a link to your email for changing password. Sometimes
              it’s takes 1-2 minutes.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={0} xl={1.5}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CheckYourEmail;
