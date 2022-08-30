import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Fade, Flip } from "react-reveal";
import { left, style } from "glamor";
import { BiLinkExternal } from "react-icons/bi";

import icse from "../../Assets/pdfs/icse_marks.pdf";
import puc from "../../Assets/pdfs/puc_marks.pdf";
import bmsce from "../../Assets/pdfs/bmsce_marks.pdf";

function Education() {
  
    const style_img = style({
      width: "220px",
      height: "auto",
      borderRadius: " 50%",
      padding: "10px",
      border: `2.3px solid rgba(23, 255, 220, 0.637)`,
      marginRight: "50px",
      boxShadow: `0px 1px 15px rgba(23, 255, 220, 0.637)`,
      transition: "all 0.2s ease-in-out",
      ":hover": {
        color: "rgba(255, 255, 255, 1)",
        boxShadow: `0px 8px 25px rgba(23, 255, 220, 0.637)`,
      },
      "@media (max-width: 768px)": {
        marginLeft: "50px",
        marginBottom: "15px",
        width: "175px",
      },
    });
  
    const card_body = style({
      borderBottom: `2.3px solid rgba(23, 255, 220, 0.637)`,
      borderLeft: `2.3px solid rgba(23, 255, 220, 0.637)`,
      borderRight: `2.3px solid rgba(23, 255, 220, 0.637)`,
      borderRadius: "7px",
      width: "90%",
      margin: "10px",
      boxShadow: `0px 1px 15px rgba(23, 255, 220, 0.637)`,
      transition: "all 0.2s ease-in-out",
      ":hover": {
        color: "rgba(23, 255, 220, 0.637)",
        boxShadow: `0 5px 15px rgba(23, 255, 220, 0.637)`,
      },
      "@media (max-width: 768px)": {
        width: "100%",
      },
    });
  
    const button_visit = style({
      textDecoration: "none",
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "#36877b",
      padding: "15px 15px",
      marginTop: "25px",
      borderRadius: "7px",
      borderWidth: "0px",
      marginBottom: "20px",
      width: "220px",
      height: "50px",

      fontSize: "17px",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#21b09b"
      },
    });
  
    return (
        <Container fluid className="about-section">
        <Particle />
            <Container>
            <h1 className="project-heading">
                <strong className="purple">Educational </strong> Qualifications
            </h1>
                <div className="degree-card" style={{ paddingBottom: "50px", paddingTop: "20px" }}>
                    <Flip left duration={2000}>
                        <div {...style_img}>
                            <img
                            
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                borderRadius: "50%",                                
                                transform: "scale(-70%, -70%)",
                                backgroundColor: "#fff"                                
                            }}
                            src={require(`../../Assets/be-logo.png`)}              
                            />
                        </div>
                    </Flip>
                    <Fade right duration={2000} distance="40px">
                    <div {...card_body}>
                        <div
                        className="body-header"
                        style={{ backgroundColor: "#36877b", textAlign: "start" }}
                        >
                        <div className="body-header-title">
                            <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                            BMS College of Engineering
                            </h2>
                            <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                            Computer Science and Engineering
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration" style={{ color: "#FFFFFF" }}>
                            2019 - Present<br /><br />CGPA : 9.80
                            </h3>
                        </div>
                        </div>
                        <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>
                            👉 Currently pursuing my <b className="purple">Bachelor of Engineering</b> in <b className="purple">Computer Science and Engineering</b>.<br />
                            👉 <b className="purple">Senior Core Member</b> of the Computer Science Department Club - <b className="purple">CodeIO</b>.<br />
                            👉 Served as a <b className="purple">Organising Committee Coordinator</b> for the college technical and cultural fests.<br />
                            👉 <b className="purple">Active participation</b> in various <b className="purple">coding contests</b> and <b className="purple">hackothons</b>.
                            </p>
                            
                            <a
                                href={bmsce}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", textAlign: "center" }}>
                                <p
                                {...button_visit}
                                style={{
                                    marginRight: "23px",
                                    textDecoration: "none",
                                    float: "right",
                                }}
                                >
                                    <BiLinkExternal />&nbsp;View Transcript
                                </p>
                            </a>
                        </div>
                    </div>
                    </Fade>
                </div>          

                <div className="degree-card" style={{ paddingBottom: "50px" }}>
                    <Flip left duration={2000}>
                        <div {...style_img}>
                            <img                            
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",                                
                                borderRadius: "50%",                                
                                transform: "scale(-70%, -70%)",
                                backgroundColor: "#fff"                                
                            }}
                            src={require(`../../Assets/pu-logo.png`)}              
                            />
                        </div>
                    </Flip>
                    <Fade right duration={2000} distance="40px">
                    <div {...card_body}>
                        <div
                        className="body-header"
                        style={{ backgroundColor: "#36877b", textAlign: "start" }}
                        >
                        <div className="body-header-title">
                            <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                            VVS Sardar Patel Pre-University College
                            </h2>
                            <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                            Physics, Chemistry, Mathematics &amp; Electronics
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration" style={{ color: "#FFFFFF" }}>
                            2017-2019<br /><br />Percentage : 97%
                            </h3>
                        </div>
                        </div>
                        <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>
                            👉 <b className="purple">Successfully graduated</b> with a percentile of <b className="purple">97%</b>.<br />
                            👉 Served as a <b className="purple">Senior Coordinator</b> and <b className="purple">Volunteer</b> for the college fest - <b className="purple">Rasa Sanje</b>.<br />
                            👉 Secured <b className="purple">1st place</b> in an <b className="purple">inter - college pencil sketching competition</b>.<br />
                            </p>
                            
                            <a
                                href={puc}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", textAlign: "center" }}>
                                <p
                                {...button_visit}
                                style={{
                                    marginRight: "23px",
                                    textDecoration: "none",
                                    float: "right",
                                }}
                                >
                                    <BiLinkExternal />&nbsp;View Marksheet
                                </p>
                            </a>
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="degree-card" style={{ paddingBottom: "50px" }}>
                    <Flip left duration={2000}>
                        <div {...style_img}>
                            <img
                            
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",                                
                                borderRadius: "50%",                                
                                transform: "scale(-70%, -70%)",
                                backgroundColor: "#fff"                                
                            }}
                            src={require(`../../Assets/tnces-logo.png`)}              
                            />
                        </div>
                    </Flip>
                    <Fade right duration={2000} distance="40px">
                    <div {...card_body}>
                        <div
                        className="body-header"
                        style={{ backgroundColor: "#36877b", textAlign: "start" }}
                        >
                        <div className="body-header-title">
                            <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                            The New Cambridge High School (10th Grade, I.C.S.E)
                            </h2>
                            <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                            Science &amp; Computer Applications
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration" style={{ color: "#FFFFFF" }}>
                            2016-2017<br /><br />Percentage : 96.33%
                            </h3>                            
                        </div>
                        </div>
                        <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>
                            👉 Bestowed with the <b className="purple">Best Student Award</b> in the year 2017.<br />
                            👉 Served as a <b className="purple">Member</b> of the school <b className="purple">Student Council</b>.<br />
                            </p>
                            
                            <a
                                href={icse}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", textAlign: "center" }}>
                                <p
                                {...button_visit}
                                style={{
                                    marginRight: "23px",
                                    textDecoration: "none",
                                    float: "right",
                                }}
                                >
                                    <BiLinkExternal />&nbsp;View Marksheet
                                </p>
                            </a>
                        </div>
                    </div>
                    </Fade>
                </div>
            </Container>
      </Container>
    );
}

export default Education;