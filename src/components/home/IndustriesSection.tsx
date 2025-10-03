import React from 'react';
import { Zap, GraduationCap, Film, Rocket, Building, ArrowRight } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: Zap,
      title: 'Energy',
      description: 'Sustainable energy solutions and smart grid innovations',
      image: 'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Digital learning platforms and skill development programs',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Film,
      title: 'Media & Entertainment',
      description: 'Content production and immersive media experiences',
      image: 'https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Startups & Enterprises',
      description: 'Innovation consulting and digital transformation',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Building,
      title: 'Public Sector & Community',
      description: 'Civic technology and community-driven solutions',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Transform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From energy to education, we deliver innovation across sectors that shape our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.title}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;