import { useEffect, useMemo, useState } from 'react';
import { assets } from './config/assets';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Activities', href: '#activities' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const aboutHighlights = [
  { label: 'Role', value: 'AI/ML Undergraduate | MERN-Stack Developer' },
  { label: 'University', value: 'Vishwakarma Institute of Technology, Pune' },
  { label: 'Academic Path', value: 'Direct Second Year (CSE AI/ML)' },
  { label: 'Diploma Score', value: '93.72% (Information Technology)' },
  { label: 'Current CGPA', value: '9.48' },
  { label: 'Leadership', value: 'Class Representative' },
];

const currentFocus = [
  'AI and Computer Vision Systems',
  'Scalable Full-Stack Architectures',
  'Advanced DSA and System Design',
  'AI Model Optimization',
];

const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    title: 'Web & Backend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'REST API', symbol: 'API' },
    ],
  },
  {
    title: 'AI & Data',
    items: [
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Scikit-learn', symbol: 'SK' },
      { name: 'Regression', symbol: 'RG' },
      // { name: 'Classification', symbol: 'CL' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { name: 'DSA', symbol: 'DS' },
      { name: 'Advanced DSA', symbol: 'ADSA' },
      { name: 'Artificial Intelligence', symbol: 'AI' },
      { name: 'Operating Systems', symbol: 'OS' },
      { name: 'Computer Networks', symbol: 'CN' },
    ],
  },
];

