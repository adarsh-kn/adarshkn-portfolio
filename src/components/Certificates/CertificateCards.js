import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";

function CertificateCards({c}) {
  return (
    <Fade bottom duration={2000}>
    <Card className="project-card-view">
        <motion.div layout>
            <Card.Img variant="top" src={c.image} alt={c.title} />
            <Card.Body>
                <Card.Title style={{ color: "#08ffd8" }} >{c.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    {c.by}
                </Card.Text>                
            </Card.Body>
        </motion.div>
    </Card>
    </Fade>
  );
}
export default CertificateCards;