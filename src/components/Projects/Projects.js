import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Employee Management System(PHP)"
              description="Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential."
              ghLink="https://github.com/dhwanil2805/Employee-Management-System-PHP"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SCETGRAM(Reactjs)"
              description="This SCETGRAM Project based on instagram tools and function.in This Project we are used react."
              ghLink="https://github.com/dhwanil2805/SCETGRAM-React-Js"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CareerHub(PHP)"
              description="The Career Hub aims to empower the Tanzanian youth by providing a youth information and skills development centre."
              ghLink="https://github.com/dhwanil2805/CareerHub"
                           
            />
          </Col>
          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
