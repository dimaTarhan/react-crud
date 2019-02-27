import React from "react";
import {Table} from "react-bootstrap";
import {PlayerRow} from "../PlayerRow/PlayerRow";
import "./PlayersTable.css";
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

export class PlayersTable extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.players = [
    //         {
    //             foto: "ter Stegen.jpg",
    //             number: "1",
    //             name: "Mark-Andre",
    //             surname: "ter Stegen",
    //             birthDate: new Date(1992, 3, 30),
    //             position: "Keeper"
    //         },
    //         {
    //             foto: "Cillessen.jpg",
    //             number: "13",
    //             name: "Jasper",
    //             surname: "Cillessen",
    //             birthDate: new Date(1989, 3, 22),
    //             position: "Keeper"
    //         },
    //         {
    //             foto: "Umtiti.jpg",
    //             number: "23",
    //             name: "Samuel",
    //             surname: "Umtiti",
    //             birthDate: new Date(1993, 10, 11),
    //             position: "Centre Back"
    //         },
    //         {
    //             foto: "Pique.jpg",
    //             number: "3",
    //             name: "Gerard",
    //             surname: "Pique",
    //             birthDate: new Date(1987, 1, 2),
    //             position: "Centre Back"
    //         },
    //         {
    //             foto: "Lenglet.jpg",
    //             number: "15",
    //             name: "Clement",
    //             surname: "Lenglet",
    //             birthDate: new Date(1995, 6, 17),
    //             position: "Centre Back"
    //         },
    //         {
    //             foto: "Murillo.jpg",
    //             number: "17",
    //             name: "Jeison",
    //             surname: "Murillo",
    //             birthDate: new Date(1992, 4, 27),
    //             position: "Centre Back"
    //         },
    //         {
    //             foto: "Vermaelen.jpg",
    //             number: "24",
    //             name: "Thomas",
    //             surname: "Vermaelen",
    //             birthDate: new Date(1985, 10, 14),
    //             position: "Centre Back"
    //         },
    //         {
    //             foto: "Alba.jpg",
    //             number: "18",
    //             name: "Jordi",
    //             surname: "Alba",
    //             birthDate: new Date(1989, 2, 21),
    //             position: "Left-Back"
    //         },
    //         {
    //             foto: "Roberto.jpg",
    //             number: "20",
    //             name: "Sergi",
    //             surname: "Roberto",
    //             birthDate: new Date(1992, 1, 7),
    //             position: "Right-Back"
    //         },
    //         {
    //             foto: "Semedo.jpg",
    //             number: "2",
    //             name: "Nelson",
    //             surname: "Semedo",
    //             birthDate: new Date(1993, 10, 16),
    //             position: "Right-Back"
    //         },
    //         {
    //             foto: "Busquets.jpg",
    //             number: "5",
    //             name: "Sergio",
    //             surname: "Busquets",
    //             birthDate: new Date(1988, 5, 16),
    //             position: "Defensive Midfield"
    //         },
    //         {
    //             foto: "Samper.jpg",
    //             number: "16",
    //             name: "Sergi",
    //             surname: "Samper",
    //             birthDate: new Date(1995, 0, 20),
    //             position: "Defensive Midfield"
    //         },
    //         {
    //             foto: "Rakitic.jpg",
    //             number: "4",
    //             name: "Ivan",
    //             surname: "Rakitic",
    //             birthDate: new Date(1988, 2, 10),
    //             position: "Central Midfield"
    //         },
    //         {
    //             foto: "Arthur.jpg",
    //             number: "8",
    //             name: "Arthur",
    //             surname: "",
    //             birthDate: new Date(1996, 7, 12),
    //             position: "Central Midfield"
    //         },
    //         {
    //             foto: "Vidal.jpg",
    //             number: "22",
    //             name: "Arturo",
    //             surname: "Vidal",
    //             birthDate: new Date(1987, 4, 22),
    //             position: "Central Midfield"
    //         },
    //         {
    //             foto: "Rafinha.jpg",
    //             number: "12",
    //             name: "Rafinha",
    //             surname: "",
    //             birthDate: new Date(1993, 1, 12),
    //             position: "Central Midfield"
    //         },
    //         {
    //             foto: "Alena.jpg",
    //             number: "21",
    //             name: "Carles",
    //             surname: "Alena",
    //             birthDate: new Date(1998, 0, 5),
    //             position: "Central Midfield"
    //         },
    //         {
    //             foto: "Coutinho.jpg",
    //             number: "7",
    //             name: "Philippe",
    //             surname: "Coutinho",
    //             birthDate: new Date(1992, 6, 12),
    //             position: "Attacking Midfield"
    //         },
    //         {
    //             foto: "Dembele.jpg",
    //             number: "11",
    //             name: "Ousmane",
    //             surname: "Dembele",
    //             birthDate: new Date(1997, 4, 15),
    //             position: "Left Wing"
    //         },
    //         {
    //             foto: "Messi.jpg",
    //             number: "10",
    //             name: "Lionel",
    //             surname: "Messi",
    //             birthDate: new Date(1987, 6, 24),
    //             position: "Right Wing"
    //         },
    //         {
    //             foto: "Malcom.jpg",
    //             number: "14",
    //             name: "Malcom",
    //             surname: "",
    //             birthDate: new Date(1997, 1, 26),
    //             position: "Right Wing"
    //         },
    //         {
    //             foto: "Suarez.jpg",
    //             number: "9",
    //             name: "Luis",
    //             surname: "Suarez",
    //             birthDate: new Date(1987, 0, 24),
    //             position: "Centre Forward"
    //         },
    //         {
    //             foto: "Boateng.jpg",
    //             number: "19",
    //             name: "Kevin-Prince",
    //             surname: "Boateng",
    //             birthDate: new Date(1987, 2, 6),
    //             position: "Centre Forward"
    //         },
    //     ];
    // }

    render(){
        return (
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>Foto</th>
                <TableHeaderCell title="Number" order="desc"/>
                <TableHeaderCell title="First Name" order="desc"/>
                <TableHeaderCell title="Last Name" order="desc"/>
                <TableHeaderCell title="Age" order="desc"/>
                <th>Position</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {
                this.props.players.map((player, index) => {
                    return <PlayerRow {...player} mode={index % 2 ? 'edit' : 'view'} key={player.number}/>
                })
            }
            </tbody>
        </Table>
        );
    }

}
