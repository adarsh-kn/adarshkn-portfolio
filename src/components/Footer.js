import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed with ❤️ by Adarsh K N</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Adarsh</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          
          <li className="social-icons">
              <a
                href="tel:+919449326327"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="home-social-iconss"
              >
                <BsFillTelephoneOutboundFill />
              </a>
          </li> 

          <li className="social-icons">
              <a
                href="mailto:knadarsh1@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="home-social-iconss"
              >
                <SiGmail />
              </a>
            </li>             
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/adarsh-k-n/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="home-social-iconss"
              >
                <FaLinkedinIn />
              </a>
            </li>     
            
            <li className="social-icons">
              <a
                href="https://twitter.com/adarshkn12"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="home-social-iconss"
              >
                <AiOutlineTwitter />
              </a>
            </li>
             
            <li className="social-icons">
              <a
                href="https://www.instagram.com/adarsh__kn/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="home-social-iconss"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
