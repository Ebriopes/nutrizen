import { makeStyles, AppBar ,Toolbar,Typography,IconButton,MenuItem,Menu } from '@material-ui/core';
import {AccountCircle, } from '@material-ui/icons';
import { AuthContext } from '../context/AuthContext';
import React, { useContext } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const {token} = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} style={{marginBottom: "5vh"}}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nutrizen
          </Typography>
          {token &&
            (<div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              </div>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}