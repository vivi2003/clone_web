import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    background: 'linear-gradient(#004d40, rgb(16, 186, 158, 1))',
    borderRadius: "30px 30px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "30px",
    borderBottomLeftRadius: "30px",
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

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body" component="h1">
            Kampanye Alam
          </Typography>
          <Typography variant="body2" component="p">
            Mulai Kampanye alam pertamamu, buat gerakan penanaman atau aksi lingkungan
            dengan mudah, aman dan transparan.
          </Typography>
        </CardContent>
      </CardActionArea>
      <ThemeProvider>
        <Button variant="contained" color="primary" className={classes.margin}>
          Buat Kampanye Alam
        </Button>
      </ThemeProvider>
    </Card>
  );
}
export default MediaCard;