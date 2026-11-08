export default function Experience() {
  const timeline = [
    {
      role: "Web Developer (Part-Time)",
      organization: "Smart Manufacturing Research Institute (SMRI), UiTM Shah Alam",
      period: "Nov 2026 – Present",
      type: "Work Experience",
      points: [
        "Design and maintain responsive pages on the SMRI website using Joomla and SP Page Builder, developing custom CSS for desktop and mobile layouts.",
        "Diagnose and resolve layout, navigation, and visual consistency issues across the website using browser DevTools.",
      ],
    },
    {
      role: "Treasurer",
      organization: "Netcom Club, Universiti Teknologi MARA (UiTM), Shah Alam",
      period: "2025 – Present",
      type: "Leadership & Club Involvement",
      points: [
        "Oversee club finances, keep transaction records, and maintain accurate financial documentation.",
        "Prepare, allocate, and monitor budgets to support university club activities, tech workshops, and student events.",
      ],
    },
    {
      role: "Associate Swift Developer Programme",
      organization: "SwiftUI Academy — Apple Program (STDC, Shah Alam)",
      period: "July 2026 – Aug 2026",
      type: "Specialized Academy",
      points: [
        "Participated in a 3-week on-site Apple program focused on native iOS and mobile application development.",
        "Gained hands-on experience in SwiftUI, iOS architectural patterns, user interface design guidelines, and live product pitching.",
      ],
    },
    {
      role: "Web Developer (Intern)",
      organization: "Gravitas Digital, Kota Damansara",
      period: "Aug 2024 – Feb 2025",
      type: "Work Experience",
      points: [
        "Maintained and updated the IMU University website in WordPress, ensuring front-end content was accurate, complete, and visually consistent.",
        "Identified and repaired broken links, updated outdated content, and uploaded missing web assets for a seamless user experience.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Development with Google AI-Assisted Framework",
      issuer: "Google Developers Group",
    },
    {
      title: "App Development with Swift Associate",
      issuer: "Apple",
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-zinc-100">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
            Career &amp; Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Experience &amp; Activities.
          </h2>
          <p className="text-zinc-600 max-w-xl text-base sm:text-lg">
            A timeline of my work experience, leadership roles, and specialized technical programmes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 ml-3 sm:ml-4 border-l-2 border-pink-200/80 space-y-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-pink-500 shadow-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300 flex flex-col gap-3">
                {/* Period & Category Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200/60">
                    {item.period}
                  </span>
                  <span className="text-xs font-medium text-zinc-600 bg-zinc-50 px-2.5 py-0.5 rounded-full border border-zinc-200/60">
                    {item.type}
                  </span>
                </div>

                {/* Role Title & Organization */}
                <div className="pt-1">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-pink-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-700">
                    {item.organization}
                  </p>
                </div>

                {/* Key Bullet Points */}
                <ul className="list-disc list-outside pl-4 pt-1 text-zinc-600 text-sm space-y-2 leading-relaxed">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="pt-4 flex flex-col gap-4">
          <h3 className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Certifications &amp; Credentials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-pink-300 hover:shadow-sm transition-all flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-50 border border-pink-200/70 flex items-center justify-center text-lg flex-shrink-0">
                  🏅
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium text-pink-600">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
