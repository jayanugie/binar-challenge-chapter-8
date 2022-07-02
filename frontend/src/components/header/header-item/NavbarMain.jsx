import React from "react"
import { Container, Navbar } from "react-bootstrap"

function NavbarMain() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid="md">
                    <Navbar.Brand href="/">Binar Challange - Chapter 8</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain