import React from "react";
import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { Infected, Recovered, Death } from "../Images";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    background: "grey",
    color: "#dbdddd",
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "2% 3%",
  },
  infected: {
    backgroundColor: "#ef9d1a",
  },
  recovered: {
    backgroundColor: "#3da063",
  },
  deaths: {
    backgroundColor: "#f86161",
  },
  infectedImage: {
    width: "35%",
    height: "25%",
  },
  recoveredImage: {
    width: "40%",
    height: "25%",
  },
  deathImage: {
    width: "38%",
    height: "25%",
  },
}));
export default function InfoPanel({ data }) {
  const {confirmed,recovered,deaths,lastUpdate} = data.globalData.read();
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">

        <Grid item xs={12} sm={4} md={4}>
          <Paper className={cx(classes.paper, classes.infected)} elevation={8}>
            <img
              src={Infected}
              className={classes.infectedImage}
              alt="Infected "
            />
            <Typography>Total Infected</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper className={cx(classes.paper, classes.recovered)} elevation={8}>
            <img
              src={Recovered}
              className={classes.recoveredImage}
              alt="Recovered"
            />
            <Typography>Total Recovered</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Paper className={cx(classes.paper, classes.deaths)} elevation={8}>
            <img src={Death} className={classes.deathImage} alt="Death" />
            <Typography>Total Deaths</Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}