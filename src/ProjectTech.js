import {
    SiPython,
    SiJavascript,
    SiDjango,
    SiFlutter,
    SiDart,
    SiKotlin,
    SiReact,
    SiHtml5,
    SiCss3,
    SiGooglecolab,
    SiStreamlit,
    SiRazorpay
} from "react-icons/si";
import {
    SiAndroidstudio,
    SiFirebase,
    SiHeroku,
    SiJupyter,
    SiNetlify,
    SiAmazonaws,
    SiGraphql,
    SiGoogleads,
    SiGoogleplay   
} from "react-icons/si";
import {RiVoiceRecognitionLine} from "react-icons/ri";  
import { Col, OverlayTrigger } from "react-bootstrap";

function ProjectTech(x) {
    if (x.x === "Python")
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
                  Python
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiPython  />
                </Col>
            </OverlayTrigger>
        );
    if (x.x === "Flutter") 
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
                  Flutter
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiFlutter  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Dart")
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
                Dart
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiDart  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Heroku")
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
                Heroku
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiHeroku  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Firebase")
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
                Firebase
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiFirebase  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "React")
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
                React
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiReact  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "HTML5")
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
                HTML
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiHtml5  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "CSS3")
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
                CSS
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiCss3  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "JavaScript")
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
            JavaScript
            </div>
        }>
            <Col xs={1} md={2} className="project-tech-icons">
                <SiJavascript  />
            </Col>
        </OverlayTrigger>
    );
    else if (x.x === "GraphQL")
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
                GraphQL
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiGraphql  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Netlify")
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
                Netlify
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiNetlify  />
                </Col>
            </OverlayTrigger>
        );

    else if (x.x === "Django")
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
                Django
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiDjango />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "AWS Services")
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
                AWS Services
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiAmazonaws  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Kotlin")
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
                Kotlin
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiKotlin  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Android Studio")
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
                Android Studio
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiAndroidstudio  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Google AdMob")
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
                Google AdMob
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiGoogleads  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Google Play Console")
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
                Google Play Console
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiGoogleplay  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Voice")
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
                Voice Recognition
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <RiVoiceRecognitionLine  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Google Colab")
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
                Google Colab
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiGooglecolab  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Streamlit")
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
                Streamlit
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiStreamlit  />
                </Col>
            </OverlayTrigger>
        );
    else if (x.x === "Razorpay")
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
                Razorpay
                </div>
            }>
                <Col xs={1} md={2} className="project-tech-icons">
                    <SiRazorpay  />
                </Col>
            </OverlayTrigger>
        );
}

export default ProjectTech;