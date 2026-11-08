export default function Projects() {
  const projects = [
    {
      title: "ScanPhish: Phishing Detection Mobile Scanner",
      badge: "Final Year Project",
      icon: "🛡️",
      accent: "from-pink-500 to-rose-400",
      description:
        "A Flutter mobile application that detects phishing threats by scanning text and URLs extracted from screen content and images using Google ML Kit OCR and an XGBoost machine learning model (achieved 97.6% accuracy).",
      tags: ["Flutter", "Python Flask", "XGBoost", "Google ML Kit", "Supabase"],
      githubUrl: "https://github.com/lyanmaskuri",
    },
    {
      title: "VroomBuddy: Campus Ride Booking",
      badge: "Full-Stack Web App",
      icon: "🚗",
      accent: "from-rose-400 to-pink-400",
      description:
        "A full-stack driver booking web application developed for UiTM students featuring responsive booking forms, client validation, and a relational MySQL database.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/lyanmaskuri",
    },
    {
      title: "UiTMSA Directory: Campus Navigation App",
      badge: "Android Application",
      icon: "📍",
      accent: "from-pink-400 to-fuchsia-400",
      description:
        "A native Android application helping students locate facilities and places across the UiTM Shah Alam campus, integrated with Google Maps API and Firebase storage.",
      tags: ["Java", "Android Studio", "Google Maps API", "Firebase"],
      githubUrl: "https://github.com/lyanmaskuri",
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-zinc-100">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-pink-600">
            <span>💼</span>
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            What I&apos;ve built & developed.
          </h2>
          <p className="text-zinc-600 max-w-xl text-base sm:text-lg">
            A showcase of my academic, mobile, and full-stack projects across Flutter, Android, Web, and Machine Learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white border border-zinc-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Header with Project Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-lg shadow-sm">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-50/80 text-pink-700 border border-pink-200/60">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-pink-600 transition-colors pt-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-50 text-zinc-700 border border-zinc-200/80 group-hover:border-pink-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-4 py-2.5 rounded-full text-xs font-medium text-zinc-800 bg-white border border-zinc-200 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>View Details / Code</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
