import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#4a4f4d" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <span className="nav">
            <Button color="inherit">Home</Button>
            <Button color="inherit">Covid-19</Button>
            <Button color="inherit">Info Panel</Button>
            <Button color="inherit">Charts</Button>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
