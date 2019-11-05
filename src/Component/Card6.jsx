import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  button: {
      borderRadius: "50px",
      width: "90%",
      height: "80%",
  }
});

function Media2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2">
            Selengkapnya
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h2">
            Ambil bagian untuk menghijaukan kembali Indonesia
          </Typography>
          <Button variant="contained" color="secondary" className={classes.button}>
            DONASI
          </Button>
          <Button variant="contained" color="secondary" className={classes.button}>
            DONASI
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Media2;