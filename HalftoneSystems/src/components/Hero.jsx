import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CurveSeparator } from './SectionSeparator';

import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Growth. Transformation.<br />
                            <span className="highlight">Opportunity.</span>
                        </h1>
                        <p className="hero-subtitle">
                            We partner with global leaders to drive digital dominance through innovative technology services and talent solutions.
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-primary hero-btn">
                                Explore Our Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </button>
                            <button className="btn btn-outline hero-btn">
                                View Success Stories
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <CurveSeparator fill="#111111" height="80px" inverted={true} />
        </section>
    );
};
