import React from 'react';
import  { useState } from 'react';
import { FaBone, FaRunning, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import { GiSpineArrow } from 'react-icons/gi';
import imgdr from "../Images/dr.png";
import '../Estilos/Nosotros.css';

const Nosotros = () => {
  const [formData, setFormData] = useState({
    name: '',
    testimony: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo Testimonio:', formData);
    alert('Gracias por compartir tu testimonio');
    setFormData({
      name: '',
      testimony: '',
    });
  };


  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Conoce al Dr. John Doe</h2>
          <p>Más de 20 años de experiencia ayudando a pacientes a mejorar su calidad de vida.</p>
        </div>
        <div className="about-content">
          <div className="about-left">
            <h3 className="about-subtitle">Filosofía del Dr. Doe</h3>
            <p className="about-description">
              “Cada paciente es único, y mi objetivo es ofrecer un tratamiento personalizado que restaure su bienestar físico y emocional.”
            </p>
            <h3 className="about-subtitle">Áreas de Especialización</h3>
            <ul className="specialties">
              <li>
              <GiSpineArrow className="iconos" /> Cirugía de columna vertebral
              </li>
              <li>
              <FaBone className="iconos" /> Reemplazo de articulaciones
              </li>
              <li>
              <FaRunning className="iconos" /> Lesiones deportivas
              </li>
            </ul>
          </div>
          <div className="about-right">
            <img
              src={imgdr}
              alt="Dr. John Doe"
              className="doctor-image"
            />
          </div>
        </div>
        <div className="certificates-section">
          <h3>Certificaciones y Logros</h3>
          <ul className="certifications">
            <li>
            <FaAward className="iconos" />
              Certificación de la Junta Americana de Ortopedia
            </li>
            <li>
            <FaMedal className="iconos" />
              Miembro Honorario de la Sociedad Internacional de Ortopedia
            </li>
            <li>
            <FaCertificate className="iconos" />
              Doctorado en Medicina, Harvard University
            </li>
          </ul>
        </div>


        <div className="testimonials-section">
          <h3>Testimonios Destacados</h3>
          <blockquote className="testimonial">
            “El Dr. Doe me devolvió la movilidad que pensé que había perdido para siempre. ¡Es el mejor!” 
            <span>– Jane Smith</span>
          </blockquote>
          <blockquote className="testimonial">
            “Gracias al Dr. Doe, pude volver a practicar mi deporte favorito en tiempo récord.” 
            <span>– Mark Johnson</span>
          </blockquote>


          <div className="form-container">
        <h2 className="form-title">Comparte tu experiencia</h2>
        <p className="form-subtitle">
          Ayuda a otros pacientes compartiendo tu experiencia con el doctor.
        </p>
        <form className="testimonials-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="testimony">Tu Testimonio</label>
            <textarea
              id="testimony"
              name="testimony"
              value={formData.testimony}
              onChange={handleChange}
              required
              placeholder="Escribe tu experiencia"
            ></textarea>
          </div>
          <button type="submit" className="form-submit-button">
            Enviar
          </button>
        </form>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
