import React from "react";
import { Col, Row, OverlayTrigger } from "react-bootstrap";
import { Fade } from "react-reveal";
import {
  SiRazorpay,
  SiSublimetext,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiFirebase,
  SiHeroku,
  SiGithub,
  SiGooglecolab,
  SiNetlify,
  SiAmazonaws
} from "react-icons/si";

const toolData = {
  data : [
    {
      iconName: <SiVisualstudiocode />,
      title: "VS Code"
    },
    {
      iconName: <SiSublimetext />,
      title: "Sublime Text"
    },
    {
      iconName: <SiGooglecolab />,
      title: "Google Colab"
    },
    {
      iconName: <SiAndroidstudio />,
      title: "Android Studio"
    },    
    {
      iconName: <SiGithub />,
      title: "GitHub"
    },
    {
      iconName: <SiFirebase />,
      title: "Firebase"
    },
    {
      iconName: <SiAmazonaws />,
      title: "Amazon AWS"
    },
    {
      iconName: <SiRazorpay />,
      title: "Razorpay"
    },
    {
      iconName: <SiHeroku />,
      title: "Heroku"
    },
    {
      iconName: <SiNetlify />,
      title: "Netlify"
    },
  ]
};

function Toolstack() {
  return (
    <Fade bottom duration={2000}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {toolData.data.map((tech) => {
          return (
            <OverlayTrigger placement={"top"}
              overlay={
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(33, 176, 155, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                  }}>
                  {tech.title}
                </div>
            }>
              <Col xs={4} md={2} className="tech-icons">
                {tech.iconName}
              </Col>
            </OverlayTrigger>
          );
        })}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col> */}
      </Row>
    </Fade>
  );
}

export default Toolstack;
