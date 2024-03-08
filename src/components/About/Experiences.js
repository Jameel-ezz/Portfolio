import React from "react";
import Card from "react-bootstrap/Card";
import { GiAchievement } from "react-icons/gi";
/*import myImg from "../../Assets/avatar.svg";
import Uni from "../../Assets/Uni.png";
import Tilt from "react-parallax-tilt";
import { Col , Row} from "react-bootstrap"
*/

function formatText(text) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    for (let i = 0; i < words.length; i++) {
        if ((currentLine + " " + words[i]).trim().split(" ").length > 9) {
            lines.push(currentLine.trim());
            currentLine = "";
        }
        currentLine += " " + words[i];
    }
    if (currentLine !== "") {
        lines.push(currentLine.trim());
    }
    return lines;
}

function renderFormattedText(text) {
    return formatText(text).map((line, index) => <>{line}<br key={index} /></>);
}

function Experiences() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Aspire to create meaningful contributions that make a positive impact!"{" "}
                    </p>
                    <div style={{ textAlign: "justify" }}>
                        <span className="purple" style={{ fontSize: "30px" }}>Experiences:</span>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                        <br />
                        <strong> ⦿ Ethical Hacker / Self Employed</strong> | Jeddah, Saudi Arabia.
                        <br />
                        February 2017 - September 2019
                        <br />
                        <br />
                        {renderFormattedText("-Demonstrated proficiency in ethical hacking techniques with a focus on video games.")}
                        <br />
                        {renderFormattedText("-Executed successful attacks on websites, ensuring robust security measures.")}
                        <br />
                        {renderFormattedText("-Applied advanced skills to break encryptions, enhancing overall cybersecurity.")}
                        {/*<div style={{ position: "absolute", right: 0}}>
                    <Row>
                <Col md={{ span: 7, offset: 6 }} className="myAvatar">
                    <Tilt>
                        <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
    </div>*/}
                        <br />
                        <br />
                        <strong> ⦿ Retail Manager / Self Employed</strong> | Jeddah, Saudi Arabia.
                        <br />
                        January 2019 - August 2021.
                        <br />
                        <br />
                        {renderFormattedText("-Founded and operated my own online store, overseeing all aspects of the business.")}
                        <br />
                        {renderFormattedText("-Developed and executed comprehensive advertising strategies to enhance brand visibility and attract a wider audience.")}
                        <br />
                        {renderFormattedText("-Facilitated import and export operations, ensuring seamless logistics and timely deliveries.")}
                        <br />
                        <br />
                        <strong> ⦿ Volunteer Professor Assistant / Antalya Bilim University</strong> | Antalya, Turkey.
                        <br />
                        September 2021-June 2022
                        <br />
                        <br />
                        {renderFormattedText("-Volunteered as a Professor Assistant for an Assembly Language course at Antalya Bilim University.")}
                        <br />
                        <br />
                        <strong> ⦿ Web Developer / Celadonsoft</strong> | New York, United States.
                        <br />
                        <br />
                        June 2022 -July 2022.
                        <br />
                        {renderFormattedText("-Worked in CeladonSoft as web Developer.")}
                        <br />
                        {renderFormattedText("-Contributed to projects using React.js, JavaScript, TypeScript, HTML, CSS, node.js, and Google Firebase.")}
                        <br />
                        <br />
                        <strong> ⦿ RPA Developer / Arya.ai</strong> | Turkey, Antalya.
                        <br />
                        February 2023-June 2023.
                        <br />
                        <br />
                        {renderFormattedText("-Worked on Robotic Process Automation projects, enhancing operational efficiency.")}
                        <br />
                        {renderFormattedText("-Successfully implemented automation solutions, contributing to project success.")}
                        <br />
                        <br />
                        <strong> ⦿ Artificial Intelligence Developer / Arya.ai</strong> | Turkey, Antalya.
                        <br />
                        June 2023 -January 2024.
                        <br />
                        <br />
                        {renderFormattedText("-Engaged in AI development and research, contributing to cutting-edge solutions.")}
                        <br />
                        {renderFormattedText("-Developed an algorithm to optimize route planning for a cargo company.")}
                        <br />
                        {renderFormattedText("-Utilized Yandex Maps to implement the algorithm for identifying the shortest and most cost-effective paths.")}
                        <br />
                        <br />
                        <strong> ⦿ Partner / Saneh Consultancy Services</strong> | Antalya, Turkey.
                        <br />
                        May 2023-August 2023.
                        <br />
                        <br />
                        {renderFormattedText("-Contributed to Saneh Consultancy Services, an independent and international education and sports consultancy assessment agency based in Turkey.")}
                        <br />
                        {renderFormattedText("-Specialized in guiding individuals through the application process, including institution selection, trials, visa procedures, transportation, and accommodation.")}
                        <br />
                    </p>
                    {}
                    
                    <div className="purple" style={{ textAlign: "justify", fontSize: "20px", marginTop: "20px" }}>
                        <strong>Bachelor of Science in Computer Engineering</strong>
                        <br />
                        <br />
                    </div>
                    <p style={{ textAlign: "justify" }}>
                        <strong>Institution:</strong> Antalya Bilim University
                        <br />
                        <strong>Year of Graduation:</strong> 2024
                        <br />
                    </p>
                    {/* 
<div style={{ position: "absolute", right: 0}}>
    <Row>
        <Col md={{ span: 6, offset: 6 }} className="myAvatar">
            <Tilt>
                <img src={Uni} className="img-fluid" alt="avatar" />
            </Tilt>
        </Col>
    </Row>
</div>
*/}
                    <div className="purple" style={{  textAlign: "justify", fontSize: "20px", marginTop: "10px" }}>
                        <strong>Academic Achievements:</strong>
                        <br />
                        <br />
                    </div>

                    <ul>
                        <li className="about-activity">
                            <GiAchievement /> GPA: 
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Introduction to Programming I (Python)
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Introduction to Programming II (JAVA)
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Data Structure and Algorithms
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Discrete Computational Structures
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Digital System
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Computer Organization and Architecture
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Operating System
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Object-Oriented Programming
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Algorithms
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Project Management and Ethics in Computer Engineering
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Database Systems
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> System Programming (C / C++)
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Formal Languages and Automata Theory
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Software Engineering
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Embedded System Design (Assembly / C)
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Web Programming (HTML, CSS, JS, TS, JQuery, Bootstrap)
                        </li>
                        <li className="about-activity">
                            <GiAchievement /> Principles of Programming Languages (Haskell, Prolog, OCaml)
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Experiences;