const projects = [
  {
    name: 'LearnHub',
    desc: 'An intelligent learning platform that recommends personalized learning paths using machine learning signals from student behavior and outcomes.',
    stack: ['Python', 'Scikit-learn', 'Flask', 'SQLite'],
  },
  {
    name: 'Blockchain-Based Anomaly Detection',
    desc: 'Explores secure anomaly detection in transaction logs by combining blockchain traceability with lightweight ML models.',
    stack: ['Python', 'ML', 'Blockchain', 'Data Analysis'],
  },
  {
    name: 'Integrated Department Portal',
    desc: 'A full-stack portal centralizing department data, profiles, and academic resources with role-focused access patterns.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
  },
  {
    name: 'AI ANPR System',
    desc: 'Live camera-based automatic number plate recognition with a management dashboard for monitoring and reporting.',
    stack: ['Computer Vision', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    name: 'AI ResumeCraft',
    desc: 'SaaS resume builder with AI-assisted writing, ATS scoring, template customization, and export workflows.',
    stack: ['Next.js', 'OpenRouter', 'Tailwind', 'Vercel'],
  },
  {
    name: 'Jobtracker',
    desc: 'JobTracker is a full-stack job application tracker SaaS built with Next.js, MongoDB Atlas, and Clerk authentication. It is a companion app to ResumeCraft (another project by the same developer). Both apps share the same Clerk account/keys.',
    stack: ['Next.js','Next.js', 'OpenRouter', 'Tailwind', 'Vercel'],
  },
];

const activities = [
  { icon: 'BAD', title: 'Badminton', level: 'Intermediate', detail: 'Fast reflex play and strategy-focused doubles sessions.' },
  { icon: 'SWM', title: 'Swimming', level: 'Intermediate', detail: 'Focus and endurance training that balances long coding days.' },
  { icon: 'CRK', title: 'Cricket', level: 'Enthusiast', detail: 'Team communication, tactical adaptation, and game awareness.' },
  { icon: 'TT', title: 'Table Tennis', level: 'Intermediate', detail: 'Precision play that sharpens concentration and timing.' },
  { icon: 'CK', title: 'Cooking', level: 'Home Chef', detail: 'Creative experimentation inspired by structured process thinking.' },
  { icon: 'TR', title: 'Travelling', level: 'Explorer', detail: 'Exploring new cities, cultures, and landscapes fuels my curiosity beyond the screen.' },
];

const galleryCards = [
  {
    title: 'DIPEX Showcase',
    tag: 'Exhibition',
    image: '/gallery/DIPEX.jpg',
  },
  {
    title: 'VIT Campus',
    tag: 'College',
    image: '/gallery/VIT-2.jpg',
  },
  {
    title: 'Operating Systems Presentation',
    tag: 'Academics',
    image: '/gallery/OSPresentation.jpeg',
  },
  {
    title: 'Springboard Session',
    tag: 'Workshop',
    image: '/gallery/Springboardimage3.jpeg',
  },
  {
    title: 'EDI Presentation',
    tag: 'Academics',
    image: '/gallery/EDI_Presentation.jpeg',
  },
  {
    title: 'EDI Presentation',
    tag: 'Academics',
    image: '/gallery/DrAmarPanchal1.jpeg',
  },
];

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

function SkillItem({ skill }) {
  const hasIcon = Boolean(skill.icon);

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-base-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-accent-300/60 hover:text-accent-300">
      {hasIcon ? (
        <img src={skill.icon} alt={skill.name} className="h-4 w-4 object-contain" loading="lazy" />
      ) : (
        <span className="inline-flex h-4 min-w-4 items-center justify-center rounded bg-accent-500/15 px-1 text-[9px] font-bold tracking-wide text-accent-300">
          {skill.symbol}
        </span>
      )}
      <span>{skill.name}</span>
    </span>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setToastOpen(false), 4800);
    return () => window.clearTimeout(timer);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="shell">
      {toastOpen ? (
        <div className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(92vw,420px)] animate-toastIn overflow-hidden rounded-xl border border-accent-400/40 bg-base-850/95 shadow-halo backdrop-blur">
          <div className="flex items-start gap-3 p-4">
            <div className="mt-0.5 rounded-lg bg-accent-500/20 px-2 py-1 text-xs font-bold text-accent-300">HI</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Welcome to my profile</p>
              <p className="mt-1 text-xs text-slate-300">Explore projects, skills, and the journey behind my work.</p>
            </div>
            <button
              type="button"
              onClick={() => setToastOpen(false)}
              className="rounded-md border border-white/15 px-2 py-1 text-xs text-slate-300 transition hover:border-accent-300/60 hover:text-white"
              aria-label="Close welcome message"
            >
              Close
            </button>
          </div>
          <div className="h-1 w-full bg-accent-500/20">
            <div className="h-1 bg-accent-400 animate-progress" />
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-base-950/75 backdrop-blur-xl">
        <nav className="section-wrap flex h-16 items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold tracking-tight text-gradient">
            BVG
          </a>

          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-300 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>

          <ul className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-slate-300 transition hover:text-accent-300" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {mobileOpen ? (
          <div className="section-wrap pb-4 md:hidden">
            <ul className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-base-850 p-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    className="block rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-accent-300/50 hover:text-accent-300"
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="section-wrap grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <span className="section-kicker">AI and ML focused engineer</span>
            <h1 className="font-display text-4xl font-bold leading-tight text-gradient sm:text-5xl lg:text-6xl">
              Bramha Vinayak Gulavani
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Building intelligent, practical systems through clean engineering and data-driven thinking. I enjoy solving real-world problems with modern web and AI tooling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-primary" href={assets.resumeFile} target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="btn-secondary" href="https://project-page-three.vercel.app/">
                Explore Projects
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">Pune, India</span>
              <span className="chip">Open for internships</span>
              <span className="chip">Hackathon-ready</span>
            </div>
          </div>

          <div className="reveal-up [animation-delay:120ms]">
            <div className="glass-card mx-auto max-w-sm p-6">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-accent-400/60 shadow-halo animate-floaty">
                <img src={assets.profileImage} alt="Bramha profile" className="h-full w-full object-cover object-top" />
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-base-900/70 p-4">
                <p className="text-sm font-semibold text-white">B.Tech CSE (AI and ML), VIT Pune</p>
                <p className="mt-2 text-xs text-slate-300">Focused on scalable AI-integrated products, strong fundamentals, and modern developer workflows.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap py-20">
          <SectionHeader
            kicker="About"
            title="Developer Identity"
            subtitle="A high-performance engineering profile designed around impact, leadership, and intelligent product building."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="glass-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 bg-base-900/80 px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">profile.py</p>
                <span className="rounded-full border border-accent-300/30 bg-accent-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent-200">
                  Live Snapshot
                </span>
              </div>
              <div className="space-y-4 p-5 sm:p-7">
                <div className="rounded-xl border border-white/10 bg-base-900 p-4 sm:p-5">
                  <p className="font-display text-sm text-slate-200">class BramhaGulavani</p>
                  <div className="mt-3 space-y-2 text-xs leading-6 text-slate-300 sm:text-sm">
                    <p><span className="text-accent-300">self.name</span> = "Bramha Vinayak Gulavani"</p>
                    <p><span className="text-accent-300">self.role</span> = "AI/ML Undergraduate | MERN-Stack Developer"</p>
                    <p><span className="text-accent-300">self.university</span> = "Vishwakarma Institute of Technology, Pune"</p>
                    <p><span className="text-accent-300">self.year</span> = "Direct Second Year (CSE AI/ML)"</p>
                    <p><span className="text-accent-300">self.gpa</span> = "93.72% (Diploma in IT)"</p>
                    <p><span className="text-accent-300">self.cgpa</span> = "9.48"</p>
                    <p><span className="text-accent-300">self.cr</span> = True</p>
                  </div>
                </div>

                <div className="rounded-xl border border-accent-300/25 bg-accent-500/10 p-4 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-200">Terminal Output</p>
                  <p className="mt-2 text-sm leading-7 text-slate-100 sm:text-base">
                    "Build systems that solve real-world problems through intelligent technology."
                  </p>
                </div>
              </div>
            </article>

            <div className="space-y-5">
              <article className="glass-card p-5 sm:p-6">
                <h3 className="font-display text-lg text-white">Current Focus</h3>
                <div className="mt-4 grid gap-2">
                  {currentFocus.map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-base-900/70 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="glass-card p-5 sm:p-6">
                <h3 className="font-display text-lg text-white">Identity Markers</h3>
                <div className="mt-4 space-y-3">
                  {aboutHighlights.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 rounded-lg border border-white/10 bg-base-900/70 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-300">{item.label}</span>
                      <span className="text-sm text-slate-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap py-20">
          <SectionHeader kicker="Education" title="Academic Journey" />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                period: '2025 - 2028',
                title: 'B.Tech in Computer Science & Engineering (AI & ML)',
                org: 'Vishwakarma Institute of Technology, Pune (VIT Pune)',
                desc: 'Currently in Third year with focus on AI, algorithms, and software engineering fundamentals.',
              },
              {
                period: '2022 - 2025',
                title: 'Diploma in Information Technology',
                org: 'Government Polytechnic Kolhapur (GPKP)',
                desc: 'Built practical foundation in programming, networking, and databases through hands-on work.',
              },
              {
                period: '2022',
                title: 'Secondary School Certificate (SSC)',
                org: 'Maharashtra State Board',
                desc: 'Completed schooling with a strong academic base for technical specialization.',
              },
            ].map((item) => (
              <article key={item.title} className="glass-card p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.org}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap py-20">
          <SectionHeader kicker="Skills" title="Technology Stack" subtitle="Hands-on tools and foundations I use to design, build, and iterate quickly." />

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((block) => (
              <article key={block.title} className="glass-card p-6">
                <h3 className="font-display text-lg text-white">{block.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {block.items.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap py-20">
          <SectionHeader kicker="Projects" title="Featured Work" subtitle="A selection of projects that blend problem solving, architecture, and execution." />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="glass-card p-6 transition hover:-translate-y-1 hover:border-accent-300/50">
                <h3 className="font-display text-xl text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-accent-400/25 bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-wrap py-20">
          <SectionHeader kicker="Experience" title="Leadership & Community" />
          <article className="glass-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Jun 2025 - Present</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Sponsorship & PR Lead, HackWithIndia Core Team</h3>
            <p className="mt-1 text-sm text-slate-300">HWI, VIT Pune</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Building strategic partnerships, managing outreach, and driving community engagement.
            </p>
          </article>
         <br></br>
          <article className="glass-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Jan 2023 - Jun 2025</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Core Committee Member, Project Area Head</h3>
            <p className="mt-1 text-sm text-slate-300">ITSA, GPKP Polytechnic</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Led the project area operations for a technical event, managed participants and execution flow, and coordinated with teams to ensure smooth delivery under deadlines.
            </p>
          </article>
        </section>

        <section id="activities" className="section-wrap py-20">
          <SectionHeader kicker="Activities" title="Beyond The Screen" subtitle="Sports, learning, and creative outlets that sharpen discipline and perspective." />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((item) => (
              <article key={item.title} className="glass-card p-5 transition hover:-translate-y-1 hover:border-accent-300/50">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-300/30 bg-accent-500/10 text-xs font-bold tracking-wide text-accent-300">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <span className="mt-2 inline-flex rounded-full border border-white/15 bg-base-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-300">
                  {item.level}
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* <section id="achievements" className="section-wrap py-20">
          <SectionHeader kicker="Achievements" title="Milestones & Recognition" />

          <div className="grid gap-5 md:grid-cols-2">
            {[
              'Project Exhibitor at DIPEX',
              'Hackspiration 26 Participation',
              'Google-authorized Git and GitHub Certificate',
              'Active collaborative project showcase experience',
            ].map((item) => (
              <article key={item} className="glass-card flex items-start gap-3 p-5">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-400" />
                <p className="text-sm text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </section> */}

        <section className="section-wrap py-20">
          <SectionHeader kicker="Gallery" title="Highlights" subtitle="A few snapshots from events, presentations, and showcases." />
          <div className="grid gap-5 md:grid-cols-3">
            {galleryCards.map((card) => (
              <article key={card.title} className="glass-card overflow-hidden transition hover:-translate-y-1 hover:border-accent-300/50">
                <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <span className="chip">{card.tag}</span>
                  <h3 className="mt-3 text-base font-semibold text-white">{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-wrap py-20">
          <SectionHeader
            kicker="Contact"
            title="Lets Build Something Impactful"
            subtitle="Open to internships, collaboration, and AI/ML-centered engineering opportunities."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <aside className="glass-card p-6">
              <h3 className="font-display text-xl text-white">Contact Info</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span> bramhagulavani@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span> Pune, Maharashtra, India
                </p>
                <p>
                  <span className="font-semibold text-white">LinkedIn:</span>{' '}
                  <a
                    href="https://www.linkedin.com/in/bramha-vinayak-gulavani-31302a30b"
                    className="text-accent-300 hover:text-accent-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    bramha-vinayak-gulavani
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">GitHub:</span>{' '}
                  <a href="https://github.com/bramhagulavani" className="text-accent-300 hover:text-accent-200" target="_blank" rel="noreferrer">
                    bramhagulavani
                  </a>
                </p>
              </div>
            </aside>

            <form className="glass-card p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-display text-xl text-white">Send a message</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl border border-white/15 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-300/70 focus:outline-none" placeholder="Your Name" />
                <input className="rounded-xl border border-white/15 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-300/70 focus:outline-none" placeholder="Subject" />
              </div>
              <input className="mt-4 w-full rounded-xl border border-white/15 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-300/70 focus:outline-none" placeholder="Email" />
              <textarea className="mt-4 h-36 w-full rounded-xl border border-white/15 bg-base-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent-300/70 focus:outline-none" placeholder="Tell me about your idea, role, or collaboration." />
              <button type="submit" className="btn-primary mt-4 w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="section-wrap text-center text-sm text-slate-400">
          <p>Copyright {year} Bramha Vinayak Gulavani. All rights reserved.</p>
          <p className="mt-1">Designed in React + Tailwind with a performance-first visual system.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
