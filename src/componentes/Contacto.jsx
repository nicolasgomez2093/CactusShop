import React from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import './cards.css'

export default function Contacto() {
  return (
    <>
      <div className="container-contacto my-5">
          <h1 className="text-center">Contacto</h1>
      <Form.Label htmlFor="basic-url">Nombre</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Form.Label htmlFor="basic-url">Correo electronico</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder=""
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="basic-url">Mensaje</Form.Label>
        <InputGroup>
          <FormControl as="textarea" aria-label="Escribe tu comentario" placeholder="Deja tu mensaje..." />
        </InputGroup>
        <div className="btn-">
            <Button className="btn btn-primary mt-3">Enviar</Button>
        </div>
      </div>
    </>
  );
}
