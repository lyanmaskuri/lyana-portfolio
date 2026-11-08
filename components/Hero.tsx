export default function Hero() {
  return (
    <section className="pt-24 pb-20 flex flex-col items-center md:items-start text-center md:text-left gap-6">
      {/* Subtle Pink Status Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200">
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
        <span>Open for new projects &amp; learning</span>
      </div>

      {/* Main Heading: Deep Charcoal with Pink Highlight */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
        hi there, I&apos;m{" "}
        <span className="text-pink-500">
          Lyana
        </span>
      </h1>

      {/* Tagline: Clear, high-contrast dark gray text on white background */}
      <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
        A student that loves to learn new technologies.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
  {/* View Projects */}
  <a
    href="#projects"
    className="px-6 py-3 rounded-full font-medium text-sm text-white bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-200 transition-all hover:scale-105 active:scale-95"
  >
    view projects
  </a>

  {/* Say Hello (White with matching hover & click animation) */}
  <a
    href="#contact"
    className="px-6 py-3 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all hover:scale-105 active:scale-95"
  >
    say hello
  </a>
</div>
    </section>
  );
}