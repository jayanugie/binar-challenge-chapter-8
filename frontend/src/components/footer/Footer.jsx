import React from "react"
import { Navbar, Container } from "react-bootstrap"

function Footer() {
    return (
        <div>
            <Navbar bg="light" fixed="bottom">
                <Container>
                    <p className="mx-auto">Copyright &copy; Kelompok 4</p>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer