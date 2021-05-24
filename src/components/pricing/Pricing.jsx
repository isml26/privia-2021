import React from "react";
import "./pricing.scss"
import { Grid, Container, Switch, Link, Typography } from "@material-ui/core"
import save from "../../icons/save.svg"
import tick from "../../icons/collaborate/tick.svg"
function Pricing() {
    // creating each pricing card 
    return (
        <Container className="Pricing">
            <Grid direction="row" container>
                <Grid container item xs={12} spacing={3}>
                    <div className="sectionHead">Choose the plan that’s right for your business</div>
                    <div className="free">30-day free trial, cancel any time. No credit card required.</div>
                    <div className="bill1">Bill Monthly</div>
                    <div className="switcher"><Switch /></div>
                    <div className="annualy">Bill Annualy </div>
                    <div className="save"><img src={save} alt=""></img> </div>
                </Grid>
            </Grid>
            <Container>
                <Grid item className="flexbox-container">
                    <Grid className="price1">
                        <Grid className="dollar">$23</Grid>
                        <Grid className="month">/month</Grid>
                        <p className="standart">Standart</p>
                        <Typography className="s1">All the basics for businesses that are just getting started.</Typography>
                        <hr className="line"></hr>
                        <div className="tick1"><img src={tick} alt=""></img> </div>
                        <div className="line1">Single Project Use</div>
                        <div className="tick2"><img src={tick} alt=""></img> </div>
                        <div className="line2">Single Project Use</div>
                        <div className="tick3"><img src={tick} alt=""></img> </div>
                        <div className="line3">Single Project Use</div>
                        <div className="btn1">
                            <div className="textt">
                                <Link href="">Start Free Trial</Link>
                            </div>
                        </div>

                    </Grid>

                    <Grid className="price2">
                        <Grid className="dollar" style={{color:"#49A4FF"}}>$99</Grid>
                        <Grid className="month">/month</Grid>
                        <p className="standart">Essantials</p>
                        <Typography className="s1">Better for growing businesses that want more customers.</Typography>
                        <hr className="line"></hr>
                        <div className="tick1"><img src={tick} alt=""></img> </div>
                        <div className="line1">Unlimited project use</div>
                        <div className="tick2"><img src={tick} alt=""></img> </div>
                        <div className="line2">Advanced dashboard</div>
                        <div className="tick3"><img src={tick} alt=""></img> </div>
                        <div className="line3">All components included</div>
                        <div className="line4">Advanced insight</div>
                        <div className="tick4"><img src={tick} alt=""></img> </div>
                        <div className="btn1">
                            <div className="textt">
                            <Link href="">Start Free Trial</Link>
                            </div>
                        </div>
                    </Grid>
                    {/* // we can overrite method to change styles in price3 */}
                    <Grid className="price3">
                        <Grid className="dollar" style={{color:"white"}}>$139</Grid>
                        <Grid className="month2">/month</Grid>
                        <p className="standart" style={{color:"white"}}>Standart</p>
                        <Typography className="s1" style={{color:"white"}}>All the basics for businesses that are just getting started.</Typography>
                        <hr className="line"></hr>
                        <div className="tick1"><img src={tick} alt=""></img> </div>
                        <div className="line1" style={{color:"white"}}>Single Project Use</div>
                        <div className="tick2"><img src={tick} alt=""></img> </div>
                        <div className="line2" style={{color:"white"}}>Single Project Use</div>
                        <div className="tick3"><img src={tick} alt=""></img> </div>
                        <div className="line3" style={{color:"white"}}>Single Project Use</div>
                        <div className="line4" style={{color:"white"}}>Advanced insight</div>
                        <div className="tick4" ><img src={tick} alt=""></img> </div>
                        <div className="btn1">
                            <div className="textt">
                            <Link href="">Start Free Trial</Link>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Container>

        </Container>
    )
}

export default Pricing;