import { useState } from 'react';
import { Calendar, X } from 'lucide-react';

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  const openCalendly = () => {
    window.open('https://calendly.com/getrooming', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-400 z-50 border-b border-yellow-500">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <p className="text-sm md:text-base font-medium text-gray-900">
              This is the sales-specific site for Rooming. Schedule a demo to learn more!
            </p>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="text-gray-900 hover:text-gray-700 transition-colors p-1"
              aria-label="Close announcement"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 ${showAnnouncement ? 'top-12' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Rooming Logo" className="h-8" />
            <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
              SALES
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={openCalendly}
              className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`pb-20 px-6 ${showAnnouncement ? 'pt-32' : 'pt-24'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Property Management{' '}
                  <span className="text-red-500">Simplified</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Streamline your rental property management with our all-in-one platform. Track tenants, collect payments, and automate maintenance requests.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/getrooming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Get Started
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <p className="text-gray-700 font-medium">
                  <span className="text-2xl font-bold text-gray-900">500+</span> property managers trust Rooming
                </p>
              </div>
            </div>

            {/* Right Content - Hero Images */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Main Dashboard Screenshot */}
                <div className="relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/hero-image-1.png" 
                    alt="Property Management Calendar Dashboard" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute top-4 right-4 bg-green-50 border border-green-200 rounded-full px-3 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-green-700">Live Updates</span>
                  </div>
                </div>

                {/* Automation Screenshot Overlay */}
                <div className="absolute -bottom-8 -right-8 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/hero-image-2.png" 
                    alt="Property Management Automation Dashboard" 
                    className="rounded-2xl shadow-2xl w-full max-w-md"
                  />
                </div>

                {/* Users Badge */}
                <div className="absolute -left-8 top-1/2 bg-white rounded-full shadow-xl px-4 py-3 flex items-center gap-2 transform -translate-y-1/2 z-30">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  </div>
                  <span className="text-sm font-bold text-gray-900">500+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - Sales Focused */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to simplify your property management?
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Join hundreds of property managers who trust Rooming to streamline their operations and grow their business. Schedule a demo with our team and see how Rooming can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/getrooming"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-red-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Schedule Your Demo Now
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Sign up now</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
