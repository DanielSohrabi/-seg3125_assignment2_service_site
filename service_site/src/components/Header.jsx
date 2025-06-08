import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar className="navBar">
        <Container className="justify-content-center">
          <Nav className="d-flex flex-row">
            <Nav.Link as={Link} to="/" className="navLink mx-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="navLink mx-5">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/appointments" className="navLink mx-5">
              Book an Appointment
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
