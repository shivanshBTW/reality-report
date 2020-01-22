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
   const [currentTestScoreOpen, setCurrentTestScoreOpen] = React.useState(true);
   const [averageTestScoreOpen, setAverageTestScoreOpen] = React.useState(true);
   const [previousTestScoreOpen, setPreviousTestScoreOpen] = React.useState(true);

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
               <ListItem className={classes.listItem} key={2}>
                  <ListItemText primary={"Current Score"}/>
               </ListItem>
               <Collapse in={currentTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.currentData.map(chapterScoreObj => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={2}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score}</Typography>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
               <Divider/>
               <ListItem className={classes.listItem} key={2}>
                  <ListItemText primary={"Current Score"}/>
               </ListItem>
               <Collapse in={averageTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.currentData.map(chapterScoreObj => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={2}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score}</Typography>
                           </ListItem>
                        )
                     })}
                  </List>
               </Collapse>
               <Divider/>
               <ListItem className={classes.listItem} button onClick={handleClick} key={2}>
                  <ListItemText primary={"Current Score"}/>
               </ListItem>
               <Collapse in={previousTestScoreOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {props.currentData.map(chapterScoreObj => {
                        return (
                           <ListItem className={classNames(classes.listItem, classes.nested)} key={2}>
                              <ListItemText primary={`chapter ${chapterScoreObj.chapter}`}/>
                              <Typography variant="body2">{chapterScoreObj.score}</Typography>
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