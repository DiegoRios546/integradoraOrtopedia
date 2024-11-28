import React, { useState } from 'react';
import {  FaCalendarAlt } from 'react-icons/fa';

const Modal = () => {
    const [showModal, setShowModal] = useState(false); // Controla si la modal está visible
    const [formData, setFormData] = useState({
        patient_name: '',
        patient_problem: '',
        patient_email: '',
        appointment_date: '',
        appointment_time: '',
        doctor_name: 'Dr. Ortopédico',
    });

    // Función para manejar cambios en los inputs del formulario
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Función para enviar los datos del formulario a la API
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Cita agendada con éxito');
                setShowModal(false); // Cierra la modal después de guardar la cita
            } else {
                alert('Error al agendar la cita');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {/* Botón para abrir la modal */}
            <button className="appointment-button" onClick={() => setShowModal(true)}>
            <FaCalendarAlt /> Agendar Cita
            </button>
            

            {/* Modal que se muestra solo si showModal es true */}
            {showModal && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Agendar Cita</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)} // Cierra la modal
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre del paciente</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="patient_name"
                                            value={formData.patient_name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Problematica:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="patient_problem"
                                            value={formData.patient_problem}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="patient_email"
                                            value={formData.patient_email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Fecha</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="appointment_date"
                                            value={formData.appointment_date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Hora</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            name="appointment_time"
                                            value={formData.appointment_time}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success">
                                        Agendar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
