import Navbar from '../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import {FormControl} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import './CreateProject.scss';
import InputLabel from '@mui/material/InputLabel';

import {useState} from 'react';

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
const ChangePassword = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    passwordAgain: '',
    showPasswordAgain: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Grid container>
        <Grid item xs={0} xl={1.5}></Grid>
        <Grid item xs={12} xl={9}>
          <Typography className="header" variant="h4" gutterBottom>
            Create Project
          </Typography>
          <Typography className="header" variant="p" gutterBottom>
            Create Project then you can see the project in the Create OSR page
          </Typography>
          <Card className="profile-card" style={{backgroundColor: '#f2f2f2'}}>
            <FormControl sx={{m: 2}}>
              <InputLabel htmlFor="outlined-adornment-password">
                Project Name
              </InputLabel>
              <OutlinedInput
                sx={{bgcolor: 'white'}}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                label="Password"
              />
            </FormControl>
            {/* <FormControl sx={{m: 2}}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password Again
              </InputLabel>
              <OutlinedInput
                sx={{bgcolor: 'white'}}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                label="Password"
              />
            </FormControl> */}

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
              Create Project
            </Button>
          </Card>
        </Grid>
        <Grid item xs={0} xl={1.5}></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ChangePassword;
