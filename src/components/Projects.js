import React from 'react'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/icono_bgl.png";
import projImg2 from "../assets/img/icono_afternight.jpg";
import projImg3 from "../assets/img/icono_subbetica.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "My Gameboard Library",
      description: "App de gestión de eventos de juegos de mesa.",
      imgUrl: projImg1,
      link: 'https://github.com/Lander990/my-gameboard-library',
    },
    {
      title: "Afternight",
      description: "Videojuego de plataformas para móviles android.",
      imgUrl: projImg2,
      link: 'https://github.com/SrAlex16/Afternight',
    },
    {
      title: "Subbética Destino de Calidad Turística",
      description: "Página web de la gestión de la calidad turística en la comarca de la Subbética Cordobesa",
      imgUrl: projImg3,
      link: 'https://subbeticadestinodecalidad.es',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Proyectos realizados por mi, enlace directo al repositorio de GitHub.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}