import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import homeLogo from "../../Assets/main-dp.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>                              
            <Col md={7} className="home-header">
            <Fade left distance="40px">           
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi,{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>             

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> ADARSH K N</strong>
              </h1>

              <div style={{ paddingTop: 30, paddingBottom: 50, paddingLeft: 40, paddingRight: 50, textAlign: "left", fontSize: 25 }}>
                <Type />
              </div>
              </Fade>             
            </Col>
                    
          
            <Col md={5} style={{ paddingTop: 125, verticalAlign: "center" }}>
              <Tilt>
                <Fade right distance="40px">
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                              
                </Fade>
              </Tilt>
            </Col>            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
