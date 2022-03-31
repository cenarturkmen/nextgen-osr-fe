import Navbar from './../../Components/Navbar/Navbar';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Card} from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import Role from './../../Components/Role/Role';
import NewRole from '../../Components/NewRole/NewRole';
import { MenuItem, Select } from '@mui/material';

import './Adminboard.scss';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/system/Box';

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
const roles = ['Admin', 'HR', 'Finance', 'Sales', 'Marketing', 'IT'];
export default function Adminboard() {
  if(localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') === 'true') {
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
              {roles.map((role) => (
                <Role name={role} />
              ))}
              <NewRole />
            </div>
          </Card>
          <Typography className="header" variant="h5" gutterBottom sx={{mt: 5}}>
            Users
          </Typography>
          <Card className="roles-card" sx={{backgroundColor: '#f2f2f2'}}>
            <Box className="box-container">
              <div className="box-inner">
                <DataGrid
                  align="center"
                  flex
                  className="dataGrid"
                  rows={fakeRows}
                  columns={columns}
                  autoHeight
                  components={{
                    Toolbar: GridToolbar,
                  }}
                />
              </div>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={0} xl={1.5}></Grid>
      </Grid>
    </ThemeProvider>
  );
} else {
window.location.href = '/login';
}

const columns = [
  {field: 'id', headerName: 'ID', width: 90},
  {field: 'mail', headerName: 'Email', width: 190},
  {
    field: 'role',
    headerName: 'Role',
    width: 210,
    editable: false,
    renderCell: (rowData) => (
      <>
        <Select
          sx={{bgcolor: 'white'}}
          margin="dense"
          onChange={(e) => {console.log("hello")}}
        >
          {roles.map ((role, key) => ( <MenuItem ley={key} defaultValue={role} value={role}>{role}</MenuItem>))}
        </Select>
      </>
    ),
  },
  {
    field: 'Detail',
    headerName: 'Detail',
    editable: false,
    align: 'center',
    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        style={{background: '#0037ff'}}
        onClick={() => {
          console.log('hello');
        }}
      >
        Update
      </Button>
    ),
  },
];

// const rows = [{id: 1, mail: 'john@doe.com', Detail: 'John Doe'}, 
// ];
// create a fake rows array with 10 items
const fakeRows = Array.from({length: 10}).map((_, i) => ({
  id: i + 1,
  mail: `johndoe` + i + `@gmail.com`,
  role: 'Admin',
}));