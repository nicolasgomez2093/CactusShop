import React from 'react';
import { Carousel } from "react-bootstrap";
import '../App.css';

export default function CarouselReact() {
  return (
      <div className="fondo">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-slide"
          src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FjdHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="texto-slide">Los mejores cactus</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-slide"
          src="https://images.unsplash.com/photo-1565701175719-5ef844931183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80"
          alt="Second slide"
        />
        <Carousel.Caption >
          <h2 className="texto-slide">Los encontras aqui!</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}
