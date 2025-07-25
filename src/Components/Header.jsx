// src/components/Header.jsx
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    };

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    };

    hamburger?.addEventListener('click', toggleMenu);

    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      hamburger?.removeEventListener('click', toggleMenu);
      links.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo">The <span>Bright Future</span></a>
        <nav>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Our Courses</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Why Choose Us?</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <div className="cta-buttons">
              <a href="https://wa.me/917447721586?text=Hi%20I'm%20interested%20in%20your%20courses!" 
              target="_blank" className="btn btn-primary">Book Free Trial</a>
              
              {/* 9242912480 */}
              {/* <a href="#franchise" className="btn btn-secondary">Franchise</a> */}
            </div>
          </ul>
        </nav>
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
