import React, { useState } from "react";
import { FaBone, FaHeartbeat, FaRunning, FaWheelchair, FaHandsHelping, FaSyringe, FaUserInjured, FaWalking, FaJoint, FaChild } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../Estilos/Servicios.css";

const servicesData = [
  {
    id: 1,
    icon: <FaBone />,
    title: "Tratamiento de Fracturas",
    description: "Diagnóstico y tratamiento de fracturas óseas.",
    details: "Incluye inmovilización, reducción de huesos y cirugía en casos complejos para garantizar la recuperación.",
  },
  {
    id: 2,
    icon: <FaHeartbeat />,
    title: "Dolor Crónico",
    description: "Manejo del dolor en articulaciones y músculos.",
    details: "Tratamientos personalizados como fisioterapia, medicación, y procedimientos quirúrgicos para aliviar el dolor.",
  },
  {
    id: 3,
    icon: <FaRunning />,
    title: "Lesiones Deportivas",
    description: "Atención especializada para lesiones en deportistas.",
    details: "Incluye terapias avanzadas, rehabilitación post-lesión y prevención de futuras lesiones.",
  },
  {
    id: 4,
    icon: <FaWheelchair />,
    title: "Rehabilitación Física",
    description: "Programas personalizados para recuperación.",
    details: "Ejercicios supervisados y seguimiento continuo para mejorar la movilidad y fuerza.",
  },
  {
    id: 5,
    icon: <FaHandsHelping />,
    title: "Problemas de Columna",
    description: "Diagnóstico y tratamiento de hernias y escoliosis.",
    details: "Terapias manuales, ejercicios y opciones quirúrgicas según la gravedad.",
  },
  {
    id: 6,
    icon: <FaSyringe />,
    title: "Infiltraciones Terapéuticas",
    description: "Alivio inmediato del dolor articular y muscular.",
    details: "Uso de medicamentos aplicados directamente en el área afectada para reducir la inflamación.",
  },
  {
    id: 7,
    icon: <FaUserInjured />,
    title: "Traumatismos Agudos",
    description: "Atención para lesiones graves y accidentes.",
    details: "Incluye evaluación inicial, tratamiento quirúrgico y rehabilitación.",
  },
  {
    id: 8,
    icon: <FaWalking />,
    title: "Problemas de Movilidad",
    description: "Mejoras en la marcha y equilibrio.",
    details: "Terapias para tratar debilidades musculares y mejorar el rango de movimiento.",
  },
  {
    id: 9,
    icon: <FaJoint />,
    title: "Artritis y Artrosis",
    description: "Tratamiento del desgaste articular.",
    details: "Incluye terapias de regeneración y reemplazo articular cuando sea necesario.",
  },
  {
    id: 10,
    icon: <FaChild />,
    title: "Ortopedia Infantil",
    description: "Tratamiento especializado para niños.",
    details: "Corrección de deformidades congénitas y tratamiento de lesiones en crecimiento.",
  },
];

const Servicios = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleDetails = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="simple-services-section">
      <h2 className="section-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="flex">
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="toggle-btn" onClick={() => toggleDetails(service.id)}>
              {activeService === service.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              <div className="divider"></div>
              
            </div>
            </div>
            
            {activeService === service.id && (
              <div className="service-details">
                <p>{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
