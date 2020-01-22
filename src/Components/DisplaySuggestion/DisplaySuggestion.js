import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

let styles = theme => ({
   root: {
      margin: theme.spacing(2),
      // width: '100%',
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
});

class DisplaySuggestion extends Component {
   constructor(props) {
      super(props);
      this.state = {
         computerSuggestion: 'This part may show an auto generated suggestion',
         coachSuggestion: 'This part may show a personal feedback provided by a Coach'
      }

      //Uncomment the next snippet to see the case where no suggestion exists
      this.state = {
         computerSuggestion: '',
         coachSuggestion: ''
      }
   }

   render() {
      let {classes} = this.props;
      return (
         <div className={classes.root}>
            {this.state.computerSuggestion ? (
               <ExpansionPanel elevation={3}>
                  <ExpansionPanelSummary
                     expandIcon={<ExpandMoreIcon/>}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography className={classes.heading}>Computer Generated Suggestion</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                     <Typography>
                        {this.state.computerSuggestion}
                     </Typography>
                  </ExpansionPanelDetails>
               </ExpansionPanel>
            ) : ''
            }

            {this.state.coachSuggestion ? (
               <ExpansionPanel elevation={3}>
                  <ExpansionPanelSummary
                     expandIcon={<ExpandMoreIcon/>}
                     aria-controls="panel2a-content"
                     id="panel2a-header"
                  >
                     <Typography className={classes.heading}>Suggestion from the Coach</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                     <Typography>
                        {this.state.coachSuggestion}
                     </Typography>
                  </ExpansionPanelDetails>
               </ExpansionPanel>
            ) : ''}
         </div>
      );
   }
}

export default withStyles(styles)(DisplaySuggestion);