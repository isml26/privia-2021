import React from "react";
import features from "../../icons/featurues.svg"
import analyze from "../../icons/features/analyze.svg"
import collaborate from "../../icons/features/collaborate.svg"
import easy from "../../icons/features/easy.svg"
import embedded from "../../icons/features/embedded.svg"
import chevron from "../../icons/chevron.svg"
import { Container, } from "react-bootstrap"
import {Grid} from "@material-ui/core"
import "./feature.scss"
function Features() {
    const text = "We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."

    return (
        <div>
            <div className="featuresDiv">
            <Container>
            <Grid container justify ="space-between"  >
                    <Grid className="subtext">
                        <img  src={features} alt="features"></img>
                    </Grid>
                    <Grid className="solution">Our solution for your business</Grid>
                    <Grid className="selfService">{text}</Grid>
                    <Grid  item xs={12}  className="analyzeSvg" >
                        <Grid><img src={analyze} alt="analyze"></img></Grid>
                        <Grid className="analyze">Analyze your data</Grid>
                        <Grid className="createRepTxt">Create reports with an easy to use drag-and-drop designer.</Grid>
                        <Grid ><a className="learn1" href="/">Learn More</a></Grid>
                        <Grid ><img className="chevron1" src={chevron} alt="analyze"></img></Grid>
                    </Grid>
                    <Grid className="collaborate" >
                        <Grid ><img src={collaborate} alt="analyze"></img></Grid>
                        <Grid className="analyze">Collaborate securely</Grid>
                        <Grid className="createRepTxt">Share/publish your reports with your colleagues.</Grid>
                        <Grid ><a className="learn1" href="/">Learn More</a></Grid>
                        <Grid ><img className="chevron1" src={chevron} alt="analyze"></img></Grid>
                    </Grid>
                    <Grid className="embedded" >
                        <Grid ><img src={embedded} alt="analyze"></img></Grid>
                        <Grid className="analyze">Embedded analytics</Grid>
                        <Grid className="createRepTxt">Get a powerful analytics tool in your own brand name..</Grid>
                        <Grid ><a className="learn1" href="/">Learn More</a></Grid>
                        <Grid ><img className="chevron1" src={chevron} alt="analyze"></img></Grid>
                    </Grid>
                    <Grid className="intutive" >
                        <Grid ><img src={easy} alt="analyze"></img></Grid>
                        <Grid className="analyze">Easy and Intuitive</Grid>
                        <Grid className="createRepTxt">Easily converse with your data using everyday language.</Grid>
                        <Grid ><a className="learn1" href="/">Learn More</a></Grid>
                        <Grid ><img className="chevron1" src={chevron} alt="analyze"></img></Grid>
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>

    )

}

export default Features;