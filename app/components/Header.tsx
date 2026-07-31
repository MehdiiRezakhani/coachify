import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
            Coachify
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/business-plan" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              BP
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
