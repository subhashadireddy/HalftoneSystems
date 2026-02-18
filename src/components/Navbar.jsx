import React, { useState, useEffect } from 'react';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'What We Do', dropdown: ['Services', 'Solutions', 'Tech Stack'] },
        { name: 'Industries', dropdown: ['Finance', 'Healthcare', 'Retail', 'Tech'] },
        { name: 'Insights', dropdown: ['Case Studies', 'Blog', 'Whitepapers'] },
        { name: 'Careers', dropdown: ['Open Roles', 'Culture', 'Benefits'] },
        { name: 'Who We Are', dropdown: ['About Us', 'Leadership', 'Partners'] },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src="/src/assets/HS.png" alt="Halftone Systems" style={{ height: '40px', width: 'auto' }} />
                    </a>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <div key={link.name} className="nav-item">
                            <span className="nav-link">
                                {link.name} <ChevronDown size={14} className="dropdown-icon" />
                            </span>
                            <div className="dropdown-menu">
                                {link.dropdown.map((item) => (
                                    <a key={item} href="#" className="dropdown-item">{item}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Search"><Search size={20} /></button>
                    <button className="icon-btn" aria-label="Language"><Globe size={20} /></button>
                    <button className="btn btn-primary contact-btn">Contact Us</button>
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
