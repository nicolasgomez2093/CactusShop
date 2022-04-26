 import React from 'react'
 import Container from "react-bootstrap/Container";
 import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";
 import '../App.css'

 export default function Footer() {
     return(
        <Container className="pt-3 fondo-footer text-footer">
        <Row>
          <Col xs={12} md={3} className="text-start ml-5"><p>Jose hernandez 959</p><p>Tucuman - Argentina</p></Col>
          <Col xs={12} md={6} className="m-3 footer-center"> Todos los derechos reservados para CACTUS SHOP S.A.</Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>
     )
 }