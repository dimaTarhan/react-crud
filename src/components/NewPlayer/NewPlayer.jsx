import React from "react";
import './NewPlayer.css';
import {Button, Col, Form, Row} from "react-bootstrap";

export class NewPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.form = React.createRef();
        this.image = React.createRef();
    }

    onSaveClick = () => {
        const formData = new FormData();
        const {elements} = this.form.current;
        const imgFile = this.image.current.files[0];
        [...elements].forEach((element) => {
            console.log(element.tagName);
            if(element.tagName === "BUTTON") return;
            formData[element.name] = element.value;
        });

        if(imgFile.name){
            formData.foto = imgFile.name;
        } else {
            formData.foto = formData.name;
        }

        formData.imageFile = imgFile;

        this.props.addPlayer(formData);
        this.props.closeModal();
    };

    render(){
        if (this.props.isVisible){
            return <div className="newPlayerContainer">
                <div className="newPlayerBackground"></div>
                <div className="newPlayer">
                    <div className="newPlayer__header">
                        <span>Welcome to FC Barcelona!</span>
                    </div>
                    <Form ref={this.form} encType="multipart/form-data">
                        <Row>
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="First Name" name="name" required/>
                                </Col>
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Col>
                                    <Form.Control type="text" placeholder="Last Name" name="surname"/>
                                </Col>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Birth Date</Form.Label>
                                <Col>
                                    <Form.Control type="date" name="birthDate"/>
                                </Col>
                            </Col>
                            <Col>
                                <Form.Label>Position</Form.Label>
                                <Col>
                                    <Form.Control as="select" name="position">
                                        <option>Keeper</option>
                                        <option>Centre Back</option>
                                        <option>Left-Back</option>
                                        <option>Right-Back</option>
                                        <option>Defensive Midfield</option>
                                        <option>Central Midfield</option>
                                        <option>Left Wing</option>
                                        <option>Right Wing</option>
                                        <option>Centre Forward</option>
                                    </Form.Control>
                                </Col>
                            </Col>
                            <Col>
                                <Form.Label>Preferred number</Form.Label>
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Form.Control type="number" name="number" min="1" max="99"/>
                                </Col>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Add Foto</Form.Label>
                                <Col md={{ span: 4, offset: 4 }}>
                                    <Form.Control type="file" name="foto" className="fileInput" ref={this.image}/>
                                </Col>
                            </Col>
                        </Row>

                        <div className="newPlayer__buttons">
                            <Button variant="danger" type="reset">Reset</Button>
                            <Button className="newPlayer__middle-button" variant="warning" onClick={this.onSaveClick}>Add Player</Button>
                            <Button variant="secondary" onClick={this.props.closeModal}>Cancel</Button>
                        </div>
                    </Form>
                </div>
            </div>
        } else return "";
    }
}