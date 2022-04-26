import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./componentes/cards.css";
import NavbarR from "./componentes/NavbarR";
import CarouselReact from "./componentes/CarouselReact";
import Redes from "./componentes/Redes";
import Footer from "./componentes/Footer";
import Cards from "./componentes/Cards";
import { useState } from "react";
import Contacto from "./componentes/Contacto";
import Login from "./componentes/Login";

const articulos = [
  {
    image:
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=357&q=80",
    titulo: "Cactus en flor",
    descripcion: "Mammilaria en maceta N°9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509222796416-4a1fef025e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=596&q=80",
    titulo: "Cactus Premium",
    descripcion: "Astrophitus con flor en maceta N°8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511772240966-518b385ef434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    titulo: "Suculenta euphorbia",
    descripcion: "Maceta N°8 de barro, ideal para souvenirs",
  },
];

function App() {
  const [articles, setArticles] = useState(articulos);
  const [section, setSection] = useState("inicio");

  return (
    <>
      <NavbarR setSection={setSection} />
      {section === "inicio" && (
        <div>
          <CarouselReact />
          <div id="productos" className="container-card m-auto py-5">
            {articles.map((articulo) => (
              <Cards articulo={articulo} />
            ))}
          </div>
          <Redes id="redes"/>
          <Contacto id="contacto" />
        </div>
      )}
      {section === 'login' &&(
        <Login />
      )}
      

      <Footer />
    </>
  );
}

export default App;
