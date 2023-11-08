import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import fraud from "../../Assets/Projects/fraud.png";
import attendance from "../../Assets/Projects/attendance.png";
import jobma from "../../Assets/Projects/jobma.png";
import curlies from "../../Assets/Projects/Curlies.jpeg";
import satoru from "../../Assets/Projects/Satoru.png";
import taskm from "../../Assets/Projects/7.png";
import xogame from "../../Assets/Projects/xogame.png";
import atlas from "../../Assets/Projects/atlas.jpg";
import anika from "../../Assets/Projects/anika.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={anika}
                    isBlog={false}
                    title="Streaming App using Spring And Angular"
                    description="Worked on creating a streaming app for streaming movies, animes and series with a mini Blog for movie reviews, Using SPRING  and Angular with MOngoDB, we applied webscraping and this party APIs to get external Data and play the movies on our app with multiple quality settings."
                    link="https://github.com/Abdelghafour2001/SpringApi/blob/master/stream.pdf"
                />
            </Col>
            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={emotion}
                    isBlog={false}
                    title="Face Recognition and Emotion Detection"
                    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                    link="https://github.com/Abdelghafour2001/Face-and-emotion-detection"
                />
            </Col>
            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={fraud}
                    isBlog={false}
                    title="Fraud detection with ML and Graph"
                    description="Designing and developing a machine learning model, based on some data for transactions, in order to automate fraud detection, with the use of Neo4j graph database."
                    link="https://github.com/Abdelghafour2001/fraud-detection-ML"
                />
            </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atlas}
              isBlog={false}
              title="PC Store managament system"
              description="Designing and developing a desktop app to manage all the services inside a PC repairs and sales store, with an employee and storage managament system added to it"
              link="https://github.com/Abdelghafour2001/PCstore"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cars Sales"
              description="A template of a wbsite for selling and buying both used and new cars using HTML, CSS and Js only with possibility to view cars informations and react to posts. Visit website for a better view."
              link="https://abdelghafour2001.github.io/CarsSales/"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={satoru}
              isBlog={false}
              title="Satoru Goju Themed Portfolio"
              description="A portfolio built using React.js inspired from the anime Jujutsu Kaisen. Th e portfolio contains 5 simple components in a single page."
              link="https://satorugojo.netlify.app/"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={xogame}
              isBlog={false}
              title="Simple TIC TAC TOE/ XO game with socket.io"
              description="A simple Tic Tac Toe Game using react.js and socket.io where palyers can join a room and compete agaisnst each others."
              link="https://github.com/Abdelghafour2001/TICTACTOE-XO-Game-with-react.js-and-socket.io"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskm}
              isBlog={false}
              title="MERN TaskManager"
              description="A Mern stack application to manage and schedule tasks for Employees and teams with Notification System."
              link="https://github.com/Abdelghafour2001/MERN-Company-TasksManager"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Desktop app for school management"
              description="A fully working desktop application designed and developed with python using different machine learning libraries that is used to detect students attendance in a classroom based on facial recognition."
              link="https://github.com/Abdelghafour2001/tgtf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gestion de Stock"
              description="A web application built with J2EE using Spring Boot Framework, in order to manage storage of different products and keep track of the transactions going on."
              link="https://github.com/Abdelghafour2001/GestionStock"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Car Rental"
              description="Full .net App with database for renting out cars in Morocco using online application forms and the ability to manage the cars and applications."
              link="https://github.com/Abdelghafour2001/Car-Rental"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobma}
              isBlog={false}
              title="Job.ma"
              description="Worked with a team on a school project to build a website for job seekers and recruiters in the IT domain with many features and functionnalities like the ability to create a resume using the built in feature or to apply directly to the jobs from the app."
              link="https://github.com/Abdelghafour2001/JobMa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curlies}
              isBlog={false}
              title="Curlies Hall"
              description="Simple blog for a Hair dressing community to share posts and discuss some topics, built with PHP Laravel and mysql database following the MVC architecture and bootstrap for the front end."
              link="https://github.com/Abdelghafour2001/Curlies"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
