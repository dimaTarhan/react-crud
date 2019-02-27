import React from "react";
import {Button, Form} from "react-bootstrap";
import "./PlayerRow.css";

export class PlayerRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditMode: false
        };
    }

    toggleMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    };

    getPlayerAge = (dateOfBirth) => {
        let currentDate = new Date();
        let playerDate = new Date(dateOfBirth);
        let age = currentDate.getFullYear() - playerDate.getFullYear();
        return currentDate.setFullYear(playerDate.getFullYear()) < playerDate ? age - 1 : age;
    };

    render(){
        const {foto, number, name, surname, birthDate, position} = this.props;
        const {isEditMode} = this.state;

        return <tr>
            <td className="table_foto">
                <img src={foto} alt={name}/>
            </td>
            <td className="table_number">{isEditMode ? <Form.Control type="number" defaultValue={number} min="1" max="99"/> : number}</td>
            <td className="table_name">{name}</td>
            <td className="table_surname">{surname}</td>
            <td className="table_age">{this.getPlayerAge(birthDate)}</td>
            <td className="table_position">{isEditMode ? <Form.Control as="select" defaultValue={position}>
                <option>Keeper</option>
                <option>Centre Back</option>
                <option>Left-Back</option>
                <option>Right-Back</option>
                <option>Defensive Midfield</option>
                <option>Central Midfield</option>
                <option>Left Wing</option>
                <option>Right Wing</option>
                <option>Centre Forward</option>
            </Form.Control> : position}</td>
            <td className="buttons_container">
                {
                    isEditMode ? (
                        <Button variant="primary" onClick={this.toggleMode}>Save</Button>
                    ) : (
                        <div>
                            <Button className="buttons_first" variant="secondary" onClick={this.toggleMode}>Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </div>
                    )
                }
            </td>
        </tr>
    }
}

