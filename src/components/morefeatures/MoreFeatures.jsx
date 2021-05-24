import React from "react";
import "./moreFeatures.scss"
import { Grid, Container } from "@material-ui/core"
import easy from "../../icons/moreFeature/easy.svg"
import secure from "../../icons/moreFeature/secure.svg"
import powerful from "../../icons/moreFeature/powerful.svg"
import cloud from "../../icons/moreFeature/cloud.svg"
import proven from "../../icons/moreFeature/proven.svg"
import satisfaction from "../../icons/moreFeature/satisfaction.svg"
import subtext from "../../icons/moreFeature/subtext.svg"
function MoreFeatures() {
    // set properties in flexbox conteriner to set elements side by side
    return (
        <Container className="moreFeatures">
            <Grid item xs={6} className="sectionTitle">
            <div className="subtext">
            <img src={subtext} alt=""></img>
            </div>
                <div className="featuresExplain">
                    We're more than an analytic tool. Explore our features, and satisfy your customers
            </div>
            </Grid>
            <Grid className="flexbox-container">
                <Grid item xs={12} md={6} spacing={3}>
                    <img src={easy} alt=""></img>
                    <p className="head">Easy Customization</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} spacing={3} >
                    <img src={secure} alt=""></img>
                    <p className="head">Secure and fast</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} spacing={3}  >
                    <img src={powerful} alt=""></img>
                    <p className="head">Powerful dashboard</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
            </Grid>
            <div className="flexbox-container">
                <Grid item xs={12} md={6} spacing={3}>
                    <img src={cloud} alt=""></img>
                    <p className="head">Cloud upload</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} spacing={3}>
                    <img src={proven} alt=""></img>
                    <p className="head">Proven Technology</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
                <Grid  item xs={12} md={6} spacing={3}>
                    <img src={satisfaction} alt=""></img>
                    <p className="head">98.99% satisfaction</p>
                    <div>
                        <p className="ddiv">No matter what kind of home you have to share, you can increase your earnings.</p>
                    </div>
                </Grid>
            </div>
        </Container>
    )
}


export default MoreFeatures;



