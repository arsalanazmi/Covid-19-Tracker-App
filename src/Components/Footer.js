import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    color: "#6f6f70",
    marginTop: "3%",
  },
  anchorTag: {
    color: "#6f6f70",
    textDecoration: "none",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.heading}>
        Copyright &copy; 2020
      </Typography>
      <Typography variant="h6" className={classes.heading}>
        <span className="github">
          Follow on: {""}
          <a
            className={classes.anchorTag}
            href="https://github.com/arsalanazmi/Covid-19-Tracker-App.git"
          >
            Github <GitHubIcon />
          </a>
        </span>
      </Typography>
      <Typography variant="h6" className={classes.heading}>
        Powered By: Arsalan Raza Azmi
      </Typography>
    </div>
  );
};
export default Footer;