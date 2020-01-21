import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import NavBar from "./Components/NavBar/NavBar";
import DisplayGraph from "./Components/DisplayGraph/DisplayGraph";

let styles = theme => ({
   root: {
      margin: theme.spacing(0)
   }
});

class App extends Component {
   render() {
      let {classes} = this.props;
      return (
         <div className={classes.root}>
            <NavBar navbarTitle={'Navbar'}/>
            <DisplayGraph/>
            lol
         </div>
      );
   }
}

export default withStyles(styles)(App);