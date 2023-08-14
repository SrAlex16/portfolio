import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log("entro en sendEmail()")
    console.log("nombre: "+formDetails.firstName)

    if((formDetails.firstName.length === 0)||(formDetails.lastName.length === 0)||(formDetails.email.length === 0)||(formDetails.message.length === 0))
    {
      alert("Debes rellenar todos los campos obligatorios (*)")
    }else{
      
      setButtonText("Mensaje enviado")
      emailjs
      .sendForm(
        "service_3mqgzdb",
        "template_wu0gndj",
        form.current,
        "jWARIyZvyPIKmXBI-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          console.log(formDetails.firstName);
          //alert("mensaje enviado") //cambiar esto
          window.location.reload(); //refresco la página para borrar los campos del formulario
        },
        (error) => {
          console.log(error.text);
        }
      );
      setButtonText("Mensje Enviado")
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img class="img" src={contactImg} alt="contact img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contacto</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name="firstName" type="text" value={formDetails.firstName} placeholder="Nombre *" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="lastName" type="text" value={formDetails.lastName} placeholder="Apellido *" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="email" type="email" value={formDetails.email} placeholder="Email *" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="phone" type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Mensaje *" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}