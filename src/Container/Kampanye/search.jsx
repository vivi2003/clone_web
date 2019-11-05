
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: "15%",
    borderRadius: "50px",
    width: "70%",
    height: "70%",
    marginTop: "5%",
  },
  input: {
    display: 'none',
  },
}));

function Buttons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Cari Kampanye
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
export default Buttons;