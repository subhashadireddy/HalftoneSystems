import React, { useRef } from 'react';
import hsLogo from '../assets/HS_LOGO.png';
import './HeroLogo3D.css';

export const HeroLogo3D = () => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
        const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1
        const rotX = -dy * 18;   // tilt up/down
        const rotY = dx * 18;    // tilt left/right
        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
        card.style.filter = `drop-shadow(0 28px 50px rgba(124,58,237,0.45))`;
        card.style.animation = 'none';  // pause float-tilt while hovering
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = '';
        card.style.filter = '';
        card.style.animation = ''; // resume CSS animation
    };

    return (
        <div
            className="logo3d-scene"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="logo3d-wrapper">
                {/* Logo — no rings */}
                <div className="logo3d-card" ref={cardRef}>
                    <img
                        src={hsLogo}
                        alt="Halftone Systems Logo"
                        className="logo3d-img"
                        draggable={false}
                    />
                </div>

                {/* Floating shadow */}
                <div className="logo3d-shadow" />
            </div>
        </div>
    );
};
