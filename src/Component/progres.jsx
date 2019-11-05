import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#e0e0e0', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: 'green',
  },
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  top: {
    color: '#eef3fd',
  },
  bottom: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
});

function FacebookProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

 function Progres() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        value={50}
      />
      <FacebookProgress />
      Penanaman 
      1 Hari
    </div>
  );
}
export default Progres;