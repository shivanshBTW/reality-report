import React, {Component} from 'react';
import {Paper, withStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import classNames from 'classnames';
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
   root: {
      margin: theme.spacing(2),
      padding: theme.spacing(0, 2)
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
   },
   nested: {
      paddingLeft: theme.spacing(4),
   },
}));

function DisplayScoreData(props) {
   const classes = useStyles();
   const [currentTestScoreOpen, setCurrentTestScoreOpen] = React.useState(false);
   const [averageTestScoreOpen, setAverageTestScoreOpen] = React.useState(false);
   const [previousTestScoreOpen, setPreviousTestScoreOpen] = React.useState(false);

   const handleCurrentTestScoreClick = () => {
      setCurrentTestScoreOpen(!currentTestScoreOpen);
   };

   const handleAverageTestScoreClick = () => {
      setAverageTestScoreOpen(!averageTestScoreOpen);
   };

   const handlePreviousTestScoreClick = () => {
      setPreviousTestScoreOpen(!previousTestScoreOpen);
   };

   return (
      <Paper className={classes.root} elevation={3}>
         <div className={classes.listContainer}>
            <List>
               <ListItem className={classes.listItem} button onClick={handleCurrentTestScoreClick} key={1}>
                  <ListItemText primary={"Current Score"}/>
                  {currentTestScoreOpen ? <ExpandLess/> : <ExpandMore/>}
               </ListItem>
               <Collapse in={currentTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.currentData.map((chapterScoreObj, index) => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={index}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score}</Typography>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
               <Divider/>

               <ListItem className={classes.listItem} button onClick={handlePreviousTestScoreClick} key={3}>
                  <ListItemText primary={"Last Test's Score"}/>
                  {previousTestScoreOpen ? <ExpandLess/> : <ExpandMore/>}
               </ListItem>
               <Collapse in={previousTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.previousData[props.previousData.length - 1].map((chapterScoreObj, index) => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={index}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score}</Typography>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
               <Divider/>


               <ListItem className={classes.listItem} button onClick={handleAverageTestScoreClick} key={2}>
                  <ListItemText primary={"Average Score"}/>
                  {averageTestScoreOpen ? <ExpandLess/> : <ExpandMore/>}
               </ListItem>
               <Collapse in={averageTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.averageScore.map((chapterScoreObj, index) => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={index}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score.toFixed(2)}</Typography>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
            </List>

         </div>
      </Paper>
   )
}

export default DisplayScoreData;