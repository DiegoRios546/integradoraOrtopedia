import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FaHome, FaInfoCircle, FaHandshake, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import './Navbar.css';  // Importando el archivo CSS
import logo from "../Images/logo.png";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="custom-navbar">
      <NavbarBrand href="/" className="navbar-brand">
        <div className="brand-container">
          <img
            src={logo} // Reemplaza con tu logo
            alt="Logo del sitio"
            className="logo"
          />
          <span className="site-name">Dr. Diego alexis<br></br> rios Torres</span>
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} style={{ borderColor: '#ffffff' }} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#home" className="navbar-link">
              <FaHome /> Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" className="navbar-link">
              <FaInfoCircle /> Sobre Nosotros
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#service" className="navbar-link">
              <FaHandshake /> Servicios
            </NavLink>
          </NavItem>
          <NavItem>
            <button className="appointment-button">
              <FaCalendarAlt /> Agendar Cita
            </button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
