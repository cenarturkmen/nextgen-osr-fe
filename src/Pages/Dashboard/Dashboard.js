import './Dashboard.scss';
import Navbar from './../../Components/Navbar/Navbar';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import Grid from '@mui/material/Grid';
import rows from './fakeData.js';

//import columns from './columns.js';

export default function Dashboard() {
  if (localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') === 'true') {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={0} xl={1.5}></Grid>
        <Grid item xs={12} xl={9}>
          <Typography className="header" variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Box className="box-container">
            <div className="box-inner">
              <DataGrid
                align="center"
                flex
                className="dataGrid"
                rows={rows}
                columns={columns}
                autoHeight
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={0} xl={1.5}></Grid>
      </Grid>
    </div>
  );
  } else {
    window.location.href = '/login';
    return <p> hello</p>;
  }
}

const columns = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'Date',
    headerName: 'Date Submitted',
    editable: false,
    type: 'date',
    align: 'center',
    resizable: true,
  },
  {
    field: 'Project',
    headerName: 'Project Name',
    editable: false,
    align: 'center',
  },
  {
    field: 'client',
    headerName: 'Client',
    editable: false,
  },
  {
    field: 'ProjectSoldStatus',
    headerName: 'Project Sold Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    editable: true,
    align: 'center',
    valueFormatter: (params) => {
      const valueFormatted = Number(params.value).toLocaleString();
      return `${valueFormatted} %`;
    },
  },
  {
    field: 'kickOffMeeting',
    headerName: 'Kickoff Meeting',
    editable: true,
  },
  {
    field: 'newHireRequıred',
    headerName: 'New Hire Requıred',
    editable: false,
  },
  {
    field: 'projcectStartDate',
    headerName: 'Projcect Start date',
    type: 'number',
    editable: false,
    align: 'center',
  },
  {
    field: 'ProjcectEndDate',
    headerName: 'Projcect End Date',
    editable: false,
    align: 'center',
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
        style={{background: '#0037ff', marginLeft: 16}}
        onClick={() => {
          console.log(params);
        }}
      >
        Open
      </Button>
    ),
  },
];
