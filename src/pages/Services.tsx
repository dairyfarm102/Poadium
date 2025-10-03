import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Shield, 
  Sun, 
  Trash2, 
  Video, 
  FileText,  
  Film,
  Megaphone,
  Clapperboard,
  Palette
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  // Separate visibility tracking for each section
  const [technologiesRef, technologiesInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true // This ensures animation plays once when entering viewport
  });

  const [mediaRef, mediaInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true
  });

  const podiumTechnologies = [
    {
      icon: Camera,
      title: 'Surveillance Technology',
      description: 'Advanced security and monitoring solutions for comprehensive protection',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Shield,
      title: 'Authentication and Cybersecurity Solution',
      description: 'Robust security measures and authentication systems for data protection',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Video,
      title: 'Audio Visual System',
      description: 'State-of-the-art audio visual solutions for presentations and communications',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Trash2,
      title: 'Waste Management Solutions',
      description: 'Sustainable waste management systems for environmental responsibility',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      icon: Film,
      title: 'Large-Scale Digital Solutions',
      description: 'Comprehensive digital transformation and large-scale technology implementations',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Sun,
      title: 'Solar Solutions',
      description: 'Renewable energy solutions harnessing solar power for sustainable operations',
      color: 'from-yellow-500 to-yellow-600'
    },
     {
      icon: FileText,
      title: 'Documentation and Administration Handling Of Vendor Projects',
      description: 'Streamlined documentation and administrative systems for efficient operations',
      color: 'from-green-500 to-green-700'
    }
  ];

  const podiumMediaServices = [
    {
      icon: Clapperboard,
      title: 'Film and Media',
      description: 'Professional film production and media content creation services',
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: Megaphone,
      title: 'Advertising Production',
      description: 'Creative advertising production and marketing campaign development',
      color: 'from-rose-500 to-rose-700'
    },
    {
      icon: Film,
      title: 'Documentary',
      description: 'Documentary filmmaking and factual content production',
      color: 'from-violet-500 to-violet-700'
    },
    {
      icon: Palette,
      title: 'Allied Creative Services',
      description: 'Comprehensive creative services including design and content development',
      color: 'from-cyan-500 to-cyan-700'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-none"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              Comprehensive solutions spanning technology, media, and sustainable innovation
            </motion.p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* POADIUM TECHNOLOGIES Section */}
      <section ref={technologiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              TECHNOLOGY DIVISION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              POADIUM TECHNOLOGIES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technological solutions driving innovation and efficiency across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {podiumTechnologies.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={technologiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POADIUM MEDIA SERVICES Section */}
      <section ref={mediaRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mediaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              MEDIA DIVISION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              POADIUM MEDIA SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creative media production and content services that tell compelling stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {podiumMediaServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={mediaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Let's discuss how our comprehensive services can meet your unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="border-2 border-slate-300 text-slate-700 px-12 py-4 rounded-full font-semibold text-lg hover:border-slate-400 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;