import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

let styles = theme => ({
   root: {
      margin: theme.spacing(0)
   }
});

class NavBar extends Component {
   render() {
      let {classes} = this.props;
      return (
         <div className={classes.root}>
            <AppBar position="static">
               <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                     {this.props.navbarTitle}
                  </Typography>
               </Toolbar>
            </AppBar>
         </div>
      );
   }
}

export default withStyles(styles)(NavBar);