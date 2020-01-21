import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

let styles = theme => ({
    root: {
        margin: theme.spacing(2),
    },
});

class DisplaySuggestion extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Paper className={classes.root} elevation={3}>
                suggestion
            </Paper>
        );
    }
}

export default withStyles(styles)(DisplaySuggestion);