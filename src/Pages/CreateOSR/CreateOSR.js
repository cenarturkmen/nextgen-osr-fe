import Navbar from './../../Components/Navbar/Navbar';
import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
//import {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import './CreateOSR.scss';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';

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
export default function CreateOSR() {
  // const [account, setAccount] = useState('');
  // // const [project, setProject] = useState('');
  // const [projectStartDate, setProjectStartDate] = useState(null);

  const handleChange = (event) => {
    console.log('hello');
    //setAccount(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Grid container>
        <ThemeProvider theme={theme}>
          <Grid item xs={0} sm={0} md={0} lg={1.5}></Grid>
          <Grid item xs={12} sm md lg={10}>
            <Typography className="header" variant="h4" gutterBottom>
              Create OSR
            </Typography>
            <Typography className="subheader" alignCenter={true} gutterBottom>
              The survey will take approximately 10 minutes to complete. The
              kickoff meeting is our opportunity to learn everything we need to
              know to understand the profile of candidates we'll be looking for
              and to design an effective interview process.
              <Typography alignCenter={true} gutterBottom>
                In addition to defining the basics of the role (What is this job
                title? Who does this person report to?) we use this time to
                partner with you as a hiring manager to help you think about the
                role strategically and start to shape the experience of the
                eventual new hire.
              </Typography>
            </Typography>
            <Box className="box-container" lg xl>
              <Grid container>
                <Grid item xs={0} sm={3} md={4} lg={2.9} ></Grid>
                <Grid item xs={0} sm={6} md lg={6.2} >
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Account Name
                    </InputLabel>
                    <Select
                      sx={{bgcolor: 'white'}}
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      className="formElement"
                      label="Account Name"
                      margin="dense"
                      onChange={handleChange}
                    >
                      <MenuItem value="Garanti Bankası">
                        Garanti Bankası
                      </MenuItem>
                      <MenuItem value="İş Bankası">İş Bankası</MenuItem>
                      <MenuItem value="Lorem">Lorem</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Project Name
                    </InputLabel>
                    <Select
                      sx={{bgcolor: 'white'}}
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      className="formElement"
                      margin="dense"
                      label="Project Name"
                      onChange={handleChange}
                    >
                      <MenuItem value="Nova Forms">Nova Forms</MenuItem>
                      <MenuItem value="Ipsum">Ipsum</MenuItem>
                      <MenuItem value="Lorem">Lorem</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      label="Project Start Date"
                      sx={{bgcolor: 'white'}}
                      type="date"
                      defaultValue="select a date"
                      placeholder="Select a date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      label="Project End Date"
                      sx={{bgcolor: 'white'}}
                      type="date"
                      defaultValue="select a date"
                      placeholder="Select a date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      sx={{bgcolor: 'white'}}
                      label="Project Sold Status"
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      label="New Hire Required Start Date"
                      sx={{bgcolor: 'white'}}
                      type="date"
                      defaultValue="select a date"
                      placeholder="Select a date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>

                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      sx={{bgcolor: 'white'}}
                      label="Backfill Yes/No: (If yes, who left?)"
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      sx={{bgcolor: 'white'}}
                      label="Location or Remote"
                    />
                  </FormControl>
                  <Grid item xs={0} lg={3} >
                    <FormControl className="jobTitleFromControl" sx={{m: 2}}>
                      <TextField
                        fullWidth={true}
                        sx={{bgcolor: 'white'}}
                        label="Job Title + Internal Level"
                      />
                    </FormControl>
                  </Grid>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      id="JobDes"
                      maxRows={4}
                      multiline={true}
                      sx={{bgcolor: 'white'}}
                      label="Job Description for Job Posting:"
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      id="JobDes"
                      multiline={true}
                      sx={{bgcolor: 'white'}}
                      label="The Role and Project Details: "
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      id="JobDes"
                      multiline={true}
                      sx={{bgcolor: 'white'}}
                      label="Must Technologies and Industrial Experience "
                    />
                  </FormControl>
                  <FormControl sx={{m: 2, minWidth: 350}}>
                    <TextField
                      id="JobDes"
                      maxRows={4}
                      multiline={true}
                      sx={{bgcolor: 'white'}}
                      label="Nice to have Technologies and Industrial Experience"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={0} sm={0} md={3} lg={2.9}></Grid>
              </Grid>
            </Box>
            <Grid container>
              <Grid item>
                <Button
                  sx={{mt: 1}}
                  className="button"
                  color="secondary"
                  size="large"
                  variant="contained"
                  onClick={() => {
                    console.log('hello');
                  }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={3.9} sm={8} md={9} lg={10.05}></Grid>
              <Grid item>
                <Button
                  sx={{mt: 1}}
                  className="button"
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log('hello');
                  }}
                >
                  Create OSR
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={0} lg={1.5} ></Grid>
        </ThemeProvider>
      </Grid>
    </div>
  );
}
