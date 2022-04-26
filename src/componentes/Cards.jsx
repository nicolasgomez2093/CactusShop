import React from "react";
 import Row from "react-bootstrap/Row";
 import Col from "react-bootstrap/Col";
import "./cards.css";
import { Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <>
      <div class="card mx-3">
        <div class="card-header " id="header"><img src={props.articulo.image} alt="" /></div>
        <div class="card-content">
            <div className="cuerpo">
            <h3 class="card-title " id="title">
            {props.articulo.titulo}
            </h3>
            <p class="card-excerpt " id="excerpt">
                <span class="">{props.articulo.descripcion}</span>
            </p>
            </div>
            <Row>
            <Col xs={7} >
            <div class="author">
                <div class="profile-img" id="profile_img"><img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" /></div>
                <div class="author-info">
                    <strong class="" id="name">
                    John Doe
                    </strong>
                    <small class="" id="date">Oct 08, 2020</small>
                </div>
            </div>
            </Col>
            <Col xs={5}>
                <Button className="btn btn-primary">Comprar</Button>
            </Col>
            </Row>
        </div>
    </div>
    </>
  );
}
