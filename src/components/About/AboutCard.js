import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jameel Abdulmalek </span>
            from <span className="purple"> Palestine, Jaffa.</span>
            <br />
            I am currently a new graduate student in computer engineering, passionate to learn and be part of the tech world!
            <br />
            I successfully completed my academic journey with honor degree at Antalya Bilim University in Antalya, Turkey.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and Writing Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
