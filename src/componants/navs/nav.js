import React from "react";
import "./navs.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../imags/logo.png"
const Navs = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} title="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Explore Food</Nav.Link>
              <Nav.Link href="#link">Review</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="lastnav" href="#">00125781468</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Navs;
