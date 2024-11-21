import React, { useState } from 'react';
import './Testimonios.css';

const Testimonios = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      email: '',
      testimony: '',
    });
  };

  return (
    <section className="testimonials-form-section">
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
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingresa tu correo"
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
    </section>
  );
};

export default Testimonios;
