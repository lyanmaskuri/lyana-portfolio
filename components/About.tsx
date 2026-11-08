export default function About() {
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "Java", "Dart", "PHP", "MySQL", "Supabase", "Firebase"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Tailwind CSS", "Flutter", "Flask", "SwiftUI", "Google ML Kit"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "WordPress", "Joomla", "Android Studio", "XCode"],
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-100">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Passionate student, curious developer.
          </h2>
        </div>

        {/* Bio Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-600 text-base sm:text-lg leading-relaxed">
          <p>
            I am currently a student dedicated to learning web and mobile development.
            I love exploring how things work under the hood and transforming creative ideas into functional, responsive web applications.
          </p>
          <p>
            When I am not studying or coding, I enjoy discovering new developer tools, joining meet-up and workshop, and constantly improving my problem-solving skills.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="flex flex-col gap-6 pt-4">
          <h3 className="text-xl font-bold text-zinc-900">
            Tech Stack &amp; Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-pink-300 hover:shadow-md hover:shadow-pink-100/50 transition-all duration-300"
              >
                <h4 className="text-sm font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-100 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-50 text-zinc-700 border border-zinc-200/80 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}