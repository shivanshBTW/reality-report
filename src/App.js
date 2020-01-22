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
   constructor(props) {
      super(props);
      this.state = {
         previousData: [
            [
               {chapter: 1, score: 40,label: "Previous Test Score"},
               {chapter: 2, score: 57,label: "Previous Test Score"},
               {chapter: 3, score: 83,label: "Previous Test Score"},
               {chapter: 4, score: 91,label: "Previous Test Score"}
            ],
            [
               {chapter: 1, score: 73,label: "Previous Test Score"},
               {chapter: 2, score: 33,label: "Previous Test Score"},
               {chapter: 3, score: 20,label: "Previous Test Score"},
               {chapter: 4, score: 34,label: "Previous Test Score"}
            ],
            [
               {chapter: 1, score: 44,label: "Previous Test Score"},
               {chapter: 2, score: 55,label: "Previous Test Score"},
               {chapter: 3, score: 66,label: "Previous Test Score"},
               {chapter: 4, score: 99,label: "Previous Test Score"}
            ],
         ],
         currentData: [
            {chapter: 1, score: 78, label: "Current Score"},
            {chapter: 2, score: 22, label: "Current Score"},
            {chapter: 3, score: 46, label: "Current Score"},
            {chapter: 4, score: 33, label: "Current Score"}
         ],
      };
   }

   getAverage = () => {
      let {previousData} = this.state;
      const ans = {};
      const count = {};
      const finalArray = [];
      previousData.forEach(testDataObj => {
         testDataObj.forEach(chapterScoreObj => {
            // console.log(chapterScoreObj);
            if (!ans[chapterScoreObj.chapter]) {
               ans[chapterScoreObj.chapter] = 0;
            }
            if (!count[chapterScoreObj.chapter]) {
               count[chapterScoreObj.chapter] = 0
            }
            ans[chapterScoreObj.chapter] += chapterScoreObj.score;
            count[chapterScoreObj.chapter] += 1;
         })
      });

      for (let key in ans) {
         ans[key] = ans[key] / count[key];
      }
      for (let key in ans) {
         finalArray.push({
            chapter: key,
            score: ans[key],
            label: "Average Score"
         })
      }
      // console.log('finalArray',finalArray);
      return finalArray;
   };

   render() {
      let {classes} = this.props;
      let {previousData, currentData} = this.state;
      let averageScore = this.getAverage();
      return (
         <div className={classes.root}>
            <NavBar navbarTitle={'Navbar'}/>
            <DisplayGraph previousData={previousData} currentData={currentData} averageScore={averageScore}/>
            <DisplayScoreData previousData={previousData} currentData={currentData} averageScore={averageScore}/>
            <DisplaySuggestion/>
         </div>
      );
   }
}

export default withStyles(styles)(App);