import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import apple from "../../Assets/Projects/apple.png";
import brain from "../../Assets/Projects/brain.png";
import foodies from "../../Assets/Projects/foodies.png";
import money from "../../Assets/Projects/money.png";
import neural from "../../Assets/Projects/neural.png";
import blog from "../../Assets/Projects/blog.png";
import ttt from "../../Assets/Projects/ttt.png";
import sttm from "../../Assets/Projects/sttm.png";
import Modal from "../Certificates/Modal";
import research from "../../Assets/pdfs/sttm.pdf";

function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white", margin: "2% 20%"  }}>
          Here are some of the projects I've worked on.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" onClick={() => setSelectedImage(foodies)}>
            <ProjectCard
              imgPath={foodies}              
              title="BMSCE Foodies"
              description="A Zomato-like app to order food from the canteens of our college, BMSCE. This app will prove to be of great convience to the students as they can order from anywhere on campus without waiting in queues in the canteens."
              link="https://play.google.com/store/apps/details?id=com.project.bmsce_foodies"
              tech={ ["Flutter", "Dart", "Firebase", "Heroku", "Razorpay"] }
              btn_text=""
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(sttm)}>
            <ProjectCard
              imgPath={sttm}              
              title="Short Text Topic Modelling"
              description="Completed an exploratory analysis on topic modelling algorithms, GSDMM
              and BERTopic, on three datasets to evaluate their performance."
              link={research}
              tech={ ["Python", "Google Colab", "Streamlit"] }
              btn_text="View Research Paper"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(blog)}>
            <ProjectCard
              imgPath={blog}              
              title="BMSCE Blog"
              description="Developed a highly interactive blog website for my college BMSCE, where students can interact with peers and pen down their experiences in college. Thus, this website serves as a great online platform."
              link="https://www.linkedin.com/posts/adarsh-k-n_webdevelopment-webdesign-frontenddevelopment-activity-6831876717968191488-csNV"
              tech={ ["Django", "Python", "HTML5", "CSS3", "JavaScript", "AWS Services", "Heroku"] }
              btn_text="View Demo"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(money)}>
            <ProjectCard
              imgPath={money}              
              title="Money.io"
              description="Powered by Voice Recognition, this is a modern, easy-to-use and personalized web application to manage one's incomes and expenses efficiently through charts."
              link="https://money-io.netlify.app/"
              tech={ ["React", "JavaScript", "Voice", "GraphQL", "Netlify"] }
              btn_text="Visit Website"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(brain)}>
            <ProjectCard
              imgPath={brain}              
              title="Brain Vision"
              description="This app is a brain child of the popular 'Concentration Game' or 'Image-Matching Game'. Users can customize it by adding their own images and also sharing the game with their friends and family. Thus, this game helps in improving one's focus and memory along with having fun!"
              link="https://play.google.com/store/apps/details?id=com.adarsh.brainvision"
              tech={ ["Kotlin", "Firebase", "Android Studio", "Google AdMob", "Google Play Console"] }
              btn_text="Install App"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(apple)}>
            <ProjectCard
              imgPath={apple}              
              title="Apple Catch"
              description="A simple game to have fun in your free time. A basket is moved right or left trying to catch as many apples but avoiding catching the 'unripe' apples."
              link="https://adarsh-kn.github.io/apple-catch/"
              tech={ ["HTML5", "CSS3", "JavaScript"] }
              btn_text="Play Game"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(ttt)}>
            <ProjectCard
              imgPath={ttt}              
              title="AI based Tic-Tac-Toe"
              description="Developed using the pygame module of python, a user plays against the AI computer agent which is impossible to defeat. An intelligent user can at the most only 'draw' the game but can never win!!"
              link="https://github.com/adarsh-kn/tic-tac-toe"
              tech={ ["Python"] }
              btn_text="View Project"
            />
          </Col>

          <Col md={4} className="project-card" onClick={() => setSelectedImage(neural)}>
            <ProjectCard
              imgPath={neural}              
              title="Neural Network Visualizer"
              description="A python script which uses modules such as Matplotlib, Numpy to visualize a neural network based on the inputs."
              link="https://github.com/adarsh-kn/neural-network"
              tech={ ["Python", "Google Colab"] }
              btn_text="View Project"
            />
          </Col>               
        </Row>
      </Container>
      { selectedImage && <Modal selectedImg={selectedImage} setSelectedImg={setSelectedImage} /> }
    </Container>
  );
}

export default Projects;
