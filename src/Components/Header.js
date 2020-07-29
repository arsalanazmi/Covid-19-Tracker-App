import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Divider } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = {
  navBar: { 
    top: AppBar.height,
    backgroundColor: "#dddddd" },
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider>
      <div 
      style={{ position: "sticky", zIndex: 10, left: 0, right: 0, top: 0, bottom:0 }}
      >
        <AppBar
          zDepth={3}
          style={{ backgroundColor: "#4a4f4d" }}
          title="Nike Shoe Store"
          iconElementLeft={
            <FontIcon
              onClick={() => {setOpen(!open)}}
              style={{ paddingTop: "50%" }}
              className="material-icons"
            >
              menu
            </FontIcon>
          }
        />

        <ClickAwayListener  mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}>
          <Drawer open={open} width={250} containerStyle={styles.navBar}>
            <MenuItem onClick={() => {setOpen(!open)}}> Home </MenuItem>
            <MenuItem onClick={() => {setOpen(!open)}}> What is Covid-19? </MenuItem>
            <MenuItem onClick={() => {setOpen(!open)}}> Country Selector </MenuItem>
            <Divider />
            <MenuItem onClick={() => {setOpen(!open)}}> Info Panel </MenuItem>
            <MenuItem onClick={() => {setOpen(!open)}}> Charts </MenuItem>
          </Drawer>
        </ClickAwayListener>
      </div>
    </MuiThemeProvider>
  );
};

export default Header;