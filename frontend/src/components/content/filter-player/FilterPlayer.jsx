import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'


function FilterPlayer(props) {
    return (
        <div className='mt-3'>
            <Card>
                <Card.Header>Search Player</Card.Header>
                <Card.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Search By Username"
                                        onChange={(e) => {
                                            props.setFilter({ ...props.filter, username: e.target.value })
                                        }}
                                        value={props.filter.username} />
                                </Form.Group>
                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Search By Email"
                                        onChange={(e) => {
                                            props.setFilter({ ...props.filter, email: e.target.value })
                                        }}
                                        value={props.filter.email} />
                                </Form.Group>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control type="number" placeholder="Search By Player Experience"
                                        onChange={(e) => {
                                            props.setFilter({ ...props.filter, experience: e.target.value })
                                        }}
                                        value={props.filter.experience} />
                                </Form.Group>

                            </div>
                            <div className='col-md-6'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Level</Form.Label>
                                    <Form.Control type="number" placeholder="Search By Player Level"
                                        onChange={(e) => {
                                            props.setFilter({ ...props.filter, lvl: e.target.value })
                                        }}
                                        value={props.filter.lvl} />
                                </Form.Group>
                            </div>
                        </div>
                        <Button className='float-end' variant="primary" onClick={props.filterSearch}>Search</Button>
                        <Button className='float-end me-1' variant="danger" onClick={props.clearSearch}>Clear</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FilterPlayer