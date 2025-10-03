import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Shield, 
  Sun, 
  Trash2, 
  Video, 
  FileText, 
  Cpu
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Import all images first
import cctvImage from '../../images/tech/cctv.jpeg';
import lsdsImage from '../../images/tech/lsds.jpg';
import cyberImage from '../../images/tech/cyber.png';
import solarImage from '../../images/tech/solar.jpg';
import wasteImage from '../../images/tech/waste.png';
import conferenceImage from '../../images/tech/confarence.png';
import docImage from '../../images/tech/doc.png';

const PodiumTechnologies: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const technologies = [
    {
      icon: Camera,
      title: 'Surveillance Technology',
      description: 'POADIUM offers state-of-the-art surveillance solutions designed to ensure security, reliability, and peace of mind for institutions, businesses, and communities.',
      detailedDescription: 'Our systems integrate the latest advancements in monitoring, analytics, and automation to provide end-to-end security coverage. From advanced CCTV systems to intelligent monitoring solutions, we deliver comprehensive security infrastructure.',
      image: cctvImage,
      color: 'from-blue-500 to-blue-700',
      features: ['Advanced CCTV Systems', 'Intelligent Monitoring', '24/7 Security Coverage', 'Analytics & Automation']
    },
    {
      icon: Cpu,
      title: 'Large-Scale Digital Solutions',
      description: 'At POADIUM, we specialize in end-to-end digital infrastructure development for enterprises, educational institutions, government agencies, and large organizations.',
      detailedDescription: 'Our solutions are scalable, future-ready, and integrated, ensuring clients can seamlessly adapt to rapidly evolving digital ecosystems. We build robust digital frameworks that grow with your organization.',
      image: lsdsImage,
      color: 'from-purple-500 to-purple-700',
      features: ['Scalable Infrastructure', 'Future-Ready Systems', 'Enterprise Solutions', 'Government Digital Transformation']
    },
    {
      icon: Shield,
      title: 'Authentication and Cybersecurity',
      description: 'POADIUM delivers advanced authentication systems that combine biometrics, smart devices, and QR-code-based solutions to protect both physical and digital assets.',
      detailedDescription: 'In today\'s digital-first world, data protection and identity security are critical. POADIUM integrates authentication systems with advanced cybersecurity frameworks to safeguard both physical and digital ecosystems. Our solutions ensure trust, compliance, and resilience against threats such as counterfeiting, data breaches, and cyberattacks.',
      image: cyberImage,
      color: 'from-red-500 to-red-700',
      features: ['Biometric Systems', 'Multi-Factor Authentication', 'Cybersecurity Frameworks', 'Threat Protection']
    },
    {
      icon: Sun,
      title: 'Solar Solutions',
      description: 'At POADIUM, we believe in delivering eco-friendly, renewable energy systems that reduce operational costs and environmental impact.',
      detailedDescription: 'Our Solar Solutions are designed for institutions, corporates, and industries to enable a sustainable energy transition while ensuring reliable performance and long-term savings. We provide comprehensive solar energy systems tailored to your specific needs.',
      image: solarImage,
      color: 'from-yellow-500 to-yellow-600',
      features: ['Renewable Energy Systems', 'Cost Reduction', 'Sustainable Transition', 'Long-term Savings']
    },
    {
      icon: Trash2,
      title: 'Waste Management Solutions',
      description: 'POADIUM provides integrated waste management systems that help institutions, industries, and communities manage their waste efficiently.',
      detailedDescription: 'Our solutions focus on reduce, reuse, recycle, and recover, ensuring environmental compliance and long-term cost savings. We promote sustainability and circular economy practices through innovative waste management systems.',
      image: wasteImage,
      color: 'from-emerald-500 to-emerald-700',
      features: ['Integrated Systems', 'Circular Economy', 'Environmental Compliance', 'Cost Efficiency']
    },
    {
      icon: Video,
      title: 'Audio Visual System',
      description: 'We have been actively restoring the classroom environment in the online hemisphere at times of pandemic.',
      detailedDescription: 'We provide Audio Visual Technology like Video Conferencing system, Video wall, Conference room setup, Auditorium Audio Visuals for different government departments. Our solutions enhance communication and collaboration in educational and professional settings.',
      image: conferenceImage,
      color: 'from-indigo-500 to-indigo-700',
      features: ['Video Conferencing', 'Conference Room Setup', 'Auditorium Systems', 'Digital Collaboration']
    },
    {
      icon: FileText,
      title: 'Documentation and Administration',
      description: 'Handling of Vendor Projects - At POADIUM, we understand that successful vendor project execution requires structured documentation, seamless administration, and transparent coordination.',
      detailedDescription: 'Our approach ensures that every project is tracked, recorded, and executed with compliance, accountability, and efficiency. We provide comprehensive documentation and administrative support for smooth project delivery.',
      image: docImage,
      color: 'from-green-500 to-green-700',
      features: ['Structured Documentation', 'Vendor Coordination', 'Project Tracking', 'Compliance Management']
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
      {/* Hero Section - Reduced height for mobile */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 pt-16">
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
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    TECHNOLOGIES
                </span>
                </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-[1.05rem] md:text-[1.15rem] text-slate-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                >
                Cutting-edge technological solutions driving innovation, security, and sustainability across industries
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

      {/* Technologies Services - Reduced spacing for mobile */}
      <section ref={servicesRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              OUR TECHNOLOGIES
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative, scalable, and sustainable technology services designed for modern challenges
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-12 md:space-y-20"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${tech.color} rounded-lg md:rounded-xl flex items-center justify-center mb-2`}>
                        <tech.icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{tech.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 w-full">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{tech.title}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                        {tech.description}
                      </p>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {tech.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                      {tech.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full flex-shrink-0`}></div>
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

      {/* CTA Section - Reduced padding for mobile */}
      <section ref={ctaRef} className="py-12 md:py-20 bg-gradient-to-r from-slate-50 to-blue-50">
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
              Ready to Transform Your Technology Infrastructure?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto"
            >
              Let's discuss how POADIUM TECHNOLOGIES can help secure, optimize, and future-proof your operations
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block w-full sm:w-auto text-center"
              >
                Get Started Today
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

export default PodiumTechnologies;
