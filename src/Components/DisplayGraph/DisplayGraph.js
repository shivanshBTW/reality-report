import React, {Component} from 'react';
import {Paper, withStyles} from "@material-ui/core";
import {VictoryAxis, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme} from 'victory';

let styles = theme => ({
   root: {
      margin: theme.spacing(2),
   },
});

class DisplayGraph extends Component {
   static defaultProps = {
      previousData: [
         [
            {chapter: 1, score: 40},
            {chapter: 2, score: 57},
            {chapter: 3, score: 83},
            {chapter: 4, score: 91}
         ],
         [
            {chapter: 1, score: 73},
            {chapter: 2, score: 33},
            {chapter: 3, score: 20},
            {chapter: 4, score: 34}
         ],
         [
            {chapter: 1, score: 44},
            {chapter: 2, score: 55},
            {chapter: 3, score: 66},
            {chapter: 4, score: 99}
         ],
      ],
      currentData: [
         {chapter: 1, score: 78},
         {chapter: 2, score: 22},
         {chapter: 3, score: 46},
         {chapter: 4, score: 33}
      ],
   };

   getAverage = () => {
      let {previousData} = this.props;
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
            chapter:key,
            score:ans[key]
         })
      }
      // console.log('finalArray',finalArray);
      return finalArray;
   };

   render() {
      let {classes} = this.props;
      let {previousData,currentData} = this.props;
      let averageScore = this.getAverage();
      return (
          <Paper className={classes.root} elevation={3}>
             <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x => x)}
                />
                <VictoryGroup>
                   <VictoryLine
                       style={{data: {stroke: "#c43a31"}}}
                       animate={{
                          duration: 2000,
                          onLoad: {duration: 1000}
                       }}
                       data={currentData}
                       // data accessor for x values
                       x="chapter"
                       // data accessor for y values
                       y="score"
                   />
                   <VictoryScatter
                       style={{data: {fill: "#c43a31"}}}
                       size={5}
                       data={currentData}
                       x="chapter"
                       y="score"
                   />
                   <VictoryLine
                       style={{data: {stroke: "blue"}}}
                       animate={{
                          duration: 2000,
                          onLoad: {duration: 1000}
                       }}
                       data={averageScore}
                       // data accessor for x values
                       x="chapter"
                       // data accessor for y values
                       y="score"
                   />
                   <VictoryScatter
                       style={{data: {fill: "blue"}}}
                       size={5}
                       data={averageScore}
                       x="chapter"
                       y="score"
                   />
                   <VictoryLine
                       style={{data: {stroke: "green"}}}
                       animate={{
                          duration: 2000,
                          onLoad: {duration: 1000}
                       }}
                       data={previousData[previousData.length-1]}
                       // data accessor for x values
                       x="chapter"
                       // data accessor for y values
                       y="score"
                   />
                   <VictoryScatter
                       style={{data: {fill: "green"}}}
                       size={5}
                       data={previousData[previousData.length-1]}
                       x="chapter"
                       y="score"
                   />
                </VictoryGroup>
             </VictoryChart>
          </Paper>
      );
   }
}

export default withStyles(styles)(DisplayGraph);