import React from 'react';
import { Shield, Eye, Lock, Users, Database, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Privacy
              <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Your privacy is fundamental to how we operate. Here's how we protect and respect your data.
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
            {/* Overview */}
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
              </div>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p>
                  At Poadium ("we," "our," or "us"), we are committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website, use our services, or 
                  interact with us.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Database className="text-teal-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-slate-600 leading-relaxed">
                    <li>• Contact information (name, email address, phone number)</li>
                    <li>• Professional information (company, job title, industry)</li>
                    <li>• Communication preferences and history</li>
                    <li>• Resume and career-related information (when applying for positions)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Usage Information</h3>
                  <ul className="space-y-2 text-slate-600 leading-relaxed">
                    <li>• Website navigation and interaction data</li>
                    <li>• IP address, browser type, and device information</li>
                    <li>• Pages visited, time spent, and referring URLs</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Eye className="text-green-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We use the collected information for the following purposes:</p>
                <ul className="space-y-2">
                  <li>• <strong>Service Delivery:</strong> To provide, operate, and maintain our services</li>
                  <li>• <strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                  <li>• <strong>Improvement:</strong> To understand and analyze how you use our website and services</li>
                  <li>• <strong>Marketing:</strong> To send you relevant information about our services (with your consent)</li>
                  <li>• <strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="text-orange-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                <ul className="space-y-2">
                  <li>• <strong>Service Providers:</strong> Trusted partners who assist in operating our website and services</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li>• <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale</li>
                  <li>• <strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Lock className="text-purple-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Data Security</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="space-y-2">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and audits</li>
                  <li>• Access controls and authentication systems</li>
                  <li>• Employee training on data protection practices</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FileText className="text-pink-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Your Rights</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="space-y-2">
                  <li>• <strong>Access:</strong> Request access to your personal information</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li>• <strong>Portability:</strong> Request transfer of your information to another service</li>
                  <li>• <strong>Objection:</strong> Object to the processing of your information</li>
                  <li>• <strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cookies and Tracking</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze site traffic, and understand user preferences. You can control cookie settings 
                  through your browser preferences.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Types of Cookies We Use:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Essential:</strong> Necessary for website functionality</li>
                    <li>• <strong>Analytics:</strong> Help us understand website usage</li>
                    <li>• <strong>Functional:</strong> Remember your preferences and settings</li>
                    <li>• <strong>Marketing:</strong> Deliver relevant advertisements (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Policy Updates</h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any material changes by posting the new 
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
                <div className="text-slate-600 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@poadium.com</p>
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

export default Privacy;