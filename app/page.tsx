'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userType: 'client',
    linkedIn: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20 blur-3xl -z-10"></div>
        <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-6 animate-fade-in">
          Exclusive Early Access
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight animate-slide-up">
          Elevate Your Journey with a Coach<br />Who Truly "Gets It."
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          The premier global marketplace connecting driven Iranian professionals, executives, and entrepreneurs
          with world-class, vetted Iranian coaches.<br />
          <span className="text-blue-700 font-semibold">No cultural translation needed. Just real, high-impact growth.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={scrollToWaitlist}
            className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            👉 Find My Coach (Waitlist)
          </button>
          <button
            onClick={scrollToWaitlist}
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            👉 Apply as a Coach
          </button>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Success is Universal. <span className="text-amber-400">The Nuance is Cultural.</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm">
            Navigating the corporate ladder, scaling a business, or managing the complex dynamics of the immigrant
            experience requires more than just generic advice. It requires a partner who understands your background,
            the duality of your identity, and the specific ambitions of the Iranian diaspora.
          </p>
          <p className="text-lg md:text-xl text-blue-50 max-w-4xl mx-auto mt-6 leading-relaxed backdrop-blur-sm">
            <span className="text-amber-300 font-semibold">Coachify bridges the gap</span>, providing a secure, premium platform where cultural resonance meets
            professional excellence.
          </p>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
          For Professionals & Leaders:
        </h2>
        <p className="text-2xl md:text-3xl text-center text-blue-700 font-semibold mb-16">
          Coaching Without the Translation Matrix.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🥇</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vetted Excellence, Guaranteed</h3>
            <p className="text-slate-600 leading-relaxed">
              Stop scrolling through Instagram. Every coach on our platform is rigorously verified, holding ICF
              credentials or equivalent executive pedigree.
            </p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Deep Cultural Resonance</h3>
            <p className="text-slate-600 leading-relaxed">
              Work with someone who inherently understands the nuances of Iranian family dynamics, the immigrant
              hustle, and the specific challenges of leading in Western corporate environments.
            </p>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Frictionless Experience</h3>
            <p className="text-slate-600 leading-relaxed">
              Browse transparent pricing, filter by your specific needs (Career, Executive, Burnout, Life), book
              across time zones, and meet via secure video—all in one place.
            </p>
          </div>
        </div>
        <div className="text-center mt-16">
          <button
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            👉 Join the Client Waitlist
          </button>
        </div>
      </section>

      {/* For Coaches Section */}
      <section className="bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 to-amber-900 bg-clip-text text-transparent mb-4">
            For Elite Coaches:
          </h2>
          <p className="text-2xl md:text-3xl text-center text-amber-700 font-semibold mb-16">
            Focus on Impact. We Handle the Rest.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Access High-Intent Clients</h3>
              <p className="text-slate-600 leading-relaxed">
                Tap into a global network of highly educated, driven Iranian expatriates who are actively seeking
                premium coaching and are ready to invest in themselves.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚙️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Admin Headache</h3>
              <p className="text-slate-600 leading-relaxed">
                Say goodbye to timezone confusion and chasing invoices. Our platform features automated 2-way
                calendar syncing and secure, international escrow payments.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Elevate Your Brand</h3>
              <p className="text-slate-600 leading-relaxed">
                Stand out in a verified, professional marketplace that distinguishes certified experts from the
                noise of social media.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <button
              onClick={scrollToWaitlist}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              👉 Apply for Early Access as a Coach
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-6">
          Seamless. Secure. Transformative.
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
              1
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Discover & Match</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Use our smart filters to find the perfect coach based on specialty, budget, certification level,
              and language (English/Persian).
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
              2
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Book & Sync</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Schedule a session seamlessly. Our system automatically translates timezones and syncs with your calendar.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-8 shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
              3
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Meet & Grow</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Join your secure video session directly on the platform and start doing the real work.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6">
            Join the Movement.
          </h2>
          <p className="text-xl md:text-2xl text-center text-blue-100 mb-16 leading-relaxed">
            We are launching soon. Secure your spot on the waitlist to receive exclusive early access and founders' perks.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-blue-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-3">
                I am joining as a:
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="client"
                    checked={formData.userType === 'client'}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="mr-3 w-4 h-4 text-blue-600"
                  />
                  <span className="text-slate-700">Professional seeking a coach (Client)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="coach"
                    checked={formData.userType === 'coach'}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="mr-3 w-4 h-4 text-blue-600"
                  />
                  <span className="text-slate-700">Coach seeking to list my services (Coach)</span>
                </label>
              </div>
            </div>

            {formData.userType === 'coach' && (
              <div className="mb-6">
                <label className="block text-slate-700 font-semibold mb-2">
                  LinkedIn Profile URL <span className="text-slate-500 font-normal">(Optional but recommended for priority access)</span>
                </label>
                <input
                  type="url"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              👉 Get Early Access
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
