import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFilePdf } from "react-icons/bs";

function CertificateCards(props) {
    const { pdfPath, imageUrl, title, description } = props;

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={imageUrl} alt="Certificate" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
                {pdfPath && (
                    <Button variant="primary" href={pdfPath} target="_blank">
                        <BsFilePdf /> &nbsp;
                        {"View PDF"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default CertificateCards;
