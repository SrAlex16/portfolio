import React, { useContext } from 'react'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/icono_bgl.png";
import projImg2 from "../assets/img/icono_afternight.jpg";
import projImg3 from "../assets/img/icono_subbetica.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import engTexts from './engTexts.json';
import espTexts from './espTexts.json';
import { LanguageContext } from './LanguageContext';

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  const texts = language === 'en' ? engTexts : espTexts;

  const projects = [
    {
      title: "My Gameboard Library",
      description: texts.proyects.proyect1,
      imgUrl: projImg1,
      link: 'https://github.com/Lander990/my-gameboard-library',
    },
    {
      title: "Afternight",
      description: texts.proyects.proyect2,
      imgUrl: projImg2,
      link: 'https://github.com/SrAlex16/Afternight',
    },
    {
      title: "Subbética Destino de Calidad Turística",
      description: texts.proyects.proyect3,
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
                <h2>{texts.proyects.proyects}</h2>
                <p>{texts.proyects.proyectsDesc}</p>
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