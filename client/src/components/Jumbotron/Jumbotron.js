import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import firebase from "firebase";

const styles = theme => ({
 root: {
   ...theme.mixins.gutters(),
   paddingTop: theme.spacing.unit * 2,
   paddingBottom: theme.spacing.unit * 2,
   color:'secondary'
 },
});

function PaperSheet(props) {
 const { classes } = props;

 return (
   <div>
     <Paper className={classes.root} elevation={1}>
      
        <Typography>Welcome {firebase.auth().currentUser.displayName} </Typography>
       <Typography>Click on  <a href="/Game"   >CONTINUE</a> to play the game!!!</Typography>

     </Paper>
   </div>
 );
}

PaperSheet.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
