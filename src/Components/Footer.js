import React from 'react';
import '../Estilos/Footer.css';
import interweb from "../Images/interweb.png"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Información del doctor */}
        <div className="footer-about">
          <h3 className="footer-title">Acerca del Doctor</h3>
          <p className="footer-text">
            El Dr. Juan Pérez, especialista en ortopedia y traumatología, cuenta con más de 15 años de experiencia
            en el tratamiento de problemas musculoesqueléticos. Comprometido con la salud y bienestar de sus
            pacientes, ofreciendo servicios personalizados y de alta calidad.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="footer-contact">
          <h3 className="footer-title">Contacto</h3>
          <ul className="contact-list">
            <li>
              <FaPhoneAlt className="iconos" /> +52 555 123 4567
            </li>
            <li>
              <FaEnvelope className="iconos" /> contacto@drjuanperez.com
            </li>
            <li>
              <FaMapMarkerAlt className="iconos" /> Av. Siempre Viva 123, Springfield
            </li>
          </ul>
        </div>

        {/* Logo de la empresa desarrolladora */}
        <div className="footer-logo">
          <h3 className="footer-title">Desarrollado por</h3>
          <ul className="contact-list">
            <li><img
            src={interweb}
            alt="Logo de la empresa"
            className="developer-logo"
          />
          <p className="footer-text">Interweb Creations.</p></li>
          </ul>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Dr. Juan Pérez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
