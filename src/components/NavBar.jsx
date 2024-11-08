import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar expand="md" className="navBar">
            <Container className="d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div>
                    <NavLink to="/" className="logoNav">
                        <img
                            src="https://i.ibb.co/3cs3b6Z/LOGO-MEJORAVIT-VARIANTES-1.png"
                            alt="InfonaVit Logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                    </NavLink>
                </div>

                {/* Toggle + Links // menu desplegable */}
                <div className="align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className="customToggler">
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav" className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <Nav className="ms-auto opcionesNav">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/Precalificar">
                                Precalificar
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/InformacionDelCrédito">
                                Informacion del Crédito
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/InformaciónAdicional">
                                Información Adicional
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};
