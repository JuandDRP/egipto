import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/imagenes/logo.png" 
              alt="Egypt Tourism Logo" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gold-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/Historia">Historia</NavLink>
            <NavLink to="/Experiencias">Experiencias</NavLink>
            <NavLink to="/SobreNosotros">Sobre Nosotros</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </MobileNavLink>
            <MobileNavLink to="/Historia" onClick={() => setMobileMenuOpen(false)}>
              Historia
            </MobileNavLink>
            <MobileNavLink to="/Experiencias" onClick={() => setMobileMenuOpen(false)}>
              Experiencias
            </MobileNavLink>
            <MobileNavLink to="/SobreNosotros" onClick={() => setMobileMenuOpen(false)}>
              Sobre Nosotros
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className={`
      text-gray-900 hover:text-gold-600
      font-medium tracking-wide
      transition-all duration-300
      pb-2 border-b-2 border-transparent
      hover:border-gold-600
    `}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      block px-3 py-2
      text-base font-medium text-gray-900
      hover:bg-gold-50 hover:text-gold-600
      rounded-md transition-colors duration-300
    "
  >
    {children}
  </Link>
);

export default Navbar;