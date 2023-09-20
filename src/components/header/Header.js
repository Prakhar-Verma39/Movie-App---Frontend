import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';
import {Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
       <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Nav-Brand href="/" style={{color: 'gold'}}>
                    <FontAwesomeIcon icon={faVideoSlash}/> Gold
                </Nav-Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                         {/* watchlist added superficially only */}
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                     {/* login and register added superficially only */}
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info" className="me-2">Register</Button>
                </Navbar.Collapse>
            </Container>
       </Navbar>
    )
}

export default Header