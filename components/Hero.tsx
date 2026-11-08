export default function Hero() {
  const stats = [
    { label: "CGPA (UiTM)", value: "3.60" },
    { label: "Final Year Project", value: "97.6% Accuracy" },
    { label: "Specialized Training", value: "Apple SwiftUI" },
    { label: "Focus", value: "Web & Mobile" },
  ];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Ambient background soft pink glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-rose-100/50 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Heading, Bio, CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
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
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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

        {/* Right Column: Aesthetic Developer Profile Card */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-sm">
          <div className="relative group">
            {/* Soft pink card halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-300" />

            <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-pink-200/80 p-7 shadow-xl shadow-pink-100/40 flex flex-col gap-6">
              {/* Card Header with Avatar / Initials */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 border border-pink-200 text-pink-600 font-bold text-xl flex items-center justify-center shadow-inner">
                  PL
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900">
                    Puteri Nur Lyana
                  </h3>
                  <p className="text-xs font-medium text-pink-600">
                    UiTM Shah Alam • CGPA 3.60
                  </p>
                </div>
              </div>

              {/* Quick Info Items */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 flex items-center justify-between">
                  <span className="text-zinc-600 font-medium">Major</span>
                  <span className="font-semibold text-zinc-900">Netcentric Computing</span>
                </div>
                <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 flex items-center justify-between">
                  <span className="text-zinc-600 font-medium">Current Role</span>
                  <span className="font-semibold text-zinc-900">Part-Time Web Dev @ SMRI</span>
                </div>
                <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100 flex items-center justify-between">
                  <span className="text-zinc-600 font-medium">Leadership</span>
                  <span className="font-semibold text-zinc-900">Netcom Club Treasurer</span>
                </div>
              </div>

              {/* Core Skill Chips */}
              <div className="pt-2 border-t border-zinc-100">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-zinc-600 mb-2.5">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Flutter", "React", "Next.js", "Python", "SwiftUI", "PHP"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-50 text-zinc-700 border border-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
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
