export default function Hero() {
  const stats = [
    { label: "CGPA (UiTM)", value: "3.60" },
    { label: "Final Year Project", value: "97.6% Accuracy" },
    { label: "Specialized Training", value: "Apple SwiftUI" },
    { label: "Focus", value: "Web & Mobile" },
  ];

  return (
    <section className="pt-24 pb-20">
      {/* Hero Content */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Status Badge with Live Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-pink-700 border border-pink-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
          </span>
          <span>Available for Internship (March – June 2027)</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1]">
          hi there, I&apos;m{" "}
          <span className="text-pink-500 relative inline-block">
            Lyana
            <span className="absolute left-0 -bottom-1.5 w-full h-1 bg-pink-300/60 rounded-full" />
          </span>
        </h1>

        {/* Subtitle / Role */}
        <p className="text-lg sm:text-xl font-medium text-zinc-700 max-w-xl">
          Netcentric Computing student &amp; developer crafting responsive web apps, mobile solutions, and smart integrations.
        </p>

        {/* Brief Description */}
        <p className="text-sm sm:text-base text-zinc-600 max-w-lg leading-relaxed">
          Final-year student at Universiti Teknologi MARA (UiTM) passionate about modern web engineering, Flutter mobile apps, and machine learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium text-sm text-white bg-pink-500 hover:bg-pink-600 shadow-md shadow-pink-200/80 transition-all hover:scale-105 active:scale-95"
          >
            View Projects ↗
          </a>

          <a
            href="#experience"
            className="px-6 py-3 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            Experience &amp; Timeline
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            Say Hello
          </a>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all text-center"
          >
            <div className="text-2xl font-black text-zinc-900 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-pink-600 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
