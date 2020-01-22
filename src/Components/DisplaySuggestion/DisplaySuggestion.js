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
    render() {
        let {classes} = this.props;
        return (
            <Paper className={classes.root} elevation={3}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                       expandIcon={<ExpandMoreIcon />}
                       aria-controls="panel1a-content"
                       id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                       expandIcon={<ExpandMoreIcon />}
                       aria-controls="panel2a-content"
                       id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Expansion Panel 2</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        );
    }
}

export default withStyles(styles)(DisplaySuggestion);