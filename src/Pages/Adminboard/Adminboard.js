import Navbar from './../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import {FormControl} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Role from './../../Components/Role/Role';
import InputLabel from '@mui/material/InputLabel';
import './Adminboard.scss';

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
export default function Adminboard() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Grid container>
        <Grid item xs={0} xl={1.5}></Grid>
        <Grid item xs={12} xl={9}>
          <Typography className="header" variant="h4" gutterBottom>
            Adminboard
          </Typography>
          <Typography className="header" variant="h5" gutterBottom>
            Roles
          </Typography>
          <Card className="roles-card" style={{backgroundColor: '#f2f2f2'}}>
            <div className="roles">
              <Role className="role" name=" hello" description="darling" />
              <Role className="role" name=" hello" description="darling" />
            
            </div>
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
}
