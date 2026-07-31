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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">
          Exclusive Early Access
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Elevate Your Journey with a Coach<br />Who Truly "Gets It."
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          The premier global marketplace connecting driven Iranian professionals, executives, and entrepreneurs
          with world-class, vetted Iranian coaches.<br />
          No cultural translation needed. Just real, high-impact growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            👉 Find My Coach (Waitlist)
          </button>
          <button
            onClick={scrollToWaitlist}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            👉 Apply as a Coach
          </button>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Success is Universal. The Nuance is Cultural.
          </h2>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Navigating the corporate ladder, scaling a business, or managing the complex dynamics of the immigrant
            experience requires more than just generic advice. It requires a partner who understands your background,
            the duality of your identity, and the specific ambitions of the Iranian diaspora.
          </p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto mt-6 leading-relaxed">
            Coachify bridges the gap, providing a secure, premium platform where cultural resonance meets
            professional excellence.
          </p>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          For Professionals & Leaders:
        </h2>
        <p className="text-2xl text-center text-slate-700 mb-12">
          Coaching Without the Translation Matrix.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🥇</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vetted Excellence, Guaranteed</h3>
            <p className="text-slate-600">
              Stop scrolling through Instagram. Every coach on our platform is rigorously verified, holding ICF
              credentials or equivalent executive pedigree.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Deep Cultural Resonance</h3>
            <p className="text-slate-600">
              Work with someone who inherently understands the nuances of Iranian family dynamics, the immigrant
              hustle, and the specific challenges of leading in Western corporate environments.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Frictionless Experience</h3>
            <p className="text-slate-600">
              Browse transparent pricing, filter by your specific needs (Career, Executive, Burnout, Life), book
              across time zones, and meet via secure video—all in one place.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={scrollToWaitlist}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            👉 Join the Client Waitlist
          </button>
        </div>
      </section>

      {/* For Coaches Section */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            For Elite Coaches:
          </h2>
          <p className="text-2xl text-center text-slate-700 mb-12">
            Focus on Impact. We Handle the Rest.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Access High-Intent Clients</h3>
              <p className="text-slate-600">
                Tap into a global network of highly educated, driven Iranian expatriates who are actively seeking
                premium coaching and are ready to invest in themselves.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Admin Headache</h3>
              <p className="text-slate-600">
                Say goodbye to timezone confusion and chasing invoices. Our platform features automated 2-way
                calendar syncing and secure, international escrow payments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Elevate Your Brand</h3>
              <p className="text-slate-600">
                Stand out in a verified, professional marketplace that distinguishes certified experts from the
                noise of social media.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={scrollToWaitlist}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              👉 Apply for Early Access as a Coach
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Seamless. Secure. Transformative.
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Discover & Match</h3>
            <p className="text-slate-600">
              Use our smart filters to find the perfect coach based on specialty, budget, certification level,
              and language (English/Persian).
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Book & Sync</h3>
            <p className="text-slate-600">
              Schedule a session seamlessly. Our system automatically translates timezones and syncs with your calendar.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Meet & Grow</h3>
            <p className="text-slate-600">
              Join your secure video session directly on the platform and start doing the real work.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Join the Movement.
          </h2>
          <p className="text-xl text-center text-blue-100 mb-12">
            We are launching soon. Secure your spot on the waitlist to receive exclusive early access and founders' perks.
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
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
