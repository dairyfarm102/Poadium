import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { 
  Upload, 
  Send, 
  Users, 
  TrendingUp, 
  Heart, 
  Coffee, 
  Laptop, 
  Globe, 
  FileText, 
  Mail, 
  Phone, 
  User,
  Briefcase,
  Award,
  Link as LinkIcon,
  CheckCircle,
  X
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

// Define the form data interface
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  skills: string;
  portfolio: string;
  coverLetter: string;
  resume: File | null;
}

const Careers: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [perksRef, perksInView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.05, triggerOnce: true });

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    skills: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Effect to handle popup display and auto-hide
  useEffect(() => {
    if (submitStatus === 'success') {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000); // Hide after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx', '.txt'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setSubmitStatus('error');
        setSubmitMessage('Invalid file type. Please upload PDF, DOC, DOCX, or TXT files.');
        e.target.value = ''; // Reset file input
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus('error');
        setSubmitMessage('File size too large. Maximum size is 5MB.');
        e.target.value = ''; // Reset file input
        return;
      }
      
      setFormData({
        ...formData,
        resume: file
      });
      setSubmitStatus('');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');
    setShowPopup(false);

    // Validate resume file
    if (!formData.resume) {
      setSubmitStatus('error');
      setSubmitMessage('Please upload your resume');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('portfolio', formData.portfolio);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('resume', formData.resume);

      const response = await fetch('http://localhost:5000/submit-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          skills: '',
          portfolio: '',
          coverLetter: '',
          resume: null
        });
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit application. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const perks = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and mentorship programs',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that matter across multiple industries',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Diverse team of innovators and creative problem-solvers',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: Laptop,
      title: 'Latest Technology',
      description: 'Work with cutting-edge tools and technologies',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive benefits and wellness programs',
      color: 'from-pink-500 to-pink-700'
    }
  ];

  const positions = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Data Scientist',
    'Innovation Strategist',
    'Business Development',
    'Project Manager',
    'Other'
  ];

  const experienceLevels = [
    'Intern',
    'Entry Level (0-2 years)',
    'Mid Level (2-5 years)',
    'Senior Level (5+ years)',
    'Lead/Manager'
  ];

  return (
    <div className="bg-white relative">
      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-green-50 border border-green-200 rounded-xl shadow-2xl p-4 mx-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-green-800">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      We'll review your application and contact you soon.
                    </p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="flex-shrink-0 ml-4 inline-flex text-green-600 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 w-full bg-green-200 rounded-full h-1">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  className="bg-green-600 h-1 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-pink-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              Join{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-[1.05rem] md:text-[1.15rem] text-slate-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Ready to make an impact? Submit your application and let's start the conversation.
            </p>
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

      {/* Culture & Perks */}
      <section ref={perksRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Poadium
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a job - it's a launchpad for your career and impact
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate={perksInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {perks.map((perk) => {
              const IconComponent = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${perk.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{perk.description}</p>
                  <div className="mt-4">
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${perk.color} rounded-full transition-all duration-500`}></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Form
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All fields are required. We're excited to learn more about you and your potential contribution to our team.
              </p>
            </div>

            {/* Only show error messages in the form, success will be in popup */}
            {submitStatus === 'error' && (
              <div className={`mb-6 p-4 rounded-lg border bg-red-100 text-red-700 border-red-200`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" encType="multipart/form-data">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700">
                    <User size={16} className="mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                    <Mail size={16} className="mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700">
                    <Phone size={16} className="mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <label htmlFor="position" className="flex items-center text-sm font-medium text-gray-700">
                    <Briefcase size={16} className="mr-2" />
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a position</option>
                    {positions.map(position => (
                      <option key={position} value={position}>{position}</option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <label htmlFor="experience" className="flex items-center text-sm font-medium text-gray-700">
                    <Award size={16} className="mr-2" />
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select experience</option>
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Portfolio/LinkedIn */}
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="flex items-center text-sm font-medium text-gray-700">
                    <LinkIcon size={16} className="mr-2" />
                    Portfolio/LinkedIn *
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    required
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourname"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Key Skills */}
              <div className="space-y-2">
                <label htmlFor="skills" className="flex items-center text-sm font-medium text-gray-700">
                  Key Skills *
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  required
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="React, Node.js, Python, Design, Strategy..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Upload Resume */}
              <div className="space-y-2">
                <label htmlFor="resume" className="flex items-center text-sm font-medium text-gray-700">
                  <Upload size={16} className="mr-2" />
                  Upload Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-all duration-300">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    <FileText size={32} className="mx-auto mb-3 text-gray-400" />
                    <p className="text-gray-600 mb-1">
                      {formData.resume ? formData.resume.name : 'Choose file or drag here'}
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, DOCX, or TXT (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label htmlFor="coverLetter" className="flex items-center text-sm font-medium text-gray-700">
                  <FileText size={16} className="mr-2" />
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're excited to join Poadium and what unique value you'd bring to our team..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;