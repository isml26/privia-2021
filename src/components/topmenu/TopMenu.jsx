import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"
import priviaIcon from "../../icons/priviaIcon.svg"
import "./topmenu.scss"
//setting navigaton bar from react bootstrap
function TopMenu() {
    return <Navbar className="topmenu" expand="lg">
        <Navbar.Brand className="Logo2" href="/" ><img src={priviaIcon} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
            >
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Product</Nav.Link>
                    <Nav.Link href="/">Pricing</Nav.Link>
                    <Nav.Link href="/">Resources</Nav.Link>
                    <Nav.Link href="/">Customers</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll">
            <Nav   
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link className="Login">Login</Nav.Link>
                <Container className="btn_StartTrialDiv">
                    <Container className="btn_StartTrial">
                        <Nav.Link className="trialText">Start Free Trial</Nav.Link>
                    </Container>
                </Container>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default TopMenu