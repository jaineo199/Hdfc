import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import SearchIcon from '@material-ui/icons/Search';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },

  CenterFocusWeak:{
   marginLeft:'30px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft:'30px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <React.Fragment className={classes.root}>
          <CssBaseline/>
    
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <CenterFocusWeakIcon className={classes.CenterFocusWeak}/>
          <Typography variant="h6" className={classes.title}>
          SmartBUY<br/>
            Where deals get better
          </Typography>
          < SearchIcon />
        </Toolbar>
      </AppBar>
   
    </React.Fragment>
  );
}