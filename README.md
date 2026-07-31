# Coachify

A two-sided marketplace connecting successful Iranian diaspora professionals with vetted, top-tier Iranian coaches globally.

## About Coachify

Coachify is a specialized coaching marketplace that addresses the unique psychological, professional, and business challenges faced by the Iranian diaspora. The platform provides:

- **Cultural & Linguistic Resonance**: Connect with coaches who inherently understand Iranian family dynamics, the immigrant experience, and navigating Western corporate environments
- **Verified Excellence**: All coaches are rigorously vetted with ICF (International Coaching Federation) credentials or equivalent executive experience
- **Frictionless Operations**: Integrated timezone management, automated calendar syncing, and seamless international payments

## Tech Stack

- **Framework**: Next.js 16.2.12 (React 19)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts 3.10.1
- **Code Quality**: ESLint with Next.js config

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd coachify-landing

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
coachify-landing/
├── app/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── business-plan/     # Business plan viewer page
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── package.json
└── tsconfig.json
```

## Features

### Landing Page
- Hero section with early access CTA
- Problem/solution value proposition
- Separate sections for clients and coaches
- Simple 3-step process explanation
- Waitlist form for early access

### Business Plan Viewer
- Interactive business plan visualization
- Market research and financial projections
- Competitor analysis
- Go-to-market strategy

## Target Audience

### For Clients
Iranian professionals, executives, and entrepreneurs aged 28-55 seeking:
- Executive coaching
- Career advancement guidance
- Burnout management
- Immigration experience navigation
- Business scaling support

### For Coaches
ICF-certified Iranian coaches looking for:
- Access to high-intent clients
- Automated admin & scheduling
- Secure international payments
- Professional brand elevation

## Key Differentiators

1. **Cultural Niche**: Only platform focused exclusively on Iranian diaspora coaching needs
2. **Verified Quality**: Strict ICF credential requirements eliminate uncertified "coaches"
3. **All-in-One Platform**: Replaces fragmented tools (Calendly, PayPal, Zoom) with integrated workflow
4. **Transparent Pricing**: Clear hourly rates vs. hidden "discovery call" pricing on social media

## Business Model

- **Transaction Commission**: 15-20% take-rate on platform bookings
- **SaaS Subscriptions**: Freemium model for coaches (launching Year 2)
- **B2B Enterprise**: Corporate coaching packages for Iranian-founded companies

## Market Opportunity

- **Global Coaching Industry**: $5.34B (2025 ICF Global Coaching Study)
- **Iranian Diaspora**: 4-5M globally with high educational attainment and household income
- **Target Market**: 1-1.5M professionals willing to pay $150-400+/hour for culturally resonant coaching

---

Built with ❤️ for the global Iranian diaspora
