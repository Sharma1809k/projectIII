import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import firebase from "firebase";

const styles = theme => ({
 button: {
   margin: theme.spacing.unit,
 },
 input: {
   display: 'none',
 },
});

function TextButtons(props) {
 const { classes } = props;

 return (
   <div>

     <Button color="secondary" className={classes.button}>

     </Button>
     {/* <Button color="secondary" className={classes.button}>
       Secondary
     </Button> */}
   </div>

 );}

TextButtons.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);