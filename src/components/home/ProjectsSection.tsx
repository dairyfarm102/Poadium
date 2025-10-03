import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Smart Grid Analytics Platform',
      category: 'Energy',
      description: 'AI-powered platform for optimizing energy distribution and reducing waste across smart city infrastructure.',
      image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['AI/ML', 'IoT', 'Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Immersive Learning Experiences',
      category: 'Education',
      description: 'VR/AR educational platform helping students visualize complex concepts through interactive 3D environments.',
      image: 'https://images.pexels.com/photos/82-1/pexels-photo-8361065.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['VR/AR', 'Education', 'Interactive'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Community Impact Dashboard',
      category: 'Public Sector',
      description: 'Real-time data visualization tool for tracking community development initiatives and measuring social impact.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1200',
      tags: ['Data Viz', 'Analytics', 'Social Impact'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we're turning innovative ideas into real-world solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                  <ExternalLink className="text-white" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group">
                  <span>Read Case Study</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;