import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import blackLogo from '../images/logo/Poadium_Secondary Logo Black.png';
import whiteLogo from '../images/logo/Poadium_Secondary Logo White.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'All Services', path: '/services' },
        { name: 'POADIUM TECHNOLOGIES', path: '/technologies' },
        { name: 'POADIUM MEDIA SERVICES', path: '/media' }
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  // Navigation styles based on scroll and page
  const navBackground = isHomePage && !scrolled 
    ? 'bg-transparent shadow-none' 
    : 'bg-white shadow-lg';
  
  const textColor = isHomePage && !scrolled ? 'text-white' : 'text-slate-700';
  const hoverColor = isHomePage && !scrolled ? 'hover:text-teal-300' : 'hover:text-teal-500';
  const activeColor = isHomePage && !scrolled ? 'text-teal-300' : 'text-teal-500';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group focus:outline-none">
            <img
              src={isHomePage && !scrolled ? whiteLogo : blackLogo}
              alt="Poadium Logo"
              className="h-10 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <div
                key={item.path}
                className="relative"
                ref={item.name === 'Services' ? servicesRef : null}
                onMouseEnter={item.name === 'Services' ? handleServicesMouseEnter : undefined}
                onMouseLeave={item.name === 'Services' ? handleServicesMouseLeave : undefined}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center font-medium transition-colors focus:outline-none ${
                        location.pathname.startsWith('/services')
                          ? activeColor
                          : `${textColor} ${hoverColor}`
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-fade-in"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        {item.submenu.map(subItem => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-3 font-medium transition-colors hover:bg-slate-50 focus:outline-none ${
                              location.pathname === subItem.path
                                ? 'text-teal-500 bg-teal-50'
                                : 'text-slate-700 hover:text-teal-500'
                            }`}
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors focus:outline-none ${
                      location.pathname === item.path
                        ? activeColor
                        : `${textColor} ${hoverColor}`
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className={`bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none ${
                isHomePage && !scrolled ? 'shadow-2xl' : ''
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
              isHomePage && !scrolled ? 'text-white' : 'text-slate-700'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 rounded-lg mt-2 shadow-xl bg-white text-slate-700">
            {navItems.map(item => (
              <div key={item.path}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between w-full px-6 py-2 font-medium transition-colors focus:outline-none ${
                        location.pathname.startsWith('/services')
                          ? 'text-teal-500 bg-teal-50'
                          : 'text-slate-700 hover:text-teal-500 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-8 space-y-2 py-2">
                        {item.submenu.map(subItem => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 font-medium transition-colors focus:outline-none ${
                              location.pathname === subItem.path
                                ? 'text-teal-500 bg-teal-50'
                                : 'text-slate-700 hover:text-teal-500 hover:bg-slate-50'
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-6 py-2 font-medium transition-colors focus:outline-none ${
                      location.pathname === item.path
                        ? 'text-teal-500 bg-teal-50'
                        : 'text-slate-700 hover:text-teal-500 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-6">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none bg-gradient-to-r from-blue-600 to-teal-500 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;