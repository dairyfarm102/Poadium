import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Users, Cpu, Target, Heart, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [missionRef, missionInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });

  const values = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Approach',
      description: 'Providing futuristic services while prioritizing environmental sustainability for a better tomorrow.',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Ensuring we give back to our clients through exceptional service and innovative solutions.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Globe,
      title: 'Global Responsibility',
      description: 'Committed to giving back to Mother Earth through sustainable practices and solutions.',
      color: 'from-teal-500 to-teal-700'
    },
    {
      icon: Cpu,
      title: 'Intelligent Technology',
      description: 'Creating well-organized work stations with comprehensive network and communication technology.',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Target,
      title: 'Expertise & Research',
      description: 'Backed by contemporary research in information technology and digital solutions.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Heart,
      title: 'Sustainable Future',
      description: 'Dedicated to building a better tomorrow through innovative and responsible business practices.',
      color: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[5vh] flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-teal-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-none"
            >
              About{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto"
            >
              Pioneering eco-friendly, futuristic services for a sustainable tomorrow
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

      {/* Mission Statement Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="space-y-6">
               <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                  <strong>POADIUM provides an eco-friendly approach in its futuristic services for a better tomorrow.</strong> 
                  We ensure that we're not only giving back to our clients but also to Mother Earth.
                </p>
                <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                  Join POADIUM's finesse in creation of well-organized and cohesive work stations with comprehensive 
                  and intelligent network and communication technology.
                </p>
                <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                  We provide you with great expertise that is backed with contemporary research in the field of 
                  information technology.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 text-white h-full">
                <div className="text-center py-12">
                  <Leaf size={64} className="mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Sustainable Innovation</h3>
                  <p className="text-lg opacity-90">
                    Where cutting-edge technology meets environmental responsibility
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our journey towards a sustainable and technologically advanced future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                <div className="mt-6">
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${value.color} rounded-full transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Join Our Sustainable Journey
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Let's work together to create innovative solutions that benefit both your business and our planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-slate-300 text-slate-700 px-12 py-4 rounded-full font-semibold text-lg hover:border-slate-400 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;