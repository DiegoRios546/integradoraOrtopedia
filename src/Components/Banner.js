import React from 'react';
import './Banner.css';
import imgbanner from "../Images/banner.png";  
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={imgbanner} alt="Ortopedia" /> {/* Imagen de ejemplo */}
      </div>
      <div className="banner-content">
        <h1 className="main-heading">Bienvenido a Tu Salud Ortopédica</h1>
        <p className="durango">En Durango, Dgo.</p>
        <p className="sub-heading">Recibe atención especializada para mejorar tu bienestar. Nos especializamos en: Traumatología pediátrica y adulta</p>
        <p className="call-to-action">¡Agenda tu consulta hoy mismo!</p>
        <button className="cta-button">Agendar Cita</button>
      </div>
      {/* Botones flotantes */}
      <div className="floating-buttons">
        <a href="tel:+1234567890" className="floating-button phone">
          <FaPhone />
          <span className="hover-text">Llamar: +123 456 7890</span> {/* Tooltip de teléfono */}
        </a>
        <a href="#contacto" className="floating-button email">
          <FaEnvelope />
          <span className="hover-text">Contactanos</span> {/* Tooltip de contacto */}
        </a>
      </div>
    </div>
  );
};

export default Banner;
