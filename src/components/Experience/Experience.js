import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";
import { BiLinkExternal } from "react-icons/bi";

import phaseShift from "../../Assets/pdfs/psCertificate.pdf";
import utsav from "../../Assets/pdfs/utsav.pdf";
import samsung from "../../Assets/pdfs/prism.pdf";
import vfCertificates from "../../Assets/pdfs/vfCertificates.pdf";
import vf_lor from "../../Assets/pdfs/vf_lor.pdf";
import rakuten from "../../Assets/pdfs/rakuten.pdf";

function Experience() {
    
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
                  Notable <strong className="purple"> Achievements </strong>
              </h1>

              <div className="degree-card" style={{ paddingBottom: "50px" }}>
                      <Flip left duration={2000}>
                          <div {...style_img}>
                              <img                            
                              style={{
                                  maxWidth: "100%",
                                  maxHeight: "100%",                                
                                  borderRadius: "50%",                                
                                  transform: "scale(-70%, -70%)",                                
                              }}
                              src={require(`../../Assets/rakuten.png`)}              
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
                              3rd Place - Bronze
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              Rakuten India
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              Code for Future - Rackathon'22<br /><br />July - 2022
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            
                            <p className="content-list" style={{ color: "white" }}>
                            👉 Rakuten India conducted an <b className="purple">24-hour hackathon - Code for Future - Rakathon'22</b> with 1000+ participating teams.<br />
                            👉 Participated in a team of 4 members -  <b className="purple">Systematic Squad</b>.<br />
                            👉 Submitted our idea under the theme <b className="purple">Fintech</b> with the problem statement - <b className="purple">A framework that makes the local street vendors and small shops discoverable for an user</b>.<br />
                            👉 <b className="purple">Awarded </b> the <b className="purple">3rd Place - Bronze </b> for developing an android app - <b className="purple">"Dukaan Dost"</b> based on our idea.<br />
                            </p>   
                              <a
                                  href={rakuten}
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
                                      <BiLinkExternal />&nbsp;View Credential
                                  </p>
                              </a>
                          </div>
                      </div>
                      </Fade>
                  </div>         
              </Container>

              <Container>
              <h1 className="project-heading">
                  <strong className="purple">Work </strong> Experience
              </h1> 
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
                              src={require(`../../Assets/prism.png`)}              
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
                              Research &amp; Development Intern
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              Samsung PRISM
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              Internship<br /><br />May 2021 - Nov 2021
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>
                            👉 Awarded the <b className="purple">Certificate of Excellence </b> on the <b className="purple">successful completion </b>of the project based on <b className="purple">ONNX ML Model Execution in TEE</b>.<br />
                            👉 <b className="purple">Worked</b> and <b className="purple">coordinated </b> in a team of 4 members under the guidance of our professor and mentors from Samsung Research Institute - Bengaluru (SRI-B).<br />
                            </p>                            
                              
                              <a
                                  href={samsung}
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
                                      <BiLinkExternal />&nbsp;View Credential
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
                              }}
                              src={require(`../../Assets/vff.png`)}              
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
                              Campus Ambassador Intern
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              Viral Fission
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              Marketing<br /><br />May 2021 - Present
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>
                            👉 Have been a part of the <b className="purple">Social Media </b> and <b className="purple">Digital Campaigning </b> of popular brands like <b className="purple">Pepsi, Spotify, Fastrack, Havmor Ice Creams, Unacademy </b>and <b className="purple">Slice Super Card</b>.<br />
                            </p>
                                <a
                                  href={vf_lor}
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
                                      <BiLinkExternal />&nbsp;View LOR
                                  </p>
                              </a>
                              <a
                                  href={vfCertificates}
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
                                      <BiLinkExternal />&nbsp;View Credential
                                  </p>
                              </a>
                          </div>
                      </div>
                      </Fade>
                  </div>  
              </Container>

              <Container>
              <h1 className="project-heading">
                  More <strong className="purple"> Involvements </strong>
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
                              src={require(`../../Assets/codeio.jpeg`)}              
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
                              Senior Core Member
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              CodeIO Club
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              July 2022 - Present
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content" style={{ paddingBottom: "20px" }}>
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>                            
                            👉 <b className="purple">Creating </b> a <b className="purple">Coding Community </b>among the students of my college, BMSCE.<br />
                            👉 <b className="purple">Conducting Coding Sessions</b> to <b className="purple">enhance student's skills</b> to use data structures and algorithms to solve problems efficiently.<br />
                            👉 <b className="purple">Guiding students </b> to <b className="purple">crack Technical Interviews</b>.<br />
                            </p>                             
                          </div>
                      </div>
                      </Fade>
                  </div> 

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
                              src={require(`../../Assets/utsav.jpeg`)}              
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
                              Merchandise Coordinator
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              BMSCE Utsav - Envisage
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              April 2022 - May 2022
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>                            
                            👉 <b className="purple">Managed</b> and <b className="purple">handled </b>all the data regarding sales in the Merchandise Organizing Committee.<br />
                            👉 <b className="purple">Coordinated</b> with other members to keep record of the <b className="purple">data of students</b> ensuring their merchandise was delivered to them as requested.<br />
                            </p>   
                              <a
                                  href={utsav}
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
                                      <BiLinkExternal />&nbsp;View Credential
                                  </p>
                              </a>
                          </div>
                      </div>
                      </Fade>
                  </div> 

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
                              src={require(`../../Assets/ps-logo.png`)}              
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
                              Database Coordinator
                              </h2>
                              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                              BMSCE PhaseShift
                              </h3>
                          </div>
                          <div className="body-header-duration">
                              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                              Oct 2021 - Dec 2021
                              </h3>
                          </div>
                          </div>
                          <div classname="body-content">
                            <h3 className="card-subtitle" style={{ color: "#21b09b", paddingTop: "15px", textAlign: "left" }}>
                                <strong>HIGHLIGHTS</strong>
                            </h3>
                            <p className="content-list" style={{ color: "white" }}>                            
                            👉 <b className="purple">Managed</b> and <b className="purple">handled </b>all the data regarding the events and workshops organised as part of the fest.<br />
                            👉 <b className="purple">Worked</b> using <b className="purple">Google Spreadsheets</b> to link and keep record of the <b className="purple">data of registrants</b> ensuring the smooth conduction of all events at the fest.<br />
                            </p>   
                              <a
                                  href={phaseShift}
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
                                      <BiLinkExternal />&nbsp;View Credential
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

export default Experience;