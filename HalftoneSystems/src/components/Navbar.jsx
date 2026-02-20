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
        {
            name: 'What We Do',
            href: '#intro',
            dropdown: [
                { name: 'Enterprise Applications', href: '#enterprise-business-applications' },
                { name: 'AI & Machine Learning', href: '#ai-machine-learning' },
                { name: 'Blockchain Solutions', href: '#blockchain-solutions' },
                { name: 'Cloud Technologies', href: '#cloud-technologies' },
                { name: 'Cybersecurity', href: '#cybersecurity-solutions' },
                { name: 'Mobile Development', href: '#mobile-app-development' },
                { name: 'Data Science', href: '#data-science-analytics' },
                { name: 'Automation', href: '#automation-intelligent-rpa' },
                { name: 'Web Development', href: '#web-development' },
                { name: 'Digital Marketing', href: '#digital-marketing-growth' }
            ]
        },
        {
            name: 'Specialized Services',
            href: '#specialized-services',
            dropdown: [
                { name: 'IT Consulting', href: '#it-consulting-strategy' },
                { name: 'Staffing & Talent', href: '#staffing-talent-solutions' },
                { name: 'Product Development', href: '#product-development' }
            ]
        },
        {
            name: 'Industries',
            href: '#industries',
            dropdown: [
                { name: 'Automotive', href: '#automotive' },
                { name: 'Healthcare', href: '#healthcare' },
                { name: 'Pharmaceutical', href: '#pharmaceutical' },
                { name: 'Life Sciences', href: '#life-sciences' },
                { name: 'Medical', href: '#medical' },
                { name: 'Retail', href: '#retail' },
                { name: 'Travel & Tourism', href: '#travel-tourism' },
                { name: 'Education & Research', href: '#education-research' },
                { name: 'Services Industry', href: '#services-industry' },
                { name: 'Media & Entertainment', href: '#media-entertainment' }
            ]
        },
        // Insights links updated to match actual content
        {
            name: 'Insights',
            href: '#insights',
            dropdown: [
                { name: 'Generative AI in Enterprise', href: '#the-future-of-generative-ai-in-enterprise' },
                { name: 'Migrating Legacy Systems', href: '#migrating-legacy-systems-a-strategic-guide' },
                { name: 'Closing Tech Skills Gap', href: '#closing-the-tech-skills-gap-in-2025' }
            ]
        },
        // Careers link mapped to Success Stories as requested
        {
            name: 'Careers',
            href: '#success-stories',
            dropdown: [
                { name: 'Cloud Infrastructure Scale', href: '#global-retailer-scales-cloud-infrastructure' },
                { name: 'Healthcare Data Security', href: '#healthcare-provider-secures-patient-data' },
                { name: 'Fintech Product Launch', href: '#fintech-startup-accelerates-product-launch' }
            ]
        },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <a href="#" onClick={scrollToTop}>
                        <img src="/src/assets/HS.png" alt="Halftone Systems" style={{ height: '40px', width: 'auto' }} />
                    </a>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <div key={link.name} className="nav-item">
                            <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                                {link.name} <ChevronDown size={14} className="dropdown-icon" />
                            </a>
                            <div className="dropdown-menu">
                                {link.dropdown.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="dropdown-item"
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Search"><Search size={20} /></button>
                    <button className="icon-btn" aria-label="Language"><Globe size={20} /></button>
                    <a
                        href="#contact"
                        className="btn btn-primary contact-btn"
                        onClick={handleLinkClick}
                    >
                        Contact Us
                    </a>
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
