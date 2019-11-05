import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import gambar from '../images/Mulai.png';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    maxHeight: "130px",
    marginTop: 30,
  },
});

function Gambar33() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img src={gambar} width="100%" height="100%" />
        <CardContent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default  Gambar33;