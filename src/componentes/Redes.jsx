import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Redes() {
  return (
    <div className="text-center fondo p-5">
      <h2 className="text-center mb-5 text-uppercase">
        <b>Encontranos en:</b>
      </h2>
      <Container>
        <Row className="m-auto">
          <Col className="col-12 col-md-4">
            <div>
              <IoLogoFacebook className="style-icon" />
            </div>
          </Col>
          <Col className="col-12 col-md-4">
            <div>
              <IoLogoInstagram className="style-icon" />
            </div>
          </Col>
          <Col className="col-12 col-md-4">
            <div>
              <IoLogoWhatsapp className="style-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
