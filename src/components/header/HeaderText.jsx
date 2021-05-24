import React from "react";
import { Row, Col, } from "react-bootstrap"
import "./header.scss"
function HeaderText() {
    return <Col className="headerText">
        <Row className="powerful">
            Powerfull analytics tools for your business
        </Row>
        <Row className="awesome">
            An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers
            </Row>
    </Col>
}

export default HeaderText;