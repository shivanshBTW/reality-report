import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

let styles = theme => ({
    root: {
        margin: theme.spacing(0)
    }, grow: {
        flexGrow: 1,
    },
    appBar: {
        // textAl
    },
    center: {
        textAlign: 'center'
    }

});

class NavBar extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    {/*<div className={classes.grow}/>*/}
                    <Toolbar variant={'dense'}>
                        <Typography variant="h6" className={classes.title}>
                            {this.props.navbarTitle}
                        </Typography>
                    </Toolbar>
                    {/*<div className={classes.grow}/>*/}
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);