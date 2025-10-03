import React from 'react';
import { Target, Users, TrendingUp, Lightbulb, Globe, Heart } from 'lucide-react';

const WhyWorkSection: React.FC = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Work on projects that solve genuine problems and create meaningful change across industries',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Cross-Industry Exposure',
      description: 'Gain experience across energy, education, media, startups, and public sector initiatives',
      color: 'text-teal-500'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of innovators, creators, and problem-solvers who value diverse perspectives',
      color: 'text-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Accelerate your professional development with mentorship and challenging opportunities',
      color: 'text-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Be part of cutting-edge projects using the latest technologies and methodologies',
      color: 'text-purple-500'
    },
    {
      icon: Heart,
      title: 'Purpose-Driven Work',
      description: 'Contribute to projects that matter, with social and environmental impact at their core',
      color: 'text-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Work
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent"> With Us</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join a team that's passionate about creating solutions that matter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transform hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <IconComponent className={reason.color} size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '5', label: 'Industries Served' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Innovation Focus' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;