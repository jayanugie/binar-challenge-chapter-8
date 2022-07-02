import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function EditPlayer(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Player</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert Player Username"
                                value={props.username}
                                required
                                autoFocus
                                onChange={(e) => {
                                    props.setUsername(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insert Player Email"
                                value={props.email}
                                required
                                onChange={(e) => {
                                    props.setEmail(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert Player Password"
                                value={props.password}
                                required
                                onChange={(e) => {
                                    props.setPassword(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insert Player Experience"
                                value={props.experience}
                                required
                                onChange={(e) => {
                                    props.setExperience(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Level</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insert Player Level"
                                value={props.lvl}
                                required
                                onChange={(e) => {
                                    props.setLvl(e.target.value)
                                }}
                            />
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={props.editPlayer}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default EditPlayer