import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { BiLinkExternal } from "react-icons/bi";

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

function Github() {
  return (
    <Fade bottom duration={2000}>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <p style={{ color: "white", margin: "2% 20%", paddingBottom: "20px"  }}>
          I consistently solve DSA problems on Leetcode and GeeksforGeeks.
        </p>    
        <GitHubCalendar
          username="adarsh-kn"
          blockSize={15}
          blockMargin={5}
          color="#00ffd6"
          fontSize={16}
        />
      </Row>      
    </Fade>
  );
}

export default Github;
