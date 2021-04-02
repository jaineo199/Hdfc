import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hdfc from '../images/smartbuyrp.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    height: '270px'
  }
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
             
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} >
          <Paper className={classes.paper}>
            <ButtonBase>
            <img className={classes.img} src={Hdfc}  style={{width: '100%'}}/>
            </ButtonBase>
        
          </Paper>
        </Grid>
      
        
      </Grid>
  
    
    </div>
  );
}
