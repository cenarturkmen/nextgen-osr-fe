// import Navbar from '../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import {FormControl} from '@mui/material';
import {TextField} from '@mui/material';

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
const ForgotYourPassword = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}

      <Grid container>
        <Grid item xs={0} xl={1.5}></Grid>
        <Grid item xs={12} xl={9}>
          <Typography className="header" variant="h4" gutterBottom>
            Forgot Your Password
          </Typography>
          <Card className="profile-card" style={{backgroundColor: '#f2f2f2'}}>
            <FormControl sx={{m: 2}}>
              <TextField label="Email" sx={{bgcolor: 'white'}} type="mail" />
            </FormControl>

            <Button
              sx={{mt: 1}}
              className="button"
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                window.location.href = '/profile/edit';
              }}
            >
              Change Password
            </Button>
          </Card>
        </Grid>
        <Grid item xs={0} xl={1.5}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgotYourPassword;
