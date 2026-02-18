import React from 'react';
import './SuccessStories.css';

const stories = [
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', title: 'Global Retailer Scales Cloud Infrastructure', category: 'Cloud' },
    { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop', title: 'Healthcare Provider Secures Patient Data', category: 'Security' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', title: 'Fintech Startup Accelerates Product Launch', category: 'DevOps' },
];

export const SuccessStories = () => {
    return (
        <section className="stories section-padding bg-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Success Stories</h2>
                    <a href="#" className="view-all-link">View All Work &rarr;</a>
                </div>
                <div className="stories-grid">
                    {stories.map((story, i) => (
                        <div key={i} className="story-card">
                            <div className="story-image">
                                <img src={story.img} alt={story.title} />
                                <span className="story-category">{story.category}</span>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">{story.title}</h3>
                                <a href="#" className="story-cta">Read Case Study</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
