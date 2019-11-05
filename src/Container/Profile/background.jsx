import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BorderRadius from './border';
import Iconjsx from './icons';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    background: 'linear-gradient(#004d40, rgb(16, 186, 158, 1))',
    color: "white",
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  margin: {
    backgroundColor: "green",
    borderRadius: "50px"
  }
}));

function Background() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <BorderRadius />
          <Typography variant="h5" color="white" component="h2">
            Vivi Ferliana Putri
          </Typography>
        </CardContent>
        <Typography variant="body" color="white" component="h3">
            Gabung Relawan Sekarang
        </Typography>
        <Iconjsx />
      </CardActionArea>
    </Card>
  );
}
export default Background;