import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import './Navbar.css'; // Import the CSS file

function NavigationBar() {
  return (
    <Navbar className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">Climate Charms</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/Shop" className="nav-link">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/Login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} to="/Cart" className="nav-link">Carrito</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
