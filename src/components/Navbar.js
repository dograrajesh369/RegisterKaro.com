import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Navbar.css'; 

const Navigation = () => {
  return (
    <Navbar
      className="custom-navbar"
      bg="light"
      variant="light"
      expand="lg"
      id="navbar-example"
    >
      <Navbar.Brand className="logo-text" href="#home">
        LISSOME..
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
