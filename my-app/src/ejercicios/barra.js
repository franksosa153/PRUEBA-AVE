import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Barra = () => {
  
  return <>
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ejercicio1</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/2">ejercicio6</Nav.Link>
            <Nav.Link href="/3">ejercicio4</Nav.Link>
            <Nav.Link href="/4">ejercicio4</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
  </>;
};

export default Barra;