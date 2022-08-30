import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import ProjectTech from "../../ProjectTech";
import { Row, Container } from "react-bootstrap";
import { Fade } from "react-reveal";

function ProjectCards(props) {
  return (
    <Fade bottom duration={2000}>
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title style={{ color: "#08ffd8", fontSize: "23px" }} >{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <h5 className="card-title" style={{ color: "#08ffd8", fontSize: "18px" }}>
          Tools &amp; Technologies
        </h5>
        <Container fluid style={{ marginTop: "-19px" }}>
          <Row style={{ justifyContent: "center" }}>
             {props.tech.map((x, i) => {
               return (
                <ProjectTech x={x} /> 
               );
                     
              }
             )}
          </Row>
        </Container>
        { props.btn_text !== "" ?
        <Button variant="primary"  href={props.link} style={{ marginTop: "15px" }} target="_blank">
          <BiLinkExternal /> &nbsp;
            {props.btn_text}
        </Button> : <Button variant="primary" disabled href={props.link} style={{ marginTop: "15px" }} target="_blank">          
            To be Published Soon!
        </Button> }
      </Card.Body>
    </Card>
    </Fade>
  );
}
export default ProjectCards;
