import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Buscar">Buscar</Nav.Link>
            <Nav.Link href="#Agregar">Agregar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar