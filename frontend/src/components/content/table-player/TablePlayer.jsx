import React, { useState } from "react"
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FcDeleteDatabase } from 'react-icons/fc'
import { VscSearchStop } from 'react-icons/vsc'
import EditPlayer from './edit-player/EditPlayer'
import DeletePlayer from './delete-player/DeletePlayer'

function TablePlayer(props) {
    const [currentId, setCurrentId] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [experience, setExperience] = useState(0)
    const [lvl, setLvl] = useState(0)

    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = (id, username, email, password, experience, lvl) => {
        setCurrentId(id)
        setUsername(username)
        setEmail(email)
        setPassword(password)
        setExperience(experience)
        setLvl(lvl)
        setShowEditModal(true)
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = (id) => {
        setCurrentId(id)
        setShowDeleteModal(true)
    };


    const editPlayer = () => {
        const playerList = [...props.players]
        const index = playerList.findIndex((item) => item.id === currentId)
        playerList[index].username = username
        playerList[index].email = email
        playerList[index].password = password
        playerList[index].experience = experience
        playerList[index].lvl = lvl
        props.setPlayers(playerList)
        localStorage.setItem('playerList', JSON.stringify(playerList))
        setShowEditModal(false)
    }

    const deletePlayer = () => {
        const playerDelete = props.players.filter((item) => item.id !== currentId)
        props.setPlayers(playerDelete)
        localStorage.setItem("playerList", JSON.stringify(playerDelete))
        setShowDeleteModal(false)
    }

    const columns = [
        {
            dataField: "id",
            text: "Player ID",
        },
        {
            dataField: "username",
            text: "Username",
        },
        {
            dataField: "email",
            text: "Email",
        },
        {
            dataField: "password",
            text: "Password",
        },
        {
            dataField: "experience",
            text: "Experience",
        },
        {
            dataField: "lvl",
            text: "Player Level",
        },
        {
            dataField: "",
            text: "Actions",
            formatter: (cell, row) => {
                return (
                    <div>
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>Edit Player</Tooltip>
                            }
                        >
                            <Button variant="none" onClick={() => {
                                handleShowEditModal(row.id, row.username, row.email, row.password, row.experience, row.lvl)
                            }}>
                                <FaEdit color="orange" />
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip>Delete Player</Tooltip>
                            }
                        >
                            <Button variant="none" onClick={() => {
                                handleShowDeleteModal(row.id)
                            }}>
                                <FaTrash color="red" />
                            </Button>
                        </OverlayTrigger>
                    </div>
                )
            }
        }
    ];

    const playerTable = () => {
        if (props.players.length == 0) {
            return (
                <div className="text-center">
                    <FcDeleteDatabase size={80} />
                    <p>No Players Data</p>
                </div>
            )
        } else {
            if (props.playersFilter.length > 0) {
                return (
                    <div>
                        <BootstrapTable
                            keyField='id'
                            data={props.playersFilter}
                            columns={columns}
                            pagination={paginationFactory()}
                        />
                    </div>

                )
            } else {
                return (
                    <div className="text-center">
                        <VscSearchStop size={60} />
                        <p>No Players Found</p>
                    </div>
                )
            }
        }
    }

    return (
        <div className="mt-3">
            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    Player List
                    <Button variant="primary" onClick={props.handleShow}>
                        Create Player
                    </Button>
                </Card.Header>
                <Card.Body>
                    {playerTable()}
                </Card.Body>
            </Card>
            <EditPlayer show={showEditModal} handleClose={handleCloseEditModal}
                username={username} setUsername={setUsername}
                email={email} setEmail={setEmail}
                password={password} setPassword={setPassword}
                experience={experience} setExperience={setExperience}
                lvl={lvl} setLvl={setLvl}
                editPlayer={editPlayer} />
            <DeletePlayer show={showDeleteModal} handleClose={handleCloseDeleteModal} deletePlayer={deletePlayer} />
        </div>
    )
}

export default TablePlayer