import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import whiteLogo from '../images/logo/Poadium_Secondary Logo White.png';

const Footer: React.FC = () => {

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={whiteLogo} 
                alt="Poadium" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Setting the Stage for Innovation
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              We bring ideas, technology, and creativity together to deliver solutions 
              that make an impact globally across multiple industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <a 
                    href="mailto:info@poadium.com" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none"
                  >
                    info@poadium.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <a 
                    href="tel:+919743841261" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none"
                  >
                    +91 97438 41261
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                <div className="text-gray-400 text-sm">
                  2nd & 3rd Floor, #235, 13th Cross Road, 2nd Stage, Indiranagar, Bangalore, <br/>
                  Karnataka, India - 560038
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Poadium. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;