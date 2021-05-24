import React from "react";
import "./testimonial.scss"
import { Grid, Container,Link } from "@material-ui/core"
import group20 from "../../icons/testimonial/group20.svg"
import shopify from "../../icons/testimonial/shopify.svg"
import user1 from "../../icons/testimonial/user1.svg"
import airbnb from "../../icons/testimonial/airbnb.svg"
import user2 from "../../icons/testimonial/user2.svg"
function Testimonial() {
    const userText1 = "I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality."
    const userText2="My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more."
    return (
        <Container className="testimonial">
            <Grid className="testTextDiv">
                <p>More than 1.8 million people across 50,000 companies choose Oval</p>
            </Grid>
            <Grid className="group20">
                <img src={group20} alt=""></img>
            </Grid>
            <Grid className="shopy">
                <img src={shopify} alt=""></img>
                <div className="userText1">{userText1}</div>
                <div className="user1">
                    <img src={user1} alt=""></img>
                </div>
            </Grid>

            <Grid className="shopy2">
                <div className="airbnb">
                <img src={airbnb} alt=""></img>
                </div>
                <div className="userText1">{userText2}</div>
                <div className="user1">
                    <img src={user2} alt=""></img>
                </div>
            </Grid>
            <Grid className="seeAll">
            <Link>See all testimonial</Link> 
            </Grid>   
            
        </Container>
    )
}

export default Testimonial