import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import "./Header.css";

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: true
        };
    }

    render() {
        return <div className="header">
            <span>Limit</span>
            <Col lg="2">
                <Form.Control as="select" onChange={(event) => this.props.onLimitChange(event.target.value)} defaultValue={this.props.limit}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                </Form.Control>
            </Col>
            <span>players on page</span>
            <div className="header__buttons">
                <Button className="buttons_first" variant="warning" onClick={() => { this.props.updatePage()}}>Update</Button>
                <Button variant="warning" onClick={this.props.openModal}>Add Player</Button>
            </div>
            <span>Search:</span>
            <Col lg="3">
                <Form.Control type="text"/>
            </Col>
        </div>
    }
};
