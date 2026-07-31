'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function BusinessPlan() {
  // Data for charts
  const industryGrowthData = [
    { year: '2023', revenue: 2.85, coaches: 107000 },
    { year: '2024', revenue: 4.2, coaches: 115000 },
    { year: '2025', revenue: 5.34, coaches: 122974 },
    { year: '2026', revenue: 7.0, coaches: 135000 },
  ];

  const diasporaData = [
    { region: 'North America', value: 40, population: 2000000 },
    { region: 'Europe', value: 22, population: 1100000 },
    { region: 'Middle East', value: 24, population: 1200000 },
    { region: 'Australia & Others', value: 14, population: 700000 },
  ];

  const revenueProjectionData = [
    { month: 'M1-3', revenue: 0, sessions: 0 },
    { month: 'M4', revenue: 3, sessions: 100 },
    { month: 'M5', revenue: 5, sessions: 167 },
    { month: 'M6', revenue: 7, sessions: 233 },
    { month: 'M7', revenue: 9, sessions: 300 },
    { month: 'M8', revenue: 12, sessions: 400 },
    { month: 'M9', revenue: 16, sessions: 533 },
    { month: 'M10', revenue: 22, sessions: 733 },
    { month: 'M11', revenue: 28, sessions: 933 },
    { month: 'M12', revenue: 34, sessions: 1500 },
  ];

  const yearlyProjectionData = [
    { year: 'Year 1', revenue: 405, sessions: 18000, coaches: 100 },
    { year: 'Year 2', revenue: 1500, sessions: 60000, coaches: 250 },
    { year: 'Year 3', revenue: 4500, sessions: 144000, coaches: 500 },
  ];

  const competitorAnalysisData = [
    { aspect: 'Cultural Focus', coachify: 95, betterup: 20, leland: 30, instagram: 60 },
    { aspect: 'Vetting Quality', coachify: 90, betterup: 85, leland: 75, instagram: 20 },
    { aspect: 'Price Transparency', coachify: 95, betterup: 60, leland: 85, instagram: 15 },
    { aspect: 'B2C Experience', coachify: 90, betterup: 40, leland: 80, instagram: 70 },
    { aspect: 'Integration', coachify: 85, betterup: 95, leland: 70, instagram: 30 },
  ];

  const revenueStreamsData = [
    { name: 'Transaction Commission', value: 70, color: '#3b82f6' },
    { name: 'SaaS Subscription', value: 20, color: '#f59e0b' },
    { name: 'B2B Enterprise', value: 10, color: '#10b981' },
  ];

  const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899'];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Comprehensive Business Plan
        </h1>
        <p className="text-2xl text-slate-600 mb-4">
          Premium Coaching Marketplace for the Iranian Diaspora
        </p>
      </section>

      {/* Executive Summary */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Executive Summary</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Coachify is a premium, two-sided online marketplace designed exclusively to connect highly successful
              Iranian expatriates, professionals, and entrepreneurs with vetted, top-tier Iranian coaches globally.
              Our platform provides a secure, transparent, and professional environment where coaches can build
              comprehensive profiles, list their hourly rates and expertise, and clients can easily discover, evaluate,
              and book sessions.
            </p>
            <p>
              Our core competitive advantage is <span className="font-semibold">Cultural and Linguistic Resonance</span>.
              We address the unique psychological, professional, and business challenges faced by the successful Iranian
              diaspora—a highly educated and affluent demographic that remains underserved by mainstream Western coaching
              platforms. While generalist platforms focus on broad corporate contracts or generic career advice, Coachify
              provides a curated, high-trust environment tailored to the specific intersection of immigrant ambition,
              cultural dualities, and professional scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">2. Problem & Solution</h2>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300 rounded-full -ml-12 -mb-12 opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
                    👥
                  </div>
                  <h4 className="font-bold text-2xl text-slate-900">For the Client</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Iranian immigrants in North America, Europe, and Australia who have achieved initial stability
                  (e.g., tech professionals, healthcare workers, small business owners) are increasingly seeking
                  executive, career, and life coaching. However, they face a major barrier: cultural nuance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Western coaches lack cultural understanding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Fragmented discovery process (Instagram/LinkedIn)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Hidden pricing behind "discovery calls"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">No verified reviews or credentials</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-md border border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 rounded-full -ml-12 -mb-12 opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white text-2xl">
                    🎓
                  </div>
                  <h4 className="font-bold text-2xl text-slate-900">For the Coach</h4>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  High-quality, certified Iranian coaches struggle with client acquisition outside their immediate network.
                  They spend disproportionate amounts of time on administrative overhead and lack a centralized platform
                  that elevates their professional standing.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Difficult client acquisition beyond network</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Time-consuming timezone & scheduling management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">Complex international payment processing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-slate-700 text-sm">No differentiation from uncertified influencers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution: Coachify</h3>
          <p className="text-slate-700 mb-6">A centralized, automated web platform offering:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">1. Smart Matchmaking & Discovery</h4>
                  <p className="text-slate-700">
                    Advanced filters based on Specialty (Executive, Burnout, Career Pivot, Immigration Trauma), Price,
                    Language (Persian/English), and ICF Certification level (ACC, PCC, MCC).
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">2. Trust & Verification (The Moat)</h4>
                  <p className="text-slate-700">
                    Strict vetting process for coaches requiring verified ICF credentials or equivalent formal training.
                    Features include verified client reviews (only allowed after a paid session) and standardized
                    introductory video profiles.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">3. Frictionless Operations (All-in-One Workflow)</h4>
                  <p className="text-slate-700">
                    Integrated timezone management, automated 2-way calendar syncing (Google/Outlook), and seamless
                    international payments (Stripe Connect) that hold funds in escrow and handle complex cross-border
                    payouts, allowing coaches to focus purely on coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">3. Market Research & Sizing (2025/2026 Data)</h2>
          <p className="text-lg text-slate-700 mb-8">
            The global coaching industry is experiencing explosive growth, transitioning from a luxury for top
            executives to a mainstream professional necessity.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Macro Industry Trends</h3>
          <ul className="space-y-3 mb-8 text-slate-700">
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span><span className="font-semibold">Global Market Size:</span> According to the 2025 ICF Global
                Coaching Study, the global coaching industry generated $5.34 billion in revenue, nearly doubling
                since 2023.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span><span className="font-semibold">Active Practitioners:</span> There are approximately 122,974
                professional coaches globally (a 15% increase from 2023).</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span><span className="font-semibold">Segment Growth:</span> The US market alone is valued at $2.6 billion.
                Executive and leadership coaching represents the largest and most lucrative segment (approx. 30% of the market),
                followed by health/wellness and life coaching.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">•</span>
              <span><span className="font-semibold">Shift Toward Niche:</span> As highlighted in 2026 industry reports,
                the market is saturated with "generalist" coaches. The highest growth and willingness to pay are found in
                specialized niches (e.g., "Burnout Coaching," specific demographic targeting) rather than broad life coaching.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Sizing the Niche (The Iranian Diaspora)</h3>
          <p className="text-slate-700 mb-6">
            The Iranian diaspora represents a highly attractive, high-net-worth target market.
          </p>

          {/* Market Funnel Visualization */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* TAM */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-t-lg text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">TAM</h4>
                      <p className="text-sm opacity-90">Total Addressable Market</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold">4-5M</p>
                      <p className="text-sm opacity-90">people</p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 opacity-95">
                    Global Iranian diaspora, heavily concentrated in North America (nearly 2 million) and Europe (over 1.1 million)
                  </p>
                </div>

                {/* SAM */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 mx-8 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">SAM</h4>
                      <p className="text-sm opacity-90">Serviceable Available Market</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold">1-1.5M</p>
                      <p className="text-sm opacity-90">people</p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 opacity-95">
                    Highly educated professionals, tech workers, medical professionals, and business owners aged 28-55 with disposable income
                  </p>
                </div>

                {/* SOM */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-8 mx-16 rounded-b-lg text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">SOM</h4>
                      <p className="text-sm opacity-90">Serviceable Obtainable Market</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold">10-30K</p>
                      <p className="text-sm opacity-90">users</p>
                    </div>
                  </div>
                  <p className="text-sm mt-4 opacity-95">
                    Conservative 1-2% penetration of SAM in first 3 years yields 10,000 to 30,000 active, paying users
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Growth Chart */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Global Coaching Industry Growth</h4>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={industryGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#3b82f6" label={{ value: 'Revenue ($B)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" label={{ value: 'Coaches', angle: 90, position: 'insideRight' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                  formatter={(value, name) => [
                    name === 'revenue' ? `$${value ?? 0}B` : (value ?? 0).toLocaleString(),
                    name === 'revenue' ? 'Market Size' : 'Total Coaches'
                  ]}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" name="Market Size ($B)" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="right" dataKey="coaches" fill="#10b981" name="Active Coaches" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-600 mt-4">Industry nearly doubling every 2 years with growing coach base</p>
          </div>

          {/* Diaspora Distribution */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Iranian Diaspora Distribution</h4>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={diasporaData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry: any) => {
                        // Show short labels on mobile
                        if (typeof window !== 'undefined' && window.innerWidth < 768) {
                          return `${entry.value}%`;
                        }
                        return `${entry.region}: ${entry.value}%`;
                      }}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {diasporaData.map((entry, index) => (
                        <Cell key={`diaspora-cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                      formatter={(value, _name, props: any) => [
                        `${props.payload.population.toLocaleString()} people (${value ?? 0}%)`,
                        props.payload.region
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                {diasporaData.map((item, index) => (
                  <div key={item.region}>
                    <div className="flex justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 flex-shrink-0 rounded" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="text-slate-700 font-semibold text-sm md:text-base">{item.region}</span>
                      </div>
                      <span className="text-slate-900 font-bold text-sm md:text-base">~{(item.population / 1000000).toFixed(1)}M ({item.value}%)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.value}%`, backgroundColor: COLORS[index] }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full -mr-32 -mt-32 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800 rounded-full -ml-24 -mb-24 opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h4 className="text-2xl font-bold">Target Persona ("The Client")</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur p-5 rounded-lg">
                  <div className="text-blue-300 text-sm font-semibold mb-2">PROFILE</div>
                  <p className="text-white">38-year-old Iranian Senior Product Manager in Silicon Valley, or a Dental Clinic Owner in Toronto</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-5 rounded-lg">
                  <div className="text-blue-300 text-sm font-semibold mb-2">PAIN POINTS</div>
                  <p className="text-white">Hitting a corporate "glass ceiling," navigating cross-cultural management, experiencing immigrant burnout/imposter syndrome</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-5 rounded-lg">
                  <div className="text-blue-300 text-sm font-semibold mb-2">BUDGET</div>
                  <p className="text-white">Willing to pay $150 - $400+ per hour for high-impact coaching with someone who "gets it"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">4. Comprehensive Competitor Analysis</h2>
          <p className="text-lg text-slate-700 mb-8">
            The market is fragmented into heavily funded global generalists and disorganized local alternatives.
            Coachify exploits the "missing middle."
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">A. Global Platforms (Indirect Competitors)</h3>

          <div className="space-y-6 mb-12">
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. BetterUp / CoachHub</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Strengths:</p>
                  <p className="text-slate-700 text-sm">
                    Massive funding (BetterUp valued at $4.7B; CoachHub heavily funded), deep AI integration
                    (e.g., CoachHub's AIMY assistant), enterprise B2B dominance.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Weaknesses:</p>
                  <p className="text-slate-700 text-sm">
                    They are primarily B2B (sold to HR departments). They completely lack cultural niching.
                    An Iranian professional cannot easily filter for a Persian-speaking coach who understands
                    the diaspora experience. They are broad and corporate.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. Leland</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Strengths:</p>
                  <p className="text-slate-700 text-sm">
                    Excellent multi-sided marketplace model focused on career acceleration, MBA admissions,
                    and specific tech roles. Good use of AI for matching.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Weaknesses:</p>
                  <p className="text-slate-700 text-sm">
                    Highly focused on early/mid-career transitions (admissions, getting a PM job). It does not
                    cater to executive coaching, life coaching, or the psychological nuances of specific cultural
                    demographics.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">3. Coach.me / Noomii</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Strengths:</p>
                  <p className="text-slate-700 text-sm">
                    B2C focus, established marketplaces.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Weaknesses:</p>
                  <p className="text-slate-700 text-sm">
                    "Sea of coaches" problem. Users are overwhelmed by choices, vetting is inconsistent, and
                    finding an Iranian coach requires manual, tedious searching. They suffer from generic branding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">B. Local / Alternative Solutions (Direct Competitors)</h3>

          <div className="space-y-6 mb-12">
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. LinkedIn & Instagram Influencers (The Status Quo)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Strengths:</p>
                  <p className="text-slate-700 text-sm">
                    Strong personal branding; direct communication.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Weaknesses:</p>
                  <p className="text-slate-700 text-sm">
                    <span className="font-semibold">For Clients:</span> Zero price transparency. High risk of
                    encountering uncertified "pseudo-coaches" (the market is flooded with unqualified life coaches).
                    No central place to compare reviews.<br />
                    <span className="font-semibold">For Coaches:</span> Nightmare to manage administration. They must
                    stitch together Calendly, PayPal, and Zoom themselves.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. Iranian Mentoring Platforms</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Strengths:</p>
                  <p className="text-slate-700 text-sm">
                    Familiarity with the Iranian market and language.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Weaknesses:</p>
                  <p className="text-slate-700 text-sm">
                    Focused entirely on free mentorship (junior folks asking for career advice) rather than premium,
                    paid professional coaching (executives paying for psychological/business breakthroughs).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Our Unique Selling Proposition (USP)</h3>
            <p className="text-lg mb-6">
              Coachify is the only platform combining strict professional vetting (ICF credentials), a premium
              SaaS workflow (handling all admin), and a laser focus on the high-net-worth Iranian diaspora. We are
              replacing the chaotic Instagram search with a high-trust, frictionless marketplace.
            </p>

            {/* Competitive Radar Chart */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mt-6">
              <h4 className="text-xl font-bold mb-4 text-center">Competitive Advantage Matrix</h4>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={competitorAnalysisData}>
                  <PolarGrid stroke="#ffffff40" />
                  <PolarAngleAxis dataKey="aspect" stroke="#ffffff" tick={{ fill: '#ffffff' }} />
                  <PolarRadiusAxis stroke="#ffffff40" />
                  <Radar name="Coachify" dataKey="coachify" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Radar name="BetterUp" dataKey="betterup" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                  <Radar name="Leland" dataKey="leland" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                  <Radar name="Instagram" dataKey="instagram" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
                  <Legend wrapperStyle={{ color: '#ffffff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Business & Revenue Model</h2>
          <p className="text-lg text-slate-700 mb-8">
            Coachify operates as a SaaS-enabled Marketplace with multiple revenue streams designed to scale:
          </p>

          {/* Revenue Mix Visualization */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Revenue Stream Distribution (Year 2+)</h4>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="w-full max-w-md">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueStreamsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry: any) => {
                        // Show short labels on mobile
                        if (typeof window !== 'undefined' && window.innerWidth < 768) {
                          return `${entry.value}%`;
                        }
                        return `${entry.name}: ${entry.value}%`;
                      }}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueStreamsData.map((entry, index) => (
                        <Cell key={`revenue-cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4 w-full">
                {revenueStreamsData.map((stream) => (
                  <div key={stream.name} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0 rounded" style={{ backgroundColor: stream.color }}></div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm md:text-base">{stream.name}</p>
                      <p className="text-xs md:text-sm text-slate-600">{stream.value}% of total revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. Transaction Commission (Primary Engine)</h4>
              <p className="text-slate-700 mb-3">
                Take a <span className="font-bold">15% to 20%</span> take-rate (commission) on every session booked
                and paid through the platform.
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">Why it works:</span> Coaches gladly pay this because Coachify handles
                client acquisition (marketing), scheduling, video infrastructure, and international payment processing.
                It replaces their need for multiple software subscriptions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. SaaS Subscription for Coaches (Freemium Model - Introduced in Year 2)</h4>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border border-slate-200 p-4 rounded">
                  <p className="font-bold text-slate-900 mb-2">Basic Tier</p>
                  <p className="text-slate-700 text-sm">Free to list, higher commission (20%)</p>
                </div>
                <div className="border border-slate-200 p-4 rounded bg-amber-50">
                  <p className="font-bold text-slate-900 mb-2">Pro Tier ($39/month)</p>
                  <p className="text-slate-700 text-sm">
                    Lower commission (10%), featured placement in search results, advanced CRM tools (AI-assisted
                    session notes, automated follow-ups, resource sharing), and custom branding for their profile.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-slate-900 mb-3">3. B2B Enterprise Packages (Phase 3)</h4>
              <p className="text-slate-700">
                Selling block coaching packages to successful Iranian-founded companies (e.g., tech startups in California,
                real estate firms in Canada) as a targeted employee wellness/leadership benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Strategy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">6. Go-To-Market (GTM) Strategy & Execution</h2>
          <p className="text-lg text-slate-700 mb-8">
            Solving the "Chicken and Egg" marketplace problem requires building high-quality, verified supply before
            generating demand.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Bootstrapping the Supply (Months 1-3)</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Tactic:</span> Direct, highly personalized outbound outreach
                    on LinkedIn and ICF member directories.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Target:</span> Identify 100 top-tier Iranian coaches globally
                    who hold verified ICF (ACC, PCC, MCC) credentials or equivalent executive experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">The Pitch/Incentive:</span> Offer them "Founding Member" status.
                    This includes 0% commission for their first 6 months, a "Founding" badge on their profile, and a free,
                    professionally edited introduction video (they record raw, we edit).</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Goal:</span> Onboard 30-50 highly credible, vetted coaches before
                    launching to users. This guarantees that the first users see a premium, populated platform.</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: Generating Demand (Months 4-12)</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Content Marketing & SEO:</span> Launch a high-quality Podcast
                    and Blog focusing on "The Immigrant Executive," discussing topics like overcoming cultural barriers
                    in Western corporate environments, managing dual identities, and burnout. Feature our Founding Coaches
                    as guests.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Targeted Paid Ads (LinkedIn/Meta):</span> Highly targeted campaigns
                    aimed at users with Iranian heritage (e.g., filtering by Persian language skills, graduated from
                    Sharif/Tehran University, members of Iranian professional groups) currently working in Director/VP/Senior
                    roles in the US, Canada, and EU.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span><span className="font-semibold">Strategic Partnerships:</span> Partner with existing Iranian
                    professional networks (e.g., Shabeh Jomeh, Iranian American Bar Association, Iranian medical associations)
                    to offer exclusive webinars hosted by our platform's coaches, driving immediate sign-ups.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Plan */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">7. Operational & Technical Plan (The MVP)</h2>
          <p className="text-lg text-slate-700 mb-8">
            To justify a premium take-rate, the platform must feel secure, professional, and flawless.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Features (MVP Tech Stack)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">🔐 Vetting & Onboarding</h4>
              <p className="text-slate-700 text-sm">
                Automated portal for coaches to upload ICF credentials and identity documents (KYC). Manual approval
                required by admins initially.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">🔍 Search & Discovery</h4>
              <p className="text-slate-700 text-sm">
                Robust filtering (Specialty, Price, ICF Level, Location).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">📅 Smart Scheduling Engine</h4>
              <p className="text-slate-700 text-sm">
                2-way sync with Google Calendar/Outlook (via APIs like Cronofy or Nylas). Crucial Feature: Seamless,
                automatic timezone conversion between coach and client to eliminate booking errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">🎥 Integrated Video</h4>
              <p className="text-slate-700 text-sm">
                In-browser video calls (using WebRTC, Daily.co API, or Zoom API integration) so users never have to
                leave the platform.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">💳 Fintech Integration (Stripe Connect)</h4>
              <p className="text-slate-700 text-sm">
                The lifeblood of the marketplace. The client pays the platform, Stripe holds the money in escrow until
                the session is completed, takes the platform's cut, and automatically routes the remainder to the coach's
                bank account, handling all currency conversions natively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">⭐ Verified Review System</h4>
              <p className="text-slate-700 text-sm">
                Only clients who have completed and paid for a session via the platform can leave a review, ensuring
                100% authenticity and building trust (similar to Leland's review system).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">8. Financial Projections (High-Level Year 1)</h2>

          {/* Timeline Visual */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm mb-8">
            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-green-500"></div>

              <div className="space-y-6 md:space-y-8 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg z-10">
                    M1-3
                  </div>
                  <div className="ml-4 md:ml-8 flex-1">
                    <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-2">Development & Supply</h4>
                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                      <p className="text-slate-700 mb-2 text-sm md:text-base">Build MVP (approx. $20,000 - $40,000 if outsourced, or sweat equity if in-house)</p>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                        <span className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded">🎯 50 Founding Coaches</span>
                        <span className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded">💰 $0 Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg z-10">
                    M4-6
                  </div>
                  <div className="ml-4 md:ml-8 flex-1">
                    <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-2">Soft Launch</h4>
                    <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
                      <p className="text-slate-700 mb-2 text-sm md:text-base">Acquire first 500 active users</p>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                        <span className="bg-blue-700 text-white px-2 md:px-3 py-1 rounded">👥 500 Users</span>
                        <span className="bg-blue-700 text-white px-2 md:px-3 py-1 rounded">📅 ~300 Sessions/mo</span>
                        <span className="bg-blue-700 text-white px-2 md:px-3 py-1 rounded">💰 $6.75K MRR</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg z-10">
                    M12
                  </div>
                  <div className="ml-4 md:ml-8 flex-1">
                    <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-2">Year 1 Goal (Run Rate)</h4>
                    <div className="bg-green-50 p-3 md:p-4 rounded-lg">
                      <p className="text-slate-700 mb-3 text-sm md:text-base">1,500 coaching sessions booked per month</p>
                      <div className="bg-white p-3 md:p-4 rounded border-2 border-green-500 mb-3">
                        <p className="font-semibold text-slate-900 mb-2 text-sm md:text-base">Revenue Calculation:</p>
                        <p className="text-slate-700 text-xs md:text-sm mb-1">1,500 sessions × $150 average × 15% commission</p>
                        <p className="text-2xl md:text-3xl font-bold text-green-600 mt-2">$33,750 MRR</p>
                        <p className="text-xl md:text-2xl font-bold text-blue-700 mt-1">$405K ARR</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                        <span className="bg-green-600 text-white px-2 md:px-3 py-1 rounded">👥 2,000+ Users</span>
                        <span className="bg-green-600 text-white px-2 md:px-3 py-1 rounded">🎓 100+ Coaches</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Growth Chart */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Monthly Revenue Projection (Year 1)</h4>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={revenueProjectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis yAxisId="left" stroke="#3b82f6" label={{ value: 'Revenue ($K)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" label={{ value: 'Sessions', angle: 90, position: 'insideRight' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                  formatter={(value, name) => [
                    name === 'revenue' ? `$${value ?? 0}K` : (value ?? 0).toLocaleString(),
                    name === 'revenue' ? 'Monthly Revenue' : 'Total Sessions'
                  ]}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} name="Revenue ($K)" dot={{ fill: '#3b82f6', r: 5 }} />
                <Line yAxisId="right" type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={3} name="Sessions" dot={{ fill: '#10b981', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-slate-600 mt-4">Exponential growth trajectory from launch to Year 1 end</p>
          </div>

          {/* 3-Year Growth Visualization */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">3-Year Growth Trajectory</h4>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={yearlyProjectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" label={{ value: 'Revenue ($K)', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                  formatter={(value, name) => {
                    const val = value ?? 0;
                    if (name === 'revenue') return [`$${val}K`, 'Annual Revenue'];
                    if (name === 'sessions') return [val.toLocaleString(), 'Total Sessions'];
                    return [val, 'Active Coaches'];
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($K)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="coaches" fill="#10b981" name="Coaches" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Year 1-3 Projection */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white shadow-lg">
              <p className="text-sm opacity-90 mb-2">Year 1</p>
              <p className="text-4xl font-bold mb-1">$405K</p>
              <p className="text-sm opacity-90">Annual Run Rate</p>
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-xs">1,500 sessions/mo</p>
                <p className="text-xs">100+ coaches</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg text-white shadow-lg">
              <p className="text-sm opacity-90 mb-2">Year 2 (Projected)</p>
              <p className="text-4xl font-bold mb-1">$1.5M</p>
              <p className="text-sm opacity-90">With SaaS Tier</p>
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-xs">5,000 sessions/mo</p>
                <p className="text-xs">250+ coaches</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-white shadow-lg">
              <p className="text-sm opacity-90 mb-2">Year 3 (Target)</p>
              <p className="text-4xl font-bold mb-1">$4.5M</p>
              <p className="text-sm opacity-90">B2B Expansion</p>
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-xs">12,000 sessions/mo</p>
                <p className="text-xs">500+ coaches</p>
              </div>
            </div>
          </div>

          {/* Funding Strategy */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-l-4 border-amber-500">
            <h4 className="font-bold text-slate-900 text-xl mb-4">💰 Funding Strategy</h4>
            <p className="text-slate-700 mb-4">
              Bootstrapped or Pre-Seed Angel round (targeting successful Iranian-American angels) to fund the MVP
              and initial marketing. Reach $400k ARR to become attractive for Seed stage venture capital funding
              for global expansion.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-semibold text-amber-700 mb-2">Pre-Seed Target</p>
                <p className="text-2xl font-bold text-slate-900">$150K - $300K</p>
                <p className="text-sm text-slate-600 mt-1">MVP + 12mo runway</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <p className="font-semibold text-amber-700 mb-2">Seed Round Target</p>
                <p className="text-2xl font-bold text-slate-900">$1M - $2M</p>
                <p className="text-sm text-slate-600 mt-1">At $400K ARR milestone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">9. Risk Management</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. Disintermediation (Platform Leakage)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">Risk:</p>
                  <p className="text-slate-700 text-sm">
                    Users meet on Coachify, do one session, and take subsequent payments offline to avoid the 15% fee.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Mitigation:</p>
                  <p className="text-slate-700 text-sm">
                    Offer immense workflow value to stay on-platform (integrated AI notes, lower fees for repeat bookings
                    with the same client, automated invoicing). Implement strict Terms of Service and ban users/coaches
                    who violate them.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. Supply Quality Degradation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">Risk:</p>
                  <p className="text-slate-700 text-sm">
                    Allowing uncertified "life coaches" onto the platform, ruining the premium brand trust.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Mitigation:</p>
                  <p className="text-slate-700 text-sm">
                    Maintain strict ICF (or equivalent) credential requirements. Do not compromise on the vetting process
                    for the sake of rapid growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-3">3. Regulatory/Sanctions (Iran)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-red-700 mb-2">Risk:</p>
                  <p className="text-slate-700 text-sm">
                    Financial interactions with users inside Iran due to international sanctions.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Mitigation:</p>
                  <p className="text-slate-700 text-sm">
                    Strictly limit the initial payment gateway (Stripe) to international credit cards. The platform
                    explicitly targets the Diaspora. If Iranians inside Iran wish to use it, they must utilize international
                    payment methods (e.g., via relatives abroad or crypto, if implemented later in a compliant manner).
                    Legal counsel regarding OFAC compliance is mandatory before launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
