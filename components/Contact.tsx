export default function Contact() {
  const email = "puterilyana192@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/puterinurlyana/";
  const github = "https://github.com/lyanmaskuri";

  return (
    <footer id="contact" className="py-20 border-t border-zinc-100">
      <div className="flex flex-col items-center text-center gap-10 max-w-2xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200/80">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span>Seeking Internship (March 2027 – June 2027)</span>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Let&apos;s build something <span className="text-pink-500">together</span>.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            I am always open to discussing new projects, internship opportunities, or connecting with fellow tech enthusiasts.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Direct Email Button */}
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 rounded-full font-medium text-sm text-white bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-200 transition-all hover:scale-105 active:scale-95"
          >
            Send an Email
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            LinkedIn Profile ↗
          </a>

          {/* GitHub Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            GitHub ↗
          </a>
        </div>

        {/* Copyright / Bottom Footer Note */}
        <div className="pt-12 text-xs text-zinc-400 flex flex-col sm:flex-row items-center gap-2">
          <span>Designed &amp; Built by Puteri Nur Lyana</span>
          <span className="hidden sm:inline">•</span>
          <span>Shah Alam, Selangor</span>
        </div>
      </div>
    </footer>
  );
}