import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with Pink Dot Accent */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-zinc-900 hover:opacity-80 transition-opacity"
        >
          lyana<span className="text-pink-500">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <a href="#about" className="hover:text-pink-600 transition-colors">
            about
          </a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">
            projects
          </a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">
            contact
          </a>
        </div>
      </nav>
    </header>
  );
}