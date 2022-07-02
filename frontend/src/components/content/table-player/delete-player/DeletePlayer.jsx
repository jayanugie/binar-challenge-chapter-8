import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function DeletePlayer(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButt on>
                    <Modal.Title>Delete Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda yakin akan menghapus player ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={props.deletePlayer}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeletePlayer