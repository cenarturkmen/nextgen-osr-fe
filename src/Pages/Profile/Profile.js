import Navbar from '../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import './Profile.scss';

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
const Profile = () => {
  const Name = 'John Doe';
  const Role = 'Software Engineer';
  const Email = 'john@doe.com';

  if (
    localStorage.getItem('isLoggedIn') &&
    localStorage.getItem('isLoggedIn') === 'true'
  ) {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />

        <Grid container>
          <Grid item xs={0} xl={1.5}></Grid>
          <Grid item xs={12} xl={9}>
            <Typography className="header" variant="h4" gutterBottom>
              Profile
            </Typography>
<<<<<<< HEAD
            <Card className="profile-card" style={{backgroundColor: '#f2f2f2'}}>
              <Typography className="p" variant="h5" gutterBottom>
                Name: {Name}
              </Typography>
              <Typography className="p" variant="h5" gutterBottom>
                Role: {Role}
              </Typography>
              <Typography className="p" variant="h5" gutterBottom>
                Email: {Email}
              </Typography>
              <Button
                sx={{mt: 1}}
                className="button"
                color="primary"
                size="large"
                variant="contained"
                onClick={() => {
                  console.log('hello');
                }}
              >
                Change Password
              </Button>
            </Card>
          </Grid>
          <Grid item xs={0} xl={1.5}></Grid>
=======
            <Typography className="p" variant="h5" gutterBottom>
              Role: {Role}
            </Typography>
            <Typography className="p" variant="h5" gutterBottom>
              Email: {Email}
            </Typography>
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
>>>>>>> b9421dc9069b8604a3f3bb28b9e4fd5c2803f574
        </Grid>
      </ThemeProvider>
    );
  } else {
    window.location.href = '/login';
    return <p> hello</p>;
  }
};

export default Profile;
