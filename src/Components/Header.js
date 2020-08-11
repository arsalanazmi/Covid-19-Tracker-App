import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Logo} from "../Images"

const Header = () => {
  return (
    <Navbar collapseOnSelect className="navbar" expand="md" bg="dark" variant="dark" sticky="top">
    <img src={Logo} className="navlogo" alt="Logo" />
    <Navbar.Brand href="#home">Covid-19 Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Country-Selector">Country Selector</Nav.Link>
          <Nav.Link href="#Info-Panel">Info Panel</Nav.Link>
          <Nav.Link href="#Charts">Charts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;