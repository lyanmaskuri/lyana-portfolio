import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-pink-100/70 transition-colors">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with Pink Dot Accent */}
        <Link 
          href="/" 
          className="text-lg font-black tracking-tight text-zinc-900 hover:opacity-80 transition-opacity flex items-center gap-1.5"
        >
          <span>lyana</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-zinc-600">
          <a
            href="#about"
            className="px-3 py-1.5 rounded-full hover:text-pink-600 hover:bg-pink-50/70 transition-all"
          >
            about
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-full hover:text-pink-600 hover:bg-pink-50/70 transition-all"
          >
            projects
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 rounded-full hover:text-pink-600 hover:bg-pink-50/70 transition-all"
          >
            experiences
          </a>
          <a
            href="#contact"
            className="ml-2 hidden sm:inline-flex px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-all hover:scale-105 active:scale-95 shadow-sm shadow-pink-200"
          >
            hire me 🌸
          </a>
        </div>
      </nav>
    </header>
  );
}
