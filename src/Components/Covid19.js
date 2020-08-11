import React from "react";
import { makeStyles, Typography, Grid, Paper } from "@material-ui/core";
import { Hand_Wash, Face_Mask, Social_Distance } from "../Images";

const useStyles = makeStyles((theme) => ({
  body: {
    textAlign: "center",
    width: "70%",
    margin: "0 auto",
    padding: "3% 0",
  },
  heading: { fontWeight: "bold" },
  para: { padding: "3px 0" },
  cards: { flexGrow: 1, maxWidth: 800, margin: "0 auto", marginBottom: "3%" },
  handWashImg: {
    width: "46%",
  },
  faceMaskImg: {
    width: "46%",
  },
  socialDistanceImg: {
    width: "46%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "2% 3%",
    color: theme.palette.text.secondary,
    backgroundColor: "#f7f7f7",
  },
}));

const Covid19 = () => {
  const classes = useStyles();
  return (
    <div id="About">
      <div className={classes.body}>
        <Typography variant="h3" className={classes.heading} gutterBottom>
          What is Covid-19 ?
        </Typography>
        <Typography variant="body1" className={classes.para} gutterBottom>
          Coronavirus disease 2019 (COVID-19) is an infectious disease caused by
          severe acute respiratory syndrome coronavirus.
        </Typography>
        <Typography variant="body1" className={classes.para} gutterBottom>
          Common symptoms include fever, cough, fatigue, shortness of breath,
          and loss of smell and taste. While the majority of cases result in
          mild symptoms, some progress to acute respiratory distress syndrome
          (ARDS) possibly precipitated by cytokine storm, multi-organ failure,
          septic shock, and blood clots. The time from exposure to onset of
          symptoms is typically around five days, but may range from two to
          fourteen days.
        </Typography>
        <Typography variant="body1" className={classes.para} gutterBottom>
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions
        </Typography>
        <Typography variant="h6" gutterBottom>
          Follow advice provided by your local health authority.
        </Typography>
      </div>

      <div className={classes.cards}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className={classes.paper} elevation={6}>
              <img
                src={Hand_Wash}
                className={classes.handWashImg}
                alt="Hand Wash"
              />
              <Typography variant="h6">Wash Hands</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className={classes.paper} elevation={6}>
              <img
                src={Face_Mask}
                className={classes.faceMaskImg}
                alt="Face Mask"
              />
              <Typography variant="h6">Use Face Mask</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className={classes.paper} elevation={6}>
              <img
                src={Social_Distance}
                className={classes.socialDistanceImg}
                alt="Social Distance"
              />
              <Typography variant="h6">Keep Distance</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Covid19;