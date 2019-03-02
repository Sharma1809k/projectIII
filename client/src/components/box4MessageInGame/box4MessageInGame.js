import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TopScore from "../../components/TopScore"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
let themeSong = new Audio("./avengsong.mp3");
function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
      <Typography component="p"> 
      {this.props.message}
      </Typography>
    
      {/* <button onClick={this.props.musicToggle}><img className = "music" src = "./music-player.png" /></button> */}

      {/* <div className= "board">
 
    <TopScore> Score: {this.props.score} | | Top Score: {this.props.topScore}<p>View <a href="/Scores"   >Top Scores </a> </p></TopScore>
    </div> */}

        {/* {deal} */}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);