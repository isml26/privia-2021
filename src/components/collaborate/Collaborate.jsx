import React from "react";
import collaborate from "../../icons/collaborate/collaborate.svg"
import subtext from "../../icons/collaborate/subtext.svg"
import tick from "../../icons/collaborate/tick.svg"
import { Grid,} from "@material-ui/core"
import "./collaborate.scss"

function Collaborate() {
    const text = "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."
    return (
        <div className="main">
            <div className="flexbox-container">
                <div className="colGraph">
                <img src={collaborate} alt=""></img>
                </div>
                <Grid className="group16">
                <div className="subtextCollaborate">
                <img src={subtext} alt=""></img>
                </div>
                <div className="collabSectionTitleDiv">
                <p className="collabTextHead">Collaborate with your team anytime, anywhere</p>
                <p className="ttext">{text}</p>

                <div className="flexbox-container2">
                <div className="flexbox-container3">
                <img src={tick} alt=""></img>
                <p className="ticktext">Organize Your Data</p>
                </div>
                <div className="flexbox-container3">
                <img src={tick} alt=""></img>
                <p className="ticktext">Always in sync</p>
                </div>
                </div>

                <div className="flexbox-container2">
                <div className="flexbox-container3">
                <img src={tick} alt=""></img>
                <p className="ticktext">Work with team</p>
                </div>
                <div className="flexbox-container3">
                <img src={tick} alt=""></img>
                <p className="ticktext">Embedded analys</p>
                </div>
                </div>


                <div className="flexbox-container2">
                <div className="flexbox-container3">
                <img src={tick} alt=""></img>
                <p className="ticktext">Business analytics</p>
                </div>
                </div> 


                </div>
                </Grid>
            </div>
        </div>
    )
}

export default Collaborate;