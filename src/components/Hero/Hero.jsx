import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className='hero-section' id='features'>
      <nav className='navigation-bar'>
        <ul>
          <li>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="0 0.144 18.506 19.712" xmlns="http://www.w3.org/2000/svg" viewBox="0 0.144 18.506 19.712" height="30" width="30" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path d="M18.506 4.971H0V.144h15.288a3.22 3.22 0 0 1 3.218 3.218z"></path>
                <path d="M18.506 12.615H6.035V7.787h9.253a3.22 3.22 0 0 1 3.218 3.219z"></path>
                <path d="M18.506 19.856h-6.437V15.03h3.218a3.22 3.22 0 0 1 3.219 3.218z"></path>
              </g>
            </svg>
          </li>
          <li>WorkFlow</li>
        </ul>

        <div className={`action-section ${isMenuOpen ? 'show' : ''}`}>
          <p onClick={() => closeMenuAndNavigate('features')}>Features & Benefits</p>
          <div>
            <button onClick={() => closeMenuAndNavigate('plans')}>Get Started</button>
          </div>
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </nav>

      <div className='hero-section-text-part'>
        <span>Pricing & Plans</span>
        <label>Choose a Plan <br />
          That Works for You</label>
        <p>Use this space to promote the business, its products or its services. Help people <br /> become familiar with the business and its offerings, creating a sense of connection <br /> and trust.</p>
      </div>
    </div>
  )
}

export default Hero