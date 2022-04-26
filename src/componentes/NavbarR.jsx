import React from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import logo from "./Imagenes/logoCactusShop.jpg";
import '../App.css';

export default function NavbarR(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav">
        <NavLink className="justify-content-start" onClick= {() => props.setSection('inicio')}>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Cactus Shop
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link className="navlink" href="#productos">Productos</Nav.Link>
            <Nav.Link className="navlink" href="#redes">Nosotros</Nav.Link>
            <Nav.Link className="navlink" href="#contacto">Contactos</Nav.Link>
            <Button className="btn btn-primary" onClick= {() => props.setSection('login')}>LOGIN</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
