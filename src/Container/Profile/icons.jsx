import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import PageviewIcon from '@material-ui/icons/Facebook';
import AssignmentIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  avatar: {
    margin: 5,
  },
  bagikan: {
    marginTop: "60px",
    marginLeft: "20px",
  },
  pinkAvatar: {
    marginTop: "38px",
    margin: 5,
    color: '#fff',
    backgroundColor: '#283593',
  },
  greenAvatar: {
    marginTop: "40px",
    margin: 10,
    color: '#fff',
    backgroundColor: '#304ffe',
  },
  button: {
    marginTop: "37px",
    borderRadius: "50px",
  }
});

function Iconjsx() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <h3 className={classes.bagikan}>
        Bagikan:
      </h3>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
      <Button variant="contained" color="secondary" component="h6" className={classes.button}>
        Profile
      </Button>
    </Grid>
  );
}
export default Iconjsx;