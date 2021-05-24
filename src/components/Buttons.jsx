import React from "react";
import { Row, } from "react-bootstrap"
import "./buttons.scss"
function Buttons() {
    return <Row>
        <div className="Group3">
            <div className="start">
                <a className="startText" href="/" >Start Free Trial</a>
            </div>
        </div>
        <div className="item">
            <div className="demo">
                <a className="viewText" href="/">View Live Demo</a>
            </div>
        </div>    </Row>
}

export default Buttons

