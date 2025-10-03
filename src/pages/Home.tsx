import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../images/bg.png';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 pt-16 overflow-hidden">
        {/* Background Image with Enhanced Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]"></div>
        </div>
        
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Main Content with Animations */}
          <div className="space-y-8">
            {/* Animated Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                Setting the Stage
                <span className="block bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent animate-gradient">
                  for Innovation
                </span>
              </h1>
              
              {/* Animated Subtitle */}
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
                We bring ideas, technology, and creativity together to deliver solutions that make an impact globally across multiple industries.
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
              <Link
                to="/about"
                className="group relative bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              
              <Link
                to="/contact"
                className="group relative border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle Floating Particles - Reduced Count */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-subtle-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${15 + Math.random() * 15}s`,
              }}
            />
          ))}
        </div>

        {/* Even more subtle secondary particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/15 rounded-full animate-very-subtle-float"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;