import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Insights.css';

const insights = [
    { category: 'AI & Data', title: 'The Future of Generative AI in Enterprise', date: 'Oct 12, 2024' },
    { category: 'Cloud', title: 'Migrating Legacy Systems: A Strategic Guide', date: 'Sep 28, 2024' },
    { category: 'Talent', title: 'Closing the Tech Skills Gap in 2025', date: 'Sep 15, 2024' },
];

export const Insights = () => {
    return (
        <section className="insights section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Latest Insights</h2>
                    <a href="#" className="view-all-link">View All Insights &rarr;</a>
                </div>
                <div className="insights-grid">
                    {insights.map((item, i) => (
                        <div key={i} className="insight-card">
                            <div className="insight-top">
                                <span className="insight-category">{item.category}</span>
                                <span className="insight-date">{item.date}</span>
                            </div>
                            <h3 className="insight-title">{item.title}</h3>
                            <a href="#" className="insight-link">Read Article <ArrowRight size={16} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
