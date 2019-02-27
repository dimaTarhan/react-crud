import React from "react";
import {Button} from "react-bootstrap";

export class Navigation extends React.Component{

    render() {
        const{prevPage, nextPage, curentPage} = this.props;

        return <div className="nav-btn">
            <Button variant="secondary" className="buttons_first" onClick={() => prevPage(curentPage - 1)}>&laquo; Prev</Button>
            <Button variant="secondary" onClick={() => nextPage(curentPage + 1)}>Next &raquo;</Button>
        </div>
    }
};