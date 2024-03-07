import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReferenceStyleModifier from "../../Assets/Projects/Reference-Style-Modifier.png";
import HappyNewYear2024 from "../../Assets/Projects/HappyNewYear2024.PNG";
import Password_Based_Authentication_System from "../../Assets/Projects/Password_Based_Authentication_System.PNG";
import SubtitleSynchronization from "../../Assets/Projects/SubtitleSynchronization.png";
import JAFWeb from "../../Assets/Projects/JAF-Web.png";
import LCD from "../../Assets/Projects/LCD.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Take a Look on My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SubtitleSynchronization}
              title="SubtitleSynchronization"
              description="This program reads subtitle text files and adjusts timestamps for Arabic, English, Turkish, and Persian languages. Users choose from four options: 1) Shift timestamps by milliseconds, 2) Shift by hours, seconds, and milliseconds, 3) Keep timestamps unchanged, or 4) Shift timestamps between specified start and end times. User input is managed by a switch statement, prompting for necessary details based on the chosen option."
              ghLink="https://github.com/Jameel-ezz/SubtitleSynchronization.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LCD}
              title="16x2 LCD (Liquid Crystal Display) with an 8051 microcontroller."
              description="This C program interfaces a 16x2 LCD with an 8051 microcontroller in 4-bit mode. It displays hexadecimal numbers. The LCD uses data lines D4-D7 and control lines RS, RW, and E. The code initializes the LCD and continuously decrements and displays the value of  num. When num reaches 0x00, the LCD is cleared, and the process repeats."
              ghLink="https://github.com/Jameel-ezz/Interfacing-16x2-LCD-with-8051-Microcontroller.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Password_Based_Authentication_System}
              title="Password Based Authentication System"
              description="This code demonstrates a basic password-based authentication system using an 8051 microcontroller, a 4x4 keypad, and a 16x2 LCD. Users input a password via the keypad, and if it matches a predefined one, a personalized welcome message is displayed on the LCD. The system prompts for password input, compares it to predefined passwords, and displays a welcome message or 'Wrong! Try again.' The LCD is cleared after a few seconds for the next input."
              ghLink="https://github.com/Jameel-ezz/Password-Based_Authentication_System.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReferenceStyleModifier}
              title="Reference Style Modifier"
              description="This C program helps change writing references from one style to another. For example, if you have a list of sources written in MLA style, it can convert them into other styles like APA or Chicago. It reads the MLA references from a file, understands their parts, and then rewrites them in the new style. It does this automatically, making it easier for people who need to use different citation styles for their work."
              ghLink="https://github.com/Jameel-ezz/Reference-Style-Modifier.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JAFWeb}
              title="JAF web"
              description="responsive game website! Dive into a world of endless fun with our diverse selection of games suitable for all ages and interests. Whether you're into puzzles, action, or strategy, we've got you covered. Our user-friendly interface ensures seamless gameplay across all devices, so you can enjoy the excitement anytime, anywhere. Join our vibrant gaming community and start exploring the endless adventures waiting for you!"
              ghLink="https://github.com/Jameel-ezz/JAF-Game-Store.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HappyNewYear2024}
              title="Happy New Year 2024"
              description="This code makes a fun webpage for celebrating New Year. It uses HTML and CSS to create a lively design with animations. The HTML sets up the webpage structure and links to stylesheets and icons. It includes elements for the New Year message, the year '2023' that changes, and animated fireworks. .
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Jameel-ezz/HappyNewYear-2024.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
