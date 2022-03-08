import * as React from 'react';

import './Navbar.scss';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListIcon from '@mui/icons-material/List';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Avatar} from '@mui/material';
import {NavLink} from 'react-router-dom';
import DFXicon from './../../static/images/DFXicon.png';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const openLeftMenu = Boolean(anchorEl);
  const openRightMenu = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className="navbar">
      <Grid
        container
        className="navbar-left"
        alignItems="center"
        justifyContent="flex-start"
        spacing={{xl: 1}}
        xs={7}
        sm={2.8}
        xl={3.7}
      >
        <Grid item xs={4.5} sm xl={1.5}>
          <Avatar
            className="icon"
            alt="Dashboard"
            src={DFXicon}
            sx={{width: 75, height: 75}}
          />
        </Grid>
        <Grid item xs={1.5} sm xl={0.5}>
          <ListIcon
            fontSize="large"
            aria-controls={openLeftMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openLeftMenu ? 'true' : undefined}
            onClick={handleClick}
          />
        </Grid>
        <Grid item xs={2} sm xl={1}>
          <Button
            aria-controls={openLeftMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openLeftMenu ? 'true' : undefined}
            onClick={handleClick}
          >
            Menu
          </Button>
        </Grid>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openLeftMenu}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <NavLink className="navlink" to="/dashboard">
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="navlink" to="/createosr">
              Create OSR
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLink className="navlink" to="/adminboard">
              Admin Board
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>Loggert</MenuItem>
          <MenuItem onClick={handleClose}>Export Report?</MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={0} sm={7} xl={7.3}></Grid>

      <Grid
        container
        className="navbar-right"
        alignItems="center"
        spacing={{xl: 1}}
        justifyContent="flex-end"
        xs={5}
        sm={2.5}
        xl
      >
        <Grid item xs xl>
          <Typography variant="p" onClick={handleClick2}>
            hello@mail.com
          </Typography>
        </Grid>
        <Grid item xs xl>
          <ArrowDropDownIcon
            fontSize="large"
            className="icon"
            aria-controls={openRightMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openRightMenu ? 'true' : undefined}
            onClick={handleClick2}
          />
        </Grid>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={openRightMenu}
          onClose={handleClose2}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose2}>
            <NavLink className="navlink" to="/profile">
              Profile
            </NavLink>
          </MenuItem>
          {/* <MenuItem onClick={handleClose2}>My Account</MenuItem> */}
          <MenuItem onClick={handleClose2}>Logout</MenuItem>
        </Menu>
      </Grid>
    </div>
  );
}
