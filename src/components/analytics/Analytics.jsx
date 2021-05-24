import React from "react";
import { Row, Col } from "react-bootstrap";
import deneme from "../../icons/deneme.svg"
import analy from "../../icons/analyticLine.svg"
import "./analytic.scss"
function Analytics() {
    const text1 = "Analyze your data with our analyze tools"
    const text2 = "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."
    return (<div>
        <Row className="Group19">
            <Col className="analy">
                <img src={analy} alt =""></img>
            </Col>
            <Col className="text1">
                {text1}
            </Col>
            <Col className="text2">
                {text2}
            </Col>
            <Col className="combine">
                <div>Powerful Dashboard </div>
                <div>Combine multiple reports into a single beautiful dashboard.</div>
            </Col>
            <Col className="always">
                <div>Always in Sync  </div>
                <div>Don’t worry about the data, always be synchronized.</div>
            </Col>
        </Row>
        <div className="analyGraph">
            <img src={deneme} alt=""></img>
        </div>
    </div>
    )
}
export default Analytics

