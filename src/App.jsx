import { useEffect, useMemo, useState } from 'react';
import { assets } from './config/assets';

// ── SVG Icon Components for Clean UI (No Emojis) ─────────────────────────────
function IconBadminton({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11v10" />
      <path d="M8 21h8" />
    </svg>
  );
}

function IconSwimming({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
      <path d="M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
      <circle cx="15" cy="5" r="2" />
      <path d="M8 12l4-3 3 2 4-2" />
    </svg>
  );
}

function IconCricket({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 19 14-14" />
      <path d="m16 2 6 6" />
      <circle cx="6" cy="18" r="3" />
    </svg>
  );
}

function IconTableTennis({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="m15.5 15.5 4.5 4.5" />
      <circle cx="19" cy="6" r="1.5" />
    </svg>
  );
}

function IconCooking({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A8 8 0 0 1 12 4a8 8 0 0 1 6 9.87V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5.13z" />
      <path d="M9 4V2" />
      <path d="M15 4V2" />
      <path d="M12 4V2" />
    </svg>
  );
}

function IconTravelling({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function IconAward({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconMapPin({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconLinkedin({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
    </svg>
  );
}

function IconGithub({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconDownload({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function IconExternalLink({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

// ── Data Sets ────────────────────────────────────────────────────────────────
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Experience', href: '#experience' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
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

const marqueeSkills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
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
    desc: 'Full-stack job application tracker SaaS built with Next.js, MongoDB Atlas, and Clerk authentication. Companion app to ResumeCraft sharing Clerk keys.',
    stack: ['Next.js', 'MongoDB Atlas', 'Clerk Auth', 'Tailwind'],
  },
];

const certificates = [
  {
    id: 'c1',
    category: 'Hackathon',
    title: 'Hackspiration 26 Participation',
    issuer: 'HackWithIndia / VIT Pune',
    date: '2026',
    image: '/certificates/HackspirationCertificate.jpg',
  },
  {
    id: 'c2',
    category: 'Hackathon',
    title: 'Apex Hackathon 2025',
    issuer: 'VIT Pune',
    date: '2025',
    image: '/certificates/ApexCertificate.jpg',
  },
  {
    id: 'c3',
    category: 'Coursera',
    title: 'Introduction to Git and GitHub',
    issuer: 'Google — Coursera',
    date: '2024',
    image: '/certificates/GoogleCertificate.png',
  },
  {
    id: 'c4',
    category: 'Coursera',
    title: 'AWS Fundamentals: Going Cloud-Native',
    issuer: 'Amazon Web Services — Coursera',
    date: '2026',
    image: '/certificates/AWScertificate.png',
  },
  {
    id: 'c7',
    category: 'Event',
    title: 'CyberCell Certificate',
    issuer: 'VIT Pune',
    date: '2025',
    image: '/certificates/CyberCellCertificate.png',
  },
  {
    id: 'c8',
    category: 'Exhibition',
    title: 'DIPEX Project Exhibition — Exhibitor',
    issuer: 'DIPEX, Pune',
    date: 'Apr 2025',
    image: '/certificates/DipexCertificate.jpeg',
  },
  {
    id: 'c9',
    category: 'Exhibition',
    title: 'Project Representative Certificate',
    issuer: 'Ashokrao Mane Polytechnic, Vathar, Kolhapur',
    date: '2025',
    image: '/certificates/Project_representation_ashokrao_mane.jpg',
  },
  {
    id: 'c10',
    category: 'Event',
    title: 'COSA Incepto Participating Certificate',
    issuer: 'Government Polytechnic, Karad',
    date: '2025',
    image: '/certificates/Incepto_Karad.jpg',
  },
  {
    id: 'c11',
    category: 'Event',
    title: 'ITSA Award for Best Lead',
    issuer: 'Government Polytechnic, Kolhapur',
    date: '2025',
    image: '/certificates/Mr_Walking_Wikipedia.jpg',
  },
  {
    id: 'c12',
    category: 'Event',
    title: 'LINUXDIARY 5.0',
    issuer: 'Walchand College of Engineering, Sangli',
    date: '2025',
    image: '/certificates/Walchand_Linux_Certificate.jpg',
  },
  {
    id: 'c13',
    category: 'Coursera',
    title: 'AI Fundamentals',
    issuer: 'Google',
    date: '2025',
    image: '/certificates/AI_Fundamentals.png',
  },
  {
    id: 'c14',
    category: 'Badges',
    title: 'AI Fundamentals Badge',
    issuer: 'Google',
    date: '2025',
    image: '/certificates/Badges/google-ai-fundamentals.png',
  },
];

const CERT_TABS = ['All', 'Hackathon', 'Coursera', 'Event', 'Exhibition', 'Badges'];

const activities = [
  { Icon: IconBadminton, title: 'Badminton', level: 'Intermediate', detail: 'Fast reflex play and strategy-focused doubles sessions.' },
  { Icon: IconSwimming, title: 'Swimming', level: 'Intermediate', detail: 'Focus and endurance training that balances long coding days.' },
  { Icon: IconCricket, title: 'Cricket', level: 'Enthusiast', detail: 'Team communication, tactical adaptation, and game awareness.' },
  { Icon: IconTableTennis, title: 'Table Tennis', level: 'Intermediate', detail: 'Precision play that sharpens concentration and timing.' },
  { Icon: IconCooking, title: 'Cooking', level: 'Home Chef', detail: 'Creative experimentation inspired by structured process thinking.' },
  { Icon: IconTravelling, title: 'Travelling', level: 'Explorer', detail: 'Exploring new cities, cultures, and landscapes fuels curiosity beyond the screen.' },
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
    title: 'Dr. Amar Panchal Workshop',
    tag: 'Workshop',
    image: '/gallery/DrAmarPanchal1.jpeg',
  },
];

// ── Light Modal Component for Certificates ────────────────────────────────────
function CertLightbox({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-reveal"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with title and close button */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="chip text-[11px] uppercase tracking-wider">{cert.category}</span>
            <h3 className="font-display text-base font-bold text-slate-900 line-clamp-1">{cert.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Certificate image display surface */}
        <div className="flex items-center justify-center bg-slate-100/70 p-4 min-h-[300px]">
          <img
            src={cert.image}
            alt={cert.title}
            className="max-h-[60vh] w-full object-contain rounded-lg border border-slate-200/80 shadow-sm"
            onError={(e) => {
              e.target.style.display = 'none';
              if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback SVG container */}
          <div
            className="hidden h-64 w-full flex-col items-center justify-center gap-3 text-slate-400"
            style={{ display: 'none' }}
          >
            <div className="rounded-full bg-emerald-50 p-4 text-emerald-600 border border-emerald-200">
              <IconAward className="w-10 h-10" />
            </div>
            <p className="text-sm font-medium text-slate-600">Certificate preview previewing</p>
            <code className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">{cert.image}</code>
          </div>
        </div>

        {/* Footer info strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white border-t border-slate-100">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Issued by</p>
            <p className="text-sm font-bold text-slate-900">{cert.issuer} · {cert.date}</p>
          </div>
          <a
            href={cert.image}
            download
            className="btn-primary shrink-0 text-xs py-2.5 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <IconDownload className="w-4 h-4" /> Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

function SkillItem({ skill }) {
  const hasIcon = Boolean(skill.icon);

  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:border-emerald-500/50 hover:bg-emerald-50/30 hover:text-emerald-800 hover:shadow-sm">
      {hasIcon ? (
        <img src={skill.icon} alt={skill.name} className="h-4.5 w-4.5 object-contain" loading="lazy" />
      ) : (
        <span className="inline-flex h-4.5 min-w-[18px] items-center justify-center rounded bg-emerald-100 px-1 text-[9px] font-bold text-emerald-800">
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
  const [certTab, setCertTab] = useState('All');
  const [lightboxCert, setLightboxCert] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = window.setTimeout(() => setToastOpen(false), 4800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active tracking
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="shell bg-dot-grid">
      {/* Welcome Toast Notification */}
      {toastOpen ? (
        <div className="fixed inset-x-0 top-5 z-50 mx-auto w-[min(92vw,420px)] animate-toastIn overflow-hidden rounded-2xl border border-emerald-500/30 bg-white/95 shadow-xl backdrop-blur-md">
          <div className="flex items-start gap-3.5 p-4">
            <div className="mt-0.5 rounded-xl bg-emerald-100 p-2 text-emerald-700 border border-emerald-200">
              <IconAward className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">Welcome to my Portfolio</p>
              <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">Explore AI/ML projects, technical stack, and achievements.</p>
            </div>
            <button
              type="button"
              onClick={() => setToastOpen(false)}
              className="rounded-lg border border-slate-200 p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close welcome message"
            >
              ✕
            </button>
          </div>
          <div className="h-1 w-full bg-emerald-100">
            <div className="h-1 bg-emerald-500 animate-progress" />
          </div>
        </div>
      ) : null}

      {/* Light Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-nav backdrop-blur-md'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <nav className="section-wrap flex h-16 items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white text-xs shadow-sm">
              BVG
            </span>
            <span className="text-gradient">Bramha.dev</span>
          </a>

          <button
            type="button"
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm md:hidden hover:bg-slate-50"
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>

          <ul className="hidden items-center gap-1.5 md:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {mobileOpen ? (
          <div className="section-wrap pb-4 md:hidden">
            <ul className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    className={`block rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      activeSection === item.href.substring(1)
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-700 font-semibold'
                        : 'border-slate-100 bg-slate-50/50 text-slate-700 hover:bg-slate-100'
                    }`}
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
        {/* Hero Section */}
        <section id="home" className="section-wrap relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up z-10">
            <span className="section-kicker">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              AI & ML Focused Engineer
            </span>
            
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-slate-900 sm:text-5xl lg:text-6xl tracking-tight mt-2">
              Hi, I'm <span className="text-gradient-green">Bramha Vinayak</span> Gulavani
            </h1>
            
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Building intelligent, practical systems through clean engineering and data-driven thinking. I enjoy solving real-world problems with modern web and AI tooling.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a className="btn-primary" href={assets.resumeFile} target="_blank" rel="noreferrer">
                View Resume <IconExternalLink />
              </a>
              <a className="btn-secondary" href="https://project-page-three.vercel.app/" target="_blank" rel="noreferrer">
                Explore Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="chip">
                <IconMapPin className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Pune, India
              </span>
              <span className="chip">Open for Internships</span>
              <span className="chip">Hackathon-Ready</span>
            </div>
          </div>

          <div className="reveal-up [animation-delay:120ms]">
            <div className="light-card mx-auto max-w-sm p-6 text-center">
              {/* Profile Card with Green Glowing Ring */}
              <div className="relative mx-auto h-64 w-64 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 shadow-emerald-glow animate-floaty">
                <div className="h-full w-full rounded-full overflow-hidden bg-white border-2 border-white">
                  <img
                    src={assets.profileImage}
                    alt="Bramha Vinayak Gulavani"
                    className="h-full w-full object-cover object-[50%_20%] scale-[1.08]"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-left shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm font-bold text-slate-900">B.Tech CSE (AI and ML)</p>
                </div>
                <p className="mt-1 text-xs font-semibold text-emerald-700">Vishwakarma Institute of Technology, Pune</p>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">Focused on scalable AI-integrated products, strong CS fundamentals, and modern developer workflows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-wrap py-20">
          <SectionHeader
            kicker="About"
            title="Developer Identity"
            subtitle="A high-performance engineering profile designed around impact, leadership, and intelligent product building."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="light-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-display text-xs font-bold text-slate-600">profile.py</span>
                </div>
                <span className="rounded-full border border-emerald-300 bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  Live Snapshot
                </span>
              </div>
              <div className="space-y-4 p-5 sm:p-7">
                <div className="rounded-xl border border-slate-200 bg-slate-900 p-4 sm:p-5 text-slate-100 shadow-inner font-mono text-xs sm:text-sm">
                  <p className="text-emerald-400 font-bold">class BramhaGulavani:</p>
                  <div className="mt-3 space-y-2 text-slate-300 pl-4 border-l border-slate-700">
                    <p><span className="text-teal-300">def __init__</span>(self):</p>
                    <p className="pl-4"><span className="text-emerald-400">self.name</span> = <span className="text-amber-300">"Bramha Vinayak Gulavani"</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.role</span> = <span className="text-amber-300">"AI/ML Engineer & Full-Stack Dev"</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.university</span> = <span className="text-amber-300">"VIT Pune"</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.path</span> = <span className="text-amber-300">"Direct 2nd Year (CSE AI/ML)"</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.diploma_score</span> = <span className="text-cyan-300">93.72</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.cgpa</span> = <span className="text-cyan-300">9.48</span></p>
                    <p className="pl-4"><span className="text-emerald-400">self.cr_leadership</span> = <span className="text-purple-300">True</span></p>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">Terminal Core Philosophy</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800 font-medium">
                    "Build systems that solve real-world problems through intelligent technology and elegant code structure."
                  </p>
                </div>
              </div>
            </article>

            <div className="space-y-5">
              <article className="light-card p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Current Focus
                </h3>
                <div className="mt-4 grid gap-2.5">
                  {currentFocus.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="light-card p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Identity Markers
                </h3>
                <div className="mt-4 space-y-2.5">
                  {aboutHighlights.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 rounded-xl border border-slate-200/70 bg-slate-50/60 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">{item.label}</span>
                      <span className="text-xs font-semibold text-slate-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-wrap py-20">
          <SectionHeader kicker="Education" title="Academic Journey" subtitle="Strong formal education foundation in Computer Science and Information Technology." />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                period: '2025 - 2028',
                title: 'B.Tech in Computer Science & Engineering (AI & ML)',
                org: 'Vishwakarma Institute of Technology, Pune (VIT Pune)',
                desc: 'Currently in Third year with focus on AI, computer vision, algorithms, and software engineering fundamentals.',
              },
              {
                period: '2022 - 2025',
                title: 'Diploma in Information Technology',
                org: 'Government Polytechnic Kolhapur (GPKP)',
                desc: 'Built practical foundation in programming, networking, and databases. Graduated with 93.72%.',
              },
              {
                period: '2022',
                title: 'Secondary School Certificate (SSC)',
                org: 'Maharashtra State Board',
                desc: 'Completed schooling with a strong academic base for technical specialization.',
              },
            ].map((item) => (
              <article key={item.title} className="light-card p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <span className="chip text-[10px] uppercase font-bold tracking-wider">{item.period}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="mt-1 text-xs font-bold text-emerald-700">{item.org}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-wrap py-20">
          <SectionHeader
            kicker="Skills & Tools"
            title="Technology Stack"
            subtitle="Hands-on tools and foundations I use to design, build, and iterate quickly."
          />

          {/* Continuous Marquee Banner */}
          <div className="mb-12 overflow-hidden py-4 border-y border-slate-200/80 bg-slate-50/50 rounded-2xl">
            <div className="marquee-container">
              <div className="marquee-content animate-marquee">
                {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                    <img src={item.icon} alt={item.name} className="h-5 w-5 object-contain" />
                    <span className="text-xs font-bold text-slate-800">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((block) => (
              <article key={block.title} className="light-card p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> {block.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {block.items.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-wrap py-20">
          <SectionHeader
            kicker="Projects"
            title="Featured Work"
            subtitle="A selection of projects that blend problem solving, architecture, and execution."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="light-card p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certificates & Awards Section */}
        <section id="certificates" className="section-wrap py-20">
          <SectionHeader
            kicker="Certificates & Awards"
            title="Honours & Recognition"
            subtitle="Certifications earned, hackathons attended, events organised, and exhibitions showcased."
          />

          {/* Tab Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {CERT_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setCertTab(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition duration-200 ${
                  certTab === tab
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Certificate Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates
              .filter((c) => certTab === 'All' || c.category === certTab)
              .map((cert) => (
                <article
                  key={cert.id}
                  onClick={() => setLightboxCert(cert)}
                  className="light-card group cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback container */}
                    <div
                      className="hidden absolute inset-0 flex-col items-center justify-center gap-2 bg-slate-100 p-4 text-slate-400"
                      style={{ display: 'none' }}
                    >
                      <IconAward className="w-8 h-8 text-emerald-600" />
                      <p className="text-center text-xs font-semibold text-slate-600">{cert.title}</p>
                    </div>

                    {/* Category Badge top-left */}
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-600 text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {cert.category}
                    </span>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{cert.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-emerald-700">{cert.issuer}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{cert.date}</p>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxCert && (
          <CertLightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />
        )}

        {/* Experience Section */}
        <section id="experience" className="section-wrap py-20">
          <SectionHeader kicker="Experience" title="Leadership & Community" />

          <div className="space-y-6">
            <article className="light-card p-6 sm:p-8">
              <span className="chip text-[10px] uppercase font-bold tracking-wider">Jun 2025 - Present</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Secretary, HackWithIndia Core Team</h3>
              <p className="mt-0.5 text-sm font-semibold text-emerald-700">HWI, VIT Pune</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A core professional role responsible for managing correspondence, organizing hackathon schedules, keeping records, and handling technical administrative operations across nationwide initiatives.
              </p>
            </article>

            <article className="light-card p-6 sm:p-8">
              <span className="chip text-[10px] uppercase font-bold tracking-wider">Jan 2023 - Jun 2025</span>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Core Committee Member, Project Area Head</h3>
              <p className="mt-0.5 text-sm font-semibold text-emerald-700">ITSA, GPKP Polytechnic</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Led the project area operations for technical symposiums and exhibitions, managed participant entries and execution flow, and coordinated with teams to ensure smooth execution.
              </p>
            </article>
          </div>
        </section>

        {/* Activities Section (Bento Style) */}
        <section id="activities" className="section-wrap py-20">
          <SectionHeader
            kicker="Activities"
            title="Beyond The Screen"
            subtitle="Sports, learning, and creative outlets that sharpen discipline and perspective."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((item) => {
              const ActivityIcon = item.Icon;
              return (
                <article key={item.title} className="light-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <ActivityIcon className="w-5 h-5" />
                      </div>
                      <span className="chip-slate text-[10px] uppercase tracking-wider font-bold">
                        {item.level}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section-wrap py-20">
          <SectionHeader
            kicker="Gallery"
            title="Highlights"
            subtitle="A few snapshots from events, presentations, and showcases."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {galleryCards.map((card) => (
              <article key={card.title} className="light-card overflow-hidden group">
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <span className="chip text-[10px] uppercase tracking-wider font-bold">{card.tag}</span>
                  <h3 className="mt-2 text-sm font-bold text-slate-900">{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-wrap py-20">
          <SectionHeader
            kicker="Contact"
            title="Let's Build Something Impactful"
            subtitle="Open to internships, engineering collaboration, and AI/ML opportunities."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <aside className="light-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">Contact Information</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Feel free to reach out via email, or connect with me on LinkedIn and GitHub.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href="mailto:bramhagulavani@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-800 transition hover:border-emerald-500/40 hover:bg-emerald-50/40 hover:text-emerald-700"
                  >
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                      <IconMail />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-xs text-slate-900 font-medium">bramhagulavani@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-800">
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                      <IconMapPin />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-xs text-slate-900 font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/bramha-vinayak-gulavani-31302a30b"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-800 transition hover:border-emerald-500/40 hover:bg-emerald-50/40 hover:text-emerald-700"
                  >
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                      <IconLinkedin />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
                      <p className="text-xs text-slate-900 font-medium">bramha-vinayak-gulavani</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/bramhagulavani"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs font-semibold text-slate-800 transition hover:border-emerald-500/40 hover:bg-emerald-50/40 hover:text-emerald-700"
                  >
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                      <IconGithub />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">GitHub</p>
                      <p className="text-xs text-slate-900 font-medium">bramhagulavani</p>
                    </div>
                  </a>
                </div>
              </div>
            </aside>

            <form className="light-card p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-display text-xl font-bold text-slate-900">Send a Message</h3>
              <p className="mt-1 text-xs text-slate-600">I usually respond within 24 hours.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Your Name"
                />
                <input
                  className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Subject"
                />
              </div>

              <input
                className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                placeholder="Email Address"
              />

              <textarea
                className="mt-4 h-36 w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                placeholder="Tell me about your idea, project, or opportunity..."
              />

              <button type="submit" className="btn-primary mt-4 w-full py-3.5 text-xs font-bold">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-slate-50/80 py-8">
        <div className="section-wrap text-center text-xs text-slate-500">
          <p className="font-medium">© {year} Bramha Vinayak Gulavani. All rights reserved.</p>
          <p className="mt-1 text-slate-400">Designed with React & Tailwind CSS • Light Theme Premium Visual System</p>
        </div>
      </footer>
    </div>
  );
}

export default App;