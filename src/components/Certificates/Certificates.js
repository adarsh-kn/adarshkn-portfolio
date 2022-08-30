import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import Filter from "./Filter";
import Modal from "./Modal";


import data from "../Data";

function Certificate() {

    const [ccerti, setCcerti] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setCcerti(data);
        setFiltered(data);
    }, []);

    return (
        <Container fluid className="about-section"> 
        <Particle />                  
            <Container>
            <h1 className="project-heading">
                My <strong className="purple">Certificates </strong>
                </h1>
                <p style={{ color: "white", margin: "2% 20%" }}>
                These are some of the certificates I have earned for completing MOOC courses offered by organizations and universities across the world.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Filter ccerti={ccerti} setFiltered={setFiltered} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    
                    <AnimatePresence>
                        {filtered.map((certi) => {
                            return (
                                <OverlayTrigger placement={"top-start"}
                                    overlay={
                                        <div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'rgba(33, 176, 155, 0.85)',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: 3,
                                        }}>
                                        Click to Zoom
                                        </div>
                                    }>                          
                                    <Col md={4} className="project-card" onClick={() => setSelectedImage(certi.image)}>
                                        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                                            <CertificateCards key={certi.id} c={certi} />
                                        </motion.div>
                                    </Col>
                                </OverlayTrigger>    
                            );
                        })}
                    </AnimatePresence>
                </Row>           
            </Container>
            { selectedImage && <Modal selectedImg={selectedImage} setSelectedImg={setSelectedImage} /> }
        </Container>
    );
}

export default Certificate;