import React, { useState, useEffect } from "react"
import TablePlayer from './table-player/TablePlayer'
import { Container } from 'react-bootstrap'
import AddPlayer from './add-player/AddPlayer'
import FilterPlayer from './filter-player/FilterPlayer'

function Content() {
    const dataLocalStorage = localStorage.getItem('playerList')
    const [players, setPlayers] = useState(dataLocalStorage ? JSON.parse(dataLocalStorage) : [])

    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const [filter, setFilter] = useState({
        username: "",
        email: "",
        experience: "",
        lvl: ""
    })

    const [filteredPlayers, setFilteredPlayers] = useState([])

    const filteredSearch = () => {
        if (filter.username && filter.email && filter.experience && filter.lvl) {
            setFilteredPlayers(
                players.filter(
                    (item) => item.username == filter.name && item.email == filter.email && item.experience == filter.experience && item.lvl == filter.lvl
                )
            );
        } else if (filter.username) {
            setFilteredPlayers(players.filter((item) => item.username == filter.username));
        } else if (filter.email) {
            setFilteredPlayers(players.filter((item) => item.email == filter.email));
        } else if (filter.experience) {
            setFilteredPlayers(players.filter((item) => item.experience == filter.experience));
        } else if (filter.lvl) {
            setFilteredPlayers(players.filter((item) => item.lvl == filter.lvl));
        } else {
            setFilteredPlayers(players);
        }
    };

    const clearSearch = () => {
        // document.getElementById("filterForm").reset()
        setFilter({
            username: "",
            email: "",
            experience: "",
            lvl: ""
        })
        setFilteredPlayers(players)
    }

    useEffect(() => {
        filteredSearch()
    }, [players])

    return (
        <div>
            <Container fluid="md">
                <FilterPlayer filter={filter} setFilter={setFilter} filterSearch={filteredSearch} clearSearch={clearSearch} />
                <TablePlayer players={players} playersFilter={filteredPlayers} setPlayers={setPlayers} handleShow={handleShowAddModal} />
            </Container>
            <AddPlayer show={showAddModal} handleClose={handleCloseAddModal} setPlayers={setPlayers} />

        </div>
    )
}

export default Content