import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {Header} from "./components/Header";
import {PlayersTable} from "./components/PlayersTable";
import {Navigation} from "./components/Navigation";
import {MainTitle} from "./components/MainTitle/MainTitle";
import {NewPlayer} from "./components/NewPlayer/NewPlayer";
import {AppBackend} from "./AppBackend";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: [],
            limit: 10,
            page: 1,
            isVisible: false
        };

        this.backend = new AppBackend();
    }

    componentDidMount() {
        this.updatePlayers();
    }

    closeModal = () => {
        this.setState({ isVisible: false })
    };

    openModal = () => {
        this.setState({ isVisible: true })
    };

    onLimitChange = async (limit) => {
        this.setState({limit}, () => {
            this.updatePlayers();
        });
    };

    prevPage = async (changedPage) => {
        if(changedPage === 0) return;
        this.setState({page: changedPage}, () => {
            this.updatePlayers();
        });
    };

    nextPage = async (changedPage) => {
        if(this.state.players.length < this.state.limit) return;
        this.setState({page: changedPage}, () => {
            this.updatePlayers();
        });
    };



    updatePage = async () => {
        this.updatePlayers();
    };

    updatePlayers = async () => {
        const players = await this.backend.getPlayers(this.state.page, this.state.limit);

        this.setState({
            players
        });
    };

    // {name: 'bls'}
    addPlayer = async (playerData) => {
        await this.backend.addPlayer(playerData);
        this.updatePlayers();
    };

    render() {
        return (
            <Container>
                <MainTitle/>
                <Header openModal={this.openModal} updatePage={this.updatePage} onLimitChange={this.onLimitChange} limit={this.state.limit}/>
                <PlayersTable players={this.state.players}/>
                <Navigation prevPage={this.prevPage} nextPage={this.nextPage} curentPage={this.state.page}/>
                <NewPlayer isVisible={this.state.isVisible} closeModal={this.closeModal} addPlayer={this.addPlayer}/>
            </Container>
        );
    }
}

export default App;
