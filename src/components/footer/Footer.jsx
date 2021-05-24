import React from "react";
import "./footer.scss"
import priviaIcon from "../../icons/priviaIcon.svg"
import { Row, Col, } from "react-bootstrap"
import { Container, Link, IconButton,Grid } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <div className="footer">
            <div className="footerimg">
                <img src={priviaIcon} alt=""></img>
            </div>
            <IconButton className="twitter" onClick={() => { }}>
                <TwitterIcon />
            </IconButton>
            <IconButton className="facebook" onClick={() => { }}>
                <FacebookIcon />
            </IconButton>
            <IconButton className="linkedIn" onClick={() => { }}>
                <LinkedInIcon />
            </IconButton>
            <Grid className="ff">
            © 2021 Privia
            </Grid>
            <Container className="footerProduct">
                <div className="footerHead">Product</div>
                <Col >
                    <Row><Link>LandingPage</Link></Row>
                    <Row><Link>Features</Link></Row>
                    <Row><Link>Documentation</Link></Row>
                    <Row><Link>Referral Program</Link></Row>
                    <Row><Link>Pricing</Link></Row>

                </Col>
            </Container>
            <Container className="footerServices">
                <div className="footerHead">Services</div>
                <Col >
                    <Row><Link>Documentation</Link></Row>
                    <Row><Link>Design</Link></Row>
                    <Row><Link>Themes</Link></Row>
                    <Row><Link>İllustrations</Link></Row>
                    <Row><Link>UI KiT</Link></Row>

                </Col>
            </Container>
            <Container className="footerCompany">
                <div className="footerHead">Company</div>
                <Col >
                    <Row><Link>About</Link></Row>
                    <Row><Link>Terms</Link></Row>
                    <Row><Link>Privacy Policy</Link></Row>
                    <Row><Link>Careers</Link></Row>
                </Col>
            </Container>
            <Container className="footerMore">
                <div className="footerHead">More</div>
                <Col >
                    <Row><Link>Documentation</Link></Row>
                    <Row><Link>License</Link></Row>
                    <Row><Link>Changelog</Link></Row>

                </Col>
            </Container>
        </div>
    )
}

export default Footer;