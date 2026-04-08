export default function JulenPortfolioSite() {
  const highlights = [
    {
      title: "Business & Finance",
      text: "Business Management student focused on finance, investing, and practical business thinking."
    },
    {
      title: "International Experience",
      text: "Currently studying at Columbus State University as an exchange student from the University of the Basque Country."
    },
    {
      title: "Career Focus",
      text: "Interested in venture capital, FP&A, banking, and roles that combine analysis, strategy, and growth."
    },
    {
      title: "Learning Mindset",
      text: "Learning machine learning and Python from scratch with a practical, build-first approach."
    }
  ];

  const education = [
    {
      title: "Business Management",
      school: "University of the Basque Country (UPV/EHU)",
      year: "Current"
    },
    {
      title: "Exchange Program",
      school: "Columbus State University",
      year: "Current"
    }
  ];

  const technicalSkills = [
    "Financial analysis",
    "Excel",
    "Investing",
    "Business strategy",
    "Python (beginner)",
    "Machine learning foundations",
    "Market research",
    "Presentation and communication"
  ];

  const softSkills = [
    "Communication",
    "Analytical thinking",
    "Adaptability",
    "Curiosity",
    "Problem-solving",
    "Cross-cultural mindset",
    "Teamwork",
    "Initiative"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-600">
              Personal Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Hi, I&apos;m Julen</h1>
            <p className="text-lg md:text-2xl text-slate-600">
              Business Management | University of the Basque Country
            </p>
            <p className="text-base md:text-lg leading-8 text-slate-700 max-w-2xl">
              Exchange student in the United States with a strong interest in finance, investing, business strategy, and long-term career growth. I am especially interested in roles where analysis, decision-making, and practical execution come together.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#"
                className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
              >
                Get in Touch
              </a>
              <a
                href="#"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">About Me</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A business student building an international career</h2>
          <p className="text-slate-700 leading-8">
            I study Business Management at the University of the Basque Country and I am currently studying at Columbus State University as part of my exchange program. This experience has pushed me to adapt quickly, communicate across cultures, and think more seriously about the kind of international career I want to build.
          </p>
          <p className="text-slate-700 leading-8">
            My strongest interests are finance, investing, venture capital, and business analysis. I like understanding how companies grow, how decisions create value, and how strategy connects with numbers in the real world.
          </p>
          <p className="text-slate-700 leading-8">
            I am also learning Python and machine learning from scratch because I want to combine business judgment with technical literacy. My goal is to keep building a profile that is analytical, practical, and internationally oriented.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 mb-8">Education</p>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.school}</p>
                <p className="text-sm text-slate-500 mt-4">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 mb-8">Skills & Expertise</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-5">Professional & Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-5">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Career Direction</h3>
            <p className="text-slate-700 leading-8">
              I am interested in internships and early-career opportunities in finance, venture capital, FP&A, and banking. In the long term, I want to build an international career with strong analytical foundations and real exposure to business decision-making.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
            <p className="text-slate-700 leading-8">
              Right now, I am focused on developing practical business skills, strengthening my understanding of finance and investing, improving my professional profile, and learning technical tools that can help me stand out.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let&apos;s connect</h2>
            <p className="text-slate-700 leading-8 max-w-xl">
              I am always open to meeting new people, discussing opportunities, and connecting with others interested in business, finance, investing, or international career paths.
            </p>
            <div className="space-y-3 pt-4 text-slate-700">
              <p><span className="font-semibold">Email:</span> your@email.com</p>
              <p><span className="font-semibold">LinkedIn:</span> linkedin.com/in/your-linkedin</p>
              <p><span className="font-semibold">Status:</span> Open to internships and professional opportunities</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="w-full rounded-2xl border border-slate-300 px-4 py-3 min-h-[140px] outline-none" placeholder="Tell me about your project, idea, or opportunity..." />
              </div>
              <button className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500">
          © 2026 Julen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
