import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/score-board'>  
                                <Nav.Link>Score Board</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/users'>  
                                <Nav.Link>Users List</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/register'>  
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}