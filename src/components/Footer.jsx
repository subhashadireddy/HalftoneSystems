import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container">
                <div className="footer-top section-padding">
                    <div className="footer-col">
                        <h3 className="footer-logo">HALFTONE</h3>
                        <p className="footer-desc">
                            Empowering business transformation through technology and talent.
                        </p>
                        <div className="social-icons">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Digital Strategy</a></li>
                            <li><a href="#">Cloud & DevOps</a></li>
                            <li><a href="#">Data & Analytics</a></li>
                            <li><a href="#">Cybersecurity</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Contact Support</a></li>
                            <li><a href="#">Sales Inquiry</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Halftone Systems. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
