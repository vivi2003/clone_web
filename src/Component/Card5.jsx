import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Progress from './progres';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
    marginTop: '5%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 161,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Card5() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image={require("../images/tree.png")}
        tittle="live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" class="Bolt">
            #SatuHutan 100 Pohon untuk Gunung Salak!
          </Typography>
          <Progress />
        </CardContent>
      </div>
    </Card>
  );
}
export default Card5;