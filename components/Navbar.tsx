import Link from "next/link";

export default function Navbar(){
    return(
 <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          Lyana<span className="text-blue-600 dark:text-blue-400">.</span>
        </Link>
        {/* Navigation Anchor Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
    );
}