import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="text-center bg-dark text-white py-4">
            <div className="container">
                {/* Logo */}
                <div className="mb-3">
                    <a href="#" className="text-white h4 text-decoration-none">
                        MejoraVit
                    </a>
                </div>

                {/* Redes Sociales */}
                <div className="redes mb-3">
                    <a href="https://www.facebook.com/FlipInmobiliaria" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href=" https://www.tiktok.com/@flipinmobiliaria" target="_blank" rel="noopener noreferrer" className="me-3">
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/flip_inmobiliaria_mty" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>

                {/* Copyright */}
                <p>Todos los derechos son reservados por copyright ©</p>
            </div>
        </footer>
    );
};
