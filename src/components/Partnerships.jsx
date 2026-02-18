import React from 'react';
import './Partnerships.css';

export const Partnerships = () => {
    const partners = ['Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 'Oracle', 'IBM'];

    return (
        <section className="partnerships section-padding">
            <div className="container">
                <p className="partners-label text-center">Trusted by Global Technology Leaders</p>
                <div className="partners-carousel">
                    {partners.map((partner, i) => (
                        <div key={i} className="partner-logo">
                            {/* Fallback text if no logo image, normally would use <img> */}
                            <span className="partner-name">{partner}</span>
                        </div>
                    ))}
                    {partners.map((partner, i) => (
                        /* Duplicate for seamless infinite scroll if implemented with CSS marquee */
                        <div key={`dup-${i}`} className="partner-logo">
                            <span className="partner-name">{partner}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
