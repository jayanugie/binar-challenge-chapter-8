import React, { useState } from 'react'
import { Button, Modal, Form, Toast } from 'react-bootstrap'

function AddPlayer(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [experience, setExperience] = useState(0)
    const [lvl, setLvl] = useState(0)
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(false);

    const resetForm = () => {
        setUsername("")
        setEmail("")
        setPassword("")
        setExperience(0)
        setLvl(0)
    }

    function alertToast() {
        return (
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="mx-auto">Cannot Create Player!</strong>
                </Toast.Header>
                <Toast.Body>
                    <p className='text-center'>Please Fill All Required Columns</p>
                </Toast.Body>
            </Toast>
        )
    }

    const addNewPlayer = () => {
        if (!username || !email || !password) {
            setShowA(true)
        } else {
            props.setPlayers((prev) => {
                if (prev.length > 0) {
                    let id = Number(prev[prev.length - 1].id) + 1
                    resetForm()
                    props.handleClose()
                    const listPlayer = [...prev, { id: id, username, email, password, experience, lvl }]
                    localStorage.setItem('playerList', JSON.stringify(listPlayer))
                    return listPlayer
                } else {
                    let id = 1
                    resetForm()
                    props.handleClose()
                    const listPlayer = [...prev, { id: id, username, email, password, experience, lvl }]
                    localStorage.setItem('playerList', JSON.stringify(listPlayer))
                    return listPlayer
                }
            })
        }

    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <div className='mx-auto'>{alertToast()}</div>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Player<br /></Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert Player Username (*required)"
                                required
                                autoFocus
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Insert Player Email (*required)"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insert Player Password (*required)"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insert Player Experience"
                                onChange={(e) => {
                                    setExperience(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Level</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insert Player Level"
                                onChange={(e) => {
                                    setLvl(e.target.value)
                                }}
                            />
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addNewPlayer}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddPlayer