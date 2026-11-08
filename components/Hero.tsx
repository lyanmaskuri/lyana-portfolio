export default function Hero() {
  return (
    <section className="pt-24 pb-16 flex flex-col items-center text-center sm:items-start sm:text-left gap-6">
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for new opportunities
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-2xl">
        Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Lyana</span> — Full-Stack Developer
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
        I design and build fast, responsive web applications with modern tech stacks like Next.js, React, and TypeScript.
      </p>

      {/* Call to Action (CTA) Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
        {/* Scroll to Projects button */}
        <a
          href="#projects"
          className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-sm transition-all text-center"
        >
          View My Work
        </a>

        {/* Contact Me button */}
        <a
          href="#contact"
          className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all text-center"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}