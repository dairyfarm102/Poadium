import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, MessageCircle } from 'lucide-react';

const CareersTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Join
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"> Our Team?</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We're always looking for passionate individuals who want to make a real difference. 
                Whether you're a developer, designer, strategist, or innovator, there's a place for you on our team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Diverse Opportunities</h3>
                  <p className="text-slate-600">From tech roles to creative positions, find your perfect fit</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Growth-Focused</h3>
                  <p className="text-slate-600">Continuous learning and career development opportunities</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Open Culture</h3>
                  <p className="text-slate-600">Collaborative environment where every voice matters</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center"
              >
                Let's Build Something Together
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl opacity-80 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTeaser;