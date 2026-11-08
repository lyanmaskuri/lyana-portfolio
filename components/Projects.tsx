export default function Projects() {
  const projects = [
    {
      title: "ScanPhish: Phishing Detection Mobile Scanner",
      badge: "Final Year Project",
      description:
        "A Flutter mobile application that detects phishing threats by scanning text and URLs extracted from screen content and images using Google ML Kit OCR and an XGBoost machine learning model (achieved 97.6% accuracy).",
      tags: ["Flutter", "Python Flask", "XGBoost", "Google ML Kit", "Supabase"],
      githubUrl: "https://github.com/lyanmaskuri",
    },
    {
      title: "VroomBuddy: Campus Ride Booking",
      badge: "Web Application",
      description:
        "A full-stack driver booking web application developed for UiTM students featuring responsive booking forms, client validation, and a relational MySQL database.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/lyanmaskuri",
    },
    {
      title: "UiTMSA Directory: Campus Navigation App",
      badge: "Android Application",
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
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            What I&apos;ve built &amp; developed.
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
              className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-zinc-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Badge */}
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200/60">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-pink-600 transition-colors">
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
                      className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-50 text-zinc-700 border border-zinc-200/80 group-hover:border-pink-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-pink-300 hover:text-pink-600 transition-all hover:scale-105 active:scale-95 shadow-sm inline-flex items-center gap-1.5"
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