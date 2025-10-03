import React from 'react';
import { FileText, Scale, AlertCircle, Users, Shield, Clock } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Terms of
              <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <span>Last updated:</span>
              <span className="font-semibold">January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Agreement */}
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Agreement to Terms</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  By accessing and using Poadium's website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to these Terms of Service, 
                  you may not access or use our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="text-teal-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Use of Our Services</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Permitted Use</h3>
                  <ul className="space-y-2 text-slate-600 leading-relaxed">
                    <li>• Access and use our services for lawful business purposes</li>
                    <li>• Submit accurate and complete information when requested</li>
                    <li>• Maintain the confidentiality of your account credentials</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Prohibited Use</h3>
                  <ul className="space-y-2 text-slate-600 leading-relaxed">
                    <li>• Use our services for any unlawful purpose or activity</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Interfere with or disrupt our services or servers</li>
                    <li>• Transmit viruses, malware, or other harmful code</li>
                    <li>• Violate the intellectual property rights of others</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="text-green-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Intellectual Property Rights</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  The Service and its original content, features, and functionality are and will remain 
                  the exclusive property of Poadium and its licensors. The Service is protected by 
                  copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
                  in connection with any product or service without our prior written consent.
                </p>
                <p>
                  All work products, deliverables, and intellectual property created by Poadium in the 
                  course of providing services to clients shall be governed by separate written agreements 
                  between Poadium and the client.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Service Availability</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  We strive to maintain the availability of our services, but we cannot guarantee 
                  uninterrupted access. Our services may be temporarily unavailable due to:
                </p>
                <ul className="space-y-2">
                  <li>• Scheduled maintenance and updates</li>
                  <li>• Technical issues or system failures</li>
                  <li>• Force majeure events beyond our control</li>
                  <li>• Security measures to protect our systems</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time with reasonable notice.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="text-purple-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Disclaimers</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  Our services are provided "as is" and "as available" without any representations 
                  or warranties, express or implied. We disclaim all warranties, including but not 
                  limited to:
                </p>
                <ul className="space-y-2">
                  <li>• Implied warranties of merchantability and fitness for a particular purpose</li>
                  <li>• Warranties of non-infringement of third-party rights</li>
                  <li>• Warranties that our services will be uninterrupted or error-free</li>
                  <li>• Warranties regarding the accuracy, reliability, or completeness of information</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Scale className="text-pink-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Limitation of Liability</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  In no event shall Poadium, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses, resulting from your use of our services.
                </p>
                <p>
                  Our total liability for any claims arising from or relating to our services shall 
                  not exceed the amount paid by you, if any, for accessing our services during the 
                  twelve (12) months prior to the event giving rise to the liability.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Indemnification</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  You agree to defend, indemnify, and hold harmless Poadium and its licensee and 
                  licensors, and their employees, contractors, agents, officers and directors, from 
                  and against any and all claims, damages, obligations, losses, liabilities, costs 
                  or debt, and expenses (including but not limited to attorney's fees), resulting 
                  from or arising out of:
                </p>
                <ul className="space-y-2">
                  <li>• Your use and access of the Service</li>
                  <li>• Your violation of any term of these Terms</li>
                  <li>• Your violation of any third-party right, including intellectual property</li>
                  <li>• Any claim that your use caused damage to a third party</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Governing Law</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  These Terms shall be interpreted and governed by the laws of India, without regard 
                  to its conflict of law provisions. Our failure to enforce any right or provision 
                  of these Terms will not be considered a waiver of those rights.
                </p>
                <p>
                  Any disputes arising out of or in connection with these Terms shall be subject to 
                  the exclusive jurisdiction of the courts in Bangalore, India.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Changes to Terms</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms 
                  at any time. If a revision is material, we will try to provide at least 30 days 
                  notice prior to any new terms taking effect.
                </p>
                <p>
                  By continuing to access or use our Service after those revisions become effective, 
                  you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
                <div className="text-slate-600 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@poadium.com</p>
                    <p><strong>Phone:</strong> +91 97438 41261</p>
                    <p><strong>Address:</strong> Innovation Hub, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;