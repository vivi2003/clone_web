import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 360,
    },
    margin: {
        backgroundColor: "green",
        borderRadius: "50px",
        width: "90%",
        height: "80%",
        textAlign: "center",
        marginLeft: "10px",
        marginTop: "10px",
    },
    margin2: {
      borderRadius: "50px",
      textAlign: "center",
      marginLeft: "30px",
      marginTop: "5px",
    },
    body: {
      textAlign: "center",
    }
});

function Cardjsx() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Header2.png"
          height="170"
          image="https://lindungihutan.com/public/img/LHHeader2.png"
        />
        <CardContent className={classes.body}>
          <Typography variant="body" color="text" component="h2">
            Hal sederhana jadi lebih bermakna bersama lindungi hutan
          </Typography>
          <Typography variant="body" color="text" component="h4">
            Buat aksi penanaman dan lingkungan dengan mudah, aman dan transparant. Mulai Tanam
            #pohonPertama Kamu
          </Typography>
          <Button variant="contained" color="primary" className={classes.margin}>
            Buat Kampanye Alam
          </Button>
        </CardContent>
        <Button variant="outlined" color="text" className={classes.margin2}>
            Pelajari bagaimana kami bekerja
        </Button>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default Cardjsx;