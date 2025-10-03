import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, 
  Megaphone, 
  FileVideo, 
  Palette, 
  BarChart,
  Video,
  Brush,
  Target
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Import all images first
import filmImage from '../../images/media/film.png';
import adImage from '../../images/media/ad.png';
import docuImage from '../../images/media/docu.png';
import creativeImage from '../../images/media/crative.png';
import consultancyImage from '../../images/media/consultancy.png';

const PodiumMedia: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const mediaServices = [
    {
      icon: Film,
      title: 'Film and Media',
      description: 'End-to-end film and media solutions covering feature films, short films, corporate videos, and OTT/web content.',
      detailedDescription: 'We offer comprehensive production services from concept development to final delivery. Our expertise spans scriptwriting, cinematography, editing, VFX, and sound design. We help businesses, educational institutions, and organizations communicate their vision through compelling visual storytelling that resonates with audiences.',
      image: filmImage,
      color: 'from-purple-500 to-purple-700',
      features: ['Feature Films', 'Short Films', 'Corporate Videos', 'OTT/Web Content', 'Scriptwriting', 'Cinematography', 'Editing & VFX', 'Sound Design']
    },
    {
      icon: Megaphone,
      title: 'Advertising Production',
      description: 'Impactful advertising campaigns across print, digital, television, and outdoor media.',
      detailedDescription: 'We create compelling advertising campaigns that capture attention and drive results. With a strong focus on brand identity, storytelling, and target audience engagement, our team ensures your message leaves a lasting impression across all media channels.',
      image: adImage,
      color: 'from-orange-500 to-orange-700',
      features: ['Print Advertising', 'Digital Campaigns', 'TV Commercials', 'Outdoor Media', 'Brand Identity', 'Audience Engagement', 'Creative Storytelling']
    },
    {
      icon: FileVideo,
      title: 'Documentary',
      description: 'Professional documentary production services that bring real-life stories and institutional journeys to the screen.',
      detailedDescription: 'Our documentary production services capture authentic stories with cinematic excellence. From educational and social awareness films to corporate and government initiatives, we highlight meaningful narratives with professional production quality and emotional impact.',
      image: docuImage,
      color: 'from-green-500 to-green-700',
      features: ['Educational Films', 'Social Awareness', 'Corporate Documentaries', 'Government Initiatives', 'Cinematic Storytelling', 'Research Documentation']
    },
    {
      icon: Palette,
      title: 'Allied Creative Services',
      description: 'Holistic creative services that enhance branding and communication strategies across multiple platforms.',
      detailedDescription: 'Beyond production, POADIUM provides comprehensive creative services that elevate your brand presence. These services cover graphic design, content creation, animation, digital art, and creative campaign support for both corporate and social initiatives.',
      image: creativeImage,
      color: 'from-pink-500 to-pink-700',
      features: ['Graphic Design', 'Content Creation', 'Animation', 'Digital Art', 'Creative Campaigns', 'Brand Enhancement', 'Multi-platform Content']
    },
    {
      icon: BarChart,
      title: 'Media Consultancy',
      description: 'Strategic media consulting to help organizations leverage media channels effectively for maximum impact.',
      detailedDescription: 'We offer strategic media consulting to businesses, government organizations, and educational institutions. Our consultancy helps clients leverage media channels effectively, ensuring optimal visibility, audience engagement, and reputation building in today\'s competitive landscape.',
      image: consultancyImage,
      color: 'from-blue-500 to-blue-700',
      features: ['Media Strategy', 'Channel Optimization', 'Audience Analysis', 'Reputation Management', 'Visibility Planning', 'Engagement Metrics']
    }
  ];

  // Container animation for all elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-pink-100 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight"
            >
              POADIUM{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MEDIA SERVICES
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[1.05rem] md:text-[1.15rem] text-slate-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Creative storytelling and strategic media solutions that captivate audiences and drive meaningful engagement
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* Media Services Section */}
      <section ref={servicesRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              OUR MEDIA SERVICES
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Media Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to delivery, we create compelling visual narratives that connect with your audience
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-12 md:space-y-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {mediaServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${service.color} rounded-lg md:rounded-xl flex items-center justify-center mb-2`}>
                        <service.icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Creative Process
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to bringing your vision to life with creativity and precision
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Target, title: 'Concept & Strategy', description: 'Understanding your vision and developing a creative strategy' },
              { icon: Video, title: 'Production', description: 'High-quality filming and content creation with professional equipment' },
              { icon: Brush, title: 'Post-Production', description: 'Editing, VFX, sound design, and final polishing' },
              { icon: Megaphone, title: 'Distribution', description: 'Strategic media placement and audience engagement' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <step.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                <div className="mt-4 text-2xl font-bold text-purple-500">{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 md:py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
            >
              Ready to Tell Your Story?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto"
            >
              Let's collaborate to create compelling media content that engages your audience and amplifies your message
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block w-full sm:w-auto text-center"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-slate-300 text-slate-700 px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold text-base md:text-lg hover:border-slate-400 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PodiumMedia;
