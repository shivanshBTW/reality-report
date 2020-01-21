import React, {Component} from 'react';
import {Paper, withStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

let styles = theme => ({
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(0,2)
    },
    listItem: {
        padding: theme.spacing(1, 0)
    },
    total: {
        fontWeight: "700"
    },
    title: {
        marginTop: theme.spacing(2)
    },
    listContainer: {
        width: "100%"
    },
    button: {
        float: "right"
    }
});

class DisplayScoreData extends Component {
    render() {
        let {classes} = this.props;
        return (
            <Paper className={classes.root} elevation={3}>
                <div className={classes.listContainer}>
                    <List>
                        <ListItem className={classes.listItem} key={2}>
                            <ListItemText primary={"Duration"}/>
                            <Typography variant="body2">lol</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem className={classes.listItem} key={3}>
                            <ListItemText primary={"Daily Budget"}/>
                            <Typography variant="body2">GG</Typography>
                        </ListItem>
                    </List>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(DisplayScoreData);