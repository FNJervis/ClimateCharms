import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import reactLogo from './react.svg';
import CartIcon from './cart.png'
import Logo from './logo.jpg'
import LogoPrueba from './logo_2.png'

function NavigationBar() {
    return (
        <Navbar expand="lg" data-bs-theme="dark"  className="bg-body-tertiary">
            <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={LogoPrueba}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                <Navbar.Brand href="#home">Climate Charms</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Shop">Catálgo</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/Cart">Carrito</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;