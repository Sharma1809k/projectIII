
import React from "react";
import firebase from "firebase";
import "./style.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import ImageAvatars from "../avimg/avatars";
import TextButtons from "../navButton/navButton";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


 const styles = {
   root: {
    flexGrow: 1,
   },
   grow: {
     flexGrow: 1,
   },
   menuButton: {
     marginLeft: -12,
     marginRight: 20,
   },

 };

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="display1" color="inherit" className={classes.grow} >
            Memory Game
          </Typography>
          <ImageAvatars> 

          </ImageAvatars>
          <div className= "signOut">
       <TextButtons><a href="/">Go back</a></TextButtons>
          
            {/* <button  onClick={() => firebase.auth().signOut()}>Sign out!</button> */}

            {/* <Button onClick={() =>Route exact path="/" component={Home}}  </Button> */}
            <TextButtons  onClick={() => firebase.auth().signOut()}>Sign out!</TextButtons>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
