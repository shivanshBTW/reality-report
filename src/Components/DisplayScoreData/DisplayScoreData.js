import React, {Component} from 'react';
import {Paper, withStyles} from "@material-ui/core";

let styles = theme => ({
    root: {
        margin: theme.spacing(2),
    },
});

class DisplayScoreData extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Paper className={classes.root} elevation={3}>
                lol
            </Paper>
        );
    }
}

export default withStyles(styles)(DisplayScoreData);