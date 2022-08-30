import React from "react";
import { Col, Row, OverlayTrigger } from "react-bootstrap";
import { Fade } from "react-reveal";
import {
  SiC,
  SiPython,
  SiJava,
  SiJavascript,
  SiDjango,
  SiFlutter,
  SiDart,
  SiKotlin,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiArduino,
  SiStreamlit
} from "react-icons/si";

const techdata = {
  data: [
    {
      iconName: <SiC />,
      title: "C Language"
    },
    {
      iconName: <SiJava />,
      title: "Java"
    },
    {
      iconName: <SiPython />,
      title: "Python"
    },
    {
      iconName: <SiDjango />,
      title: "Django"
    },
    {
      iconName: <SiReact />,
      title: "React"
    },
    {
      iconName: <SiHtml5 />,
      title: "HTML5"
    },
    {
      iconName: <SiCss3 />,
      title: "CSS3"
    },
    {
      iconName: <SiJavascript />,
      title: "JavaScript"
    },
    {
      iconName: <SiFlutter />,
      title: "Flutter"
    },
    {
      iconName: <SiDart />,
      title: "Dart"
    },
    {
      iconName: <SiKotlin />,
      title: "Kotlin"
    },
    {
      iconName: <SiMysql />,
      title: "MySQL"
    },
    {
      iconName: <SiGit />,
      title: "Git"
    },
    {
      iconName: <SiStreamlit />,
      title: "Streamlit"
    },
    {
      iconName: <SiArduino />,
      title: "Arduino"
    },
  ]
};

function Techstack() {
  return (
    <Fade bottom duration={2000}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>      
        {techdata.data.map((tech) => {
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
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col> */}
      </Row>
    </Fade>
  );
}

export default Techstack;
