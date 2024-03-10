import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import certificatePdf1 from "../../Assets/CertificatonPDFs/Certification1.pdf";
import certificatePdf2 from "../../Assets/CertificatonPDFs/Certification2.pdf";
import certificatePdf3 from "../../Assets/CertificatonPDFs/Certification3.pdf";
import certificatePdf4 from "../../Assets/CertificatonPDFs/Certification4.pdf";
import certificatePdf5 from "../../Assets/CertificatonPDFs/Certification5.pdf";
import certificatePdf6 from "../../Assets/CertificatonPDFs/Certification6.pdf";
import certificatePdf7 from "../../Assets/CertificatonPDFs/Certification7.pdf";

import certificateImage1 from "../../Assets/CertificateImages/Certification1.jpg";
import certificateImage2 from "../../Assets/CertificateImages/Certification2.jpg";
import certificateImage3 from "../../Assets/CertificateImages/Certification3.jpg";
import certificateImage4 from "../../Assets/CertificateImages/Certification4.JPG";
import certificateImage5 from "../../Assets/CertificateImages/Certification5.jpg";
import certificateImage6 from "../../Assets/CertificateImages/Certification6.jpg";
import certificateImage7 from "../../Assets/CertificateImages/Certification7.jpg";

function Certificates() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Here are my <strong className="purple">Qualifications. </strong>
                </h1>
                <p style={{ color: "white" }}>
                    A collection of certificates achieved through learning and dedication.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf1}
                            imageUrl={certificateImage1}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf2}
                            imageUrl={certificateImage2}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf4}
                            imageUrl={certificateImage4}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf3}
                            imageUrl={certificateImage3}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf5}
                            imageUrl={certificateImage5}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf6}
                            imageUrl={certificateImage6}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <CertificateCards
                            pdfPath={certificatePdf7}
                            imageUrl={certificateImage7}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Certificates;
