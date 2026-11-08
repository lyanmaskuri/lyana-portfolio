export default function Contact() {
  const email = "puterilyana192@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/puterinurlyana/";
  const github = "https://github.com/lyanmaskuri";

  return (
    <footer id="contact" className="py-24 border-t border-zinc-100">
      {/* Featured Callout Banner Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-white to-pink-50/40 border border-pink-200/80 p-8 sm:p-14 shadow-xl shadow-pink-100/50 max-w-3xl mx-auto overflow-hidden text-center flex flex-col items-center gap-8">
        {/* Soft background ambient blob */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-pink-700 border border-pink-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span>Internship Window: 15 March 2027 – 18 June 2027</span>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
            Let&apos;s build something <span className="text-pink-500">meaningful</span>.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Whether you have an internship opportunity, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Direct Email Button */}
          <a
            href={`mailto:${email}`}
            className="px-7 py-3.5 rounded-full font-medium text-sm text-white bg-pink-500 hover:bg-pink-600 shadow-md shadow-pink-200/80 transition-all hover:scale-105 active:scale-95"
          >
            Send an Email ✉️
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            LinkedIn Profile ↗
          </a>

          {/* GitHub Button */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full font-medium text-sm text-zinc-800 bg-white border border-zinc-200 hover:border-pink-300 hover:text-pink-600 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            GitHub ↗
          </a>
        </div>

        {/* Footer Signature */}
        <div className="pt-8 border-t border-pink-100/80 w-full text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Designed &amp; Built with Next.js &amp; Tailwind CSS</span>
          <span>Puteri Nur Lyana • Shah Alam, Malaysia</span>
        </div>
      </div>
    </footer>
  );
}
