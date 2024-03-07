import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import wave from "../../Assets/TricksImg/wave.PNG";
import Marquee from "../../Assets/TricksImg/Marquee.PNG";
import Watch from "../../Assets/TricksImg/Watch.PNG";
import _3DNavBar from "../../Assets/TricksImg/3DNavBar.PNG";
import Cards from "../../Assets/TricksImg/Cards.PNG";
import Sky from "../../Assets/TricksImg/Sky.PNG";
function Tricks() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Take a Look on Some <strong className="purple">HTML and CSS </strong> Tricks
                </h1>
                <p style={{ color: "white" }}>
                A way for coding with enjoyment.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={wave}
                            title="Wave Animation"
                            description="This code makes a cool picture of the word 'wave' on a beach. The letters move like they're being blown by the wind, and there's also a wavy effect on the beach. It looks like the letters are dancing on the sand while the waves roll in."
                            demoLink="https://codepen.io/Jameel-ezz/pen/MWxxwwr"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Marquee}
                            title="Marquee"
                            description="This code uses different tricks to make things move on a webpage. The <marquee> tag moves text sideways. CSS animations make elements with classes like rightTI and rightCSS scroll or slide across the screen. The JavaScript part makes text with the rightJS class move sideways smoothly. jQuery helps elements with class rightJQ slide sideways when you hover over them. It shows different ways to make things move on a webpage."
                            demoLink="https://codepen.io/Jameel-ezz/pen/bGZZdNw"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Watch}
                            title="Watch"
                            description="This code creates a pretend watch you might see on a computer screen. It has parts like the case, strap, and indicators for showing the time. The watch's appearance changes to make it look like day or night, with a sun or moon animation. It's all made with code called CSS, which tells the computer how to display things on the screen and make them move. The design tries to make the watch look real with shadows and reflections"
                            demoLink="https://codepen.io/Jameel-ezz/pen/BabbNBj"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={_3DNavBar}
                            title="3D navBar"
                            description="This webpage features a modern 3D navbar animation with a stylish design. It offers easy navigation through a minimalist menu accessed via a hamburger icon. The sleek layout, captivating background, and smooth animations create an engaging user experience, combining aesthetics with functionality seamlessly."
                            demoLink="https://codepen.io/Jameel-ezz/pen/QWoowPG"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Cards}
                            title="Cards Trick"
                            description="The provided code is for a webpage featuring a theme switcher and a card list. The theme switcher allows users to toggle between light and dark themes, and the card list displays multiple cards with titles and author information. Each card includes an image of the author, their name, and a decorative element. The theme switcher functionality is implemented using JavaScript, and the current date is dynamically displayed on each card."
                            demoLink="https://codepen.io/Jameel-ezz/pen/vYPbqor"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Sky}
                            title="Sky Animation"
                            description="This code makes something cool happen on a webpage. It creates a bunch of little circles that move around in a circle together. These circles change colors and look like they're spinning. When you click a link called 'Black & white', the background of the webpage turns black and white. It's all done using HTML, CSS, and Sass, which helps make styling easier."
                            demoLink="https://codepen.io/Jameel-ezz/pen/abMMooa"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Tricks;
