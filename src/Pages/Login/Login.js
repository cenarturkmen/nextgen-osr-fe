import * as React from 'react';
import './Login.scss';
import dfxIcon from '../../static/images/DFX-login-icon.png'
import nextGenIcon from '../../static/images/next-gen-icon.png'
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//import columns from './columns.js';

export default function Dashboard() {
  const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
        rememberMe: false
      });
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      };
        const handleClickShowPassword = () => {
      setValues({
            ...values,
            showPassword: !values.showPassword,
        });
        };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
  };

  return (
    <div className='page row'>
        <div className='left-side col-xxl-4 col-md-6 col-lg-5 text-center d-flex'>
            <div className='login-part text-start'>
                <form>
                <h1 className='text-sign-in'>Sign in</h1>
                <FormControl sx={{ mb: 3, width: '300px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">E-mail</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'text'}
                        value={values.email}
                        onChange={handleChange('email')}
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ width: '300px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <div className='d-flex justify-content-between ps-2 mt-2'>
                    <FormControlLabel
                        //className='checkbox'
                        sx={{ '.MuiFormControlLabel-label': { fontSize: 13 } }}
                        value="start"
                        control={<Checkbox />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                    <Link href="#" underline="none" className='link'>
                        {'Forgot your password?'}
                    </Link>
                </div>
                <div className='d-flex justify-content-between mt-2'>        
                    <Button size='large' variant="outlined">SIGN UP</Button>
                    <Button size='large' variant="contained">LOGIN</Button>
                </div>
            </form>
            </div>
        </div>

        <div className='right-side col-xxl-8 col-md-6 col-lg-7 d-none d-md-block'>
            <div className='dfx-items'>
                <h1 className='text-osr'>OSR</h1>
                <h6 className='text-osr-detailed'>OPEN STUFFING REQUEST</h6>
                <img className='dfx-icon' src={dfxIcon}></img>
            </div>

            <div className='next-gen-icon-div'>
                <img className='next-gen-icon' src={nextGenIcon}></img>
            </div>
        </div>
    </div>
  );
}

