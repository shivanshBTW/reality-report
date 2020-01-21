import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import NavBar from "./Components/NavBar/NavBar";
import DisplayGraph from "./Components/DisplayGraph/DisplayGraph";
import DisplayScoreData from "./Components/DisplayScoreData/DisplayScoreData";
import DisplaySuggestion from "./Components/DisplaySuggestion/DisplaySuggestion";

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
            <NavBar navbarTitle={'Navbar'} />
            <DisplayGraph/>
            <DisplayScoreData/>
            <DisplaySuggestion/>
         </div>
      );
   }
}

export default withStyles(styles)(App);