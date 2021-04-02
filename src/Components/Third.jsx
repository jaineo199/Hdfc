import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BankImg from '../images/payzapp30.jpg'
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Amazon from '../images/Amazon_icon.png';
import Flipkart from '../images/flipkart.jpg';
import Gift from '../images/gift.png';
import Hotel from '../images/Hotel.png';
import Oye from '../images/oyo2.png';
import Plane from '../images/PlaneS.png';
import Redbus from '../images/Redbus2.png';
import Train from '../images/Train.png';
import BottomNav from './BottomNavigation';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },
    // img: {
    //   height: '270px'
    // }
    root: {
        flexGrow: 1,
    
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderBottomColor: '#78a1e3'
      },
      cardsize :{
         
      },
      imgs: {
        margin: 'auto',
        display: 'block',
        maxWidth: '50%',
        maxHeight: '50%',
       
      },
      img: {
        height: '270px'
      }
  }));

export default function SimpleContainer() {

    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
    
        <Container maxWidth="xl" component="div" style={{ backgroundColor: '#cfe8fc', height: '120vh' }}>
       
        <Grid container spacing={1}>
        <Grid item xs={12} md={12} >
         
            <ButtonBase>
            <img className={classes.img} src={BankImg}  style={{width: '100%'}}/>
            </ButtonBase>
        
       
        </Grid>
      
        
      </Grid>

      <Grid container spacing={1} >
        <Grid item xs={3} md={2} className={classes.cardsize}>
          <Paper className={classes.paper}>
           <img className={classes.imgs} src={Amazon}/>
           Amazon <br/>
      
          </Paper>
        </Grid>
        <Grid item xs={3} md={2} style={{borderBottomColor:'#78a1e3'}}>
          <Paper className={classes.paper} style={{borderBottomColor:'#78a1e3'}}>
          <img className={classes.imgs} src={Flipkart}/>
          Flipkart
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Plane}/>
          Fly
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Hotel}/>
           Stay
          </Paper>
        </Grid>
        
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Train}/>
          Trains
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper} >
          <img className={classes.imgs} src={Redbus}/>
          RedBus
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Flipkart}/>
          Flipkart
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper} >
          <img className={classes.imgs} src={Gift}/>
          Gift
          </Paper>
        </Grid>
        <Grid item xs={3} md={2} className={classes.cardsize}>
          <Paper className={classes.paper}>
           <img className={classes.imgs} src={Amazon}/>
           Amazon
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Flipkart}/>
          Flipkart
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Plane}/>
          Fly
          </Paper>
        </Grid>
        <Grid item xs={3} md={2}>
          <Paper className={classes.paper}>
          <img className={classes.imgs} src={Hotel}/>
           Stay
          </Paper>
        </Grid>
       
      </Grid>
      

      </Container>
      
    
    </React.Fragment>
  );
}
