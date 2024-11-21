import React from 'react';
import './Contacto.css';
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section className="contact-us-section">
      <div className="contact-us-container">
        {/* Horarios y Teléfonos */}
        <div className="contact-us-card">
          <h3 className="card-title">Horarios y Contacto</h3>
          <ul className="contact-list">
            <li>
              <FaClock className="icon" />
              Lunes a Viernes: 8:00 AM - 6:00 PM
            </li>
            <li>
              <FaClock className="icon" />
              Sábados: 9:00 AM - 2:00 PM
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              Teléfono: +52 555 123 4567
            </li>
          </ul>
        </div>

        {/* Ubicación */}
        <div className="contact-us-card">
          <h3 className="card-title">Ubicación</h3>
          <div className="map-container">
            {/* Google Maps Embed */}
            <iframe
              title="Mapa de Ubicación"
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799198966!2d-74.25987568720392!3d40.697149410356454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a5dcb5%3A0xa7c03e7e2653e204!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1635944201867!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <p className="map-text">
            Dirección: Av. Siempre Viva 123, Springfield
          </p>
        </div>

        {/* Formas de Pago */}
        <div className="contact-us-card">
          <h3 className="card-title">Formas de Pago</h3>
          <ul className="payment-list">
            <li>
              <FaCcVisa className="icon" /> Visa
            </li>
            <li>
              <FaCcMastercard className="icon" /> Mastercard
            </li>
            <li>
              <FaCcPaypal className="icon" /> PayPal
            </li>
            <li>
              <FaPhoneAlt className="icon" /> Transferencias bancarias
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
