import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import gambar from '../images/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  menuButton: {
    marginLeft: "40%",
  },
  navbar: {
    backgroundColor: '#004d40',
  }
}));

function AppBar1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar variant="dense">
          <img src={gambar} width="20%" height="25%" />
          <Typography variant="h6"  color="inherit">
            LindungiHutan
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default AppBar1;