import profileAsset from "@/assets/vyshini-profile.jpeg.asset.json";
import hackverseCert from "@/assets/certs/hackverse.jpg.asset.json";
import cidecodeCert from "@/assets/certs/cidecode.jpeg.asset.json";
import mongodbCert from "@/assets/certs/mongodb.jpg.asset.json";
import ibmInternshipCert from "@/assets/certs/ibm-internship.jpg.asset.json";
import googleCloudCert from "@/assets/certs/googlecloud.jpg.asset.json";
import ibmAiCert from "@/assets/certs/ibm-ai.jpg.asset.json";
import nptelCert from "@/assets/certs/nptel.jpg.asset.json";
import genaiDalleCert from "@/assets/certs/genai-dalle.jpg.asset.json";
import genaiPythonCert from "@/assets/certs/genai-python.jpg.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_d2djhzx";
const EMAILJS_TEMPLATE_ID = "template_ovq1ekp";
const EMAILJS_PUBLIC_KEY = "-05PL7P5vyes76Aew";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowUp,
  Code2,
  Cpu,
  Cloud,
  Database,
  Shield,
  Layout,
  Server,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Rocket,
  ExternalLink,
  Send,
  Trophy,
  Terminal,
  BrainCircuit,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ---------------- Data ---------------- */

const ROLES = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Machine Learning Explorer",
  "Cloud Computing Learner",
  "Cybersecurity Enthusiast",
];

const FLOAT_ICONS = ["Python", "React", "Flask", "MongoDB", "AWS", "TensorFlow", "PyTorch", "Git", "GitHub"];

const STATS = [
  { label: "CGPA", value: 9.4, suffix: "/10" },
  { label: "Projects", value: 2, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "+" },
  { label: "Hackathons", value: 2, suffix: "" },
];

const SKILLS: { group: string; items: { name: string; level: number }[] }[] = [
  {
    group: "Programming",
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "C", level: 78 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "React.js", level: 82 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Python", level: 88 },
      { name: "Flask", level: 84 },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    group: "AI & ML",
    items: [
      { name: "TensorFlow", level: 78 },
      { name: "PyTorch", level: 80 },
      { name: "NumPy", level: 88 },
      { name: "Pandas", level: 86 },
      { name: "Matplotlib", level: 82 },
      { name: "Seaborn", level: 78 },
      { name: "Keras", level: 76 },
    ],
  },
  {
    group: "Cloud",
    items: [
      { name: "AWS", level: 74 },
      { name: "Google Cloud", level: 72 },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
    ],
  },
];

const CORE_SUBJECTS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Computer Networks",
  "Operating Systems",
  "Cloud Computing",
  "Artificial Intelligence",
  "Machine Learning",
];

const SOFT_SKILLS = ["Problem Solving", "Communication", "Teamwork"];

const SERVICES = [
  { icon: Layout, title: "Full Stack Web Development", desc: "End-to-end web applications with modern stacks." },
  { icon: Code2, title: "Frontend Development", desc: "Responsive, accessible interfaces with React." },
  { icon: Server, title: "Backend Development", desc: "Robust APIs powered by Python & Flask." },
  { icon: BrainCircuit, title: "AI & ML Solutions", desc: "Intelligent systems using PyTorch & TensorFlow." },
  { icon: Cloud, title: "Cloud Deployment", desc: "Scalable deployments on AWS & Google Cloud." },
  { icon: Database, title: "Database Design", desc: "Efficient schemas on MongoDB & MySQL." },
  { icon: Shield, title: "Cybersecurity Aware Dev", desc: "Security-first mindset in every layer." },
];

const PROJECTS = [
  {
    title: "AI-Powered Virtual Companion",
    subtitle: "Emotional Support Chatbot",
    description:
      "An AI conversational chatbot that detects emotions and generates empathetic, context-aware responses using NLP.",
    features: ["Emotion Detection", "Transformer Model", "Context-aware", "NLP Pipeline", "Fine-tuned FLAN-T5"],
    tech: ["Python", "PyTorch", "Hugging Face", "Google Colab", "NLP"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live Demo", href: "#" },
      { label: "Case Study", href: "#" },
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Custom Form Builder",
    subtitle: "Google Forms Clone",
    description:
      "Online form platform to create, share, collect responses, and export as CSV — with a full response dashboard.",
    features: ["Dynamic Builder", "Multiple Q Types", "Response Dashboard", "CSV Export", "Unique Share Links"],
    tech: ["Python", "Flask", "MongoDB", "HTML", "CSS"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
      { label: "Docs", href: "#" },
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const CERTIFICATIONS = [
  { name: "Artificial Intelligence Fundamentals", org: "IBM SkillsBuild", date: "August 2025" },
  { name: "Google Cloud Career Launchpad — Generative AI Leader", org: "Google Cloud", date: "2025" },
  { name: "MongoDB Python Developer", org: "MongoDB", date: "February 2026" },
  { name: "Master Generative AI & ChatGPT", org: "Udemy", date: "September 2025" },
  { name: "Generative AI Guide — DALL·E, ChatGPT, Creativity with AI", org: "Udemy", date: "December 2025" },
  { name: "Deep Learning — Elite + Silver (73%)", org: "NPTEL · IIT Ropar", date: "April 2026" },
];

const HACKATHONS = [
  {
    name: "HackVerse",
    host: "Sai Vidya Institute of Technology",
    project: "Tourist Recommendation System — Android App built with Flutter",
    result: "Participant",
  },
  {
    name: "CideCode Hackathon",
    host: "PES University",
    project:
      "EchoMark — a digital investigation platform aggregating public info about a suspect across online platforms using Flask + React.",
    result: "Shortlisted Team & Final Participant",
  },
];

const ACHIEVEMENTS = [
  "Elite + Silver in NPTEL Deep Learning",
  "IBM SkillsBuild Internship",
  "Shortlisted in CideCode Hackathon",
  "High Academic Performance — CGPA 9.4",
  "6+ Professional Certifications",
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/* ---------------- Helpers ---------------- */

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-cyan">
            <Sparkles className="h-3 w-3" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-4xl font-extrabold md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? current.slice(0, cur.length - 1) : current.slice(0, cur.length + 1),
      );
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const isFloat = value % 1 !== 0;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(isFloat ? +(eased * value).toFixed(1) : Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Background ---------------- */

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#050816" }} />
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.2 265 / 60%), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.22 300 / 60%), transparent 70%)",
          animationDelay: "5s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.14 210 / 60%), transparent 70%)",
          animationDelay: "10s",
        }}
      />
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = "rgba(59,130,246,0.6)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

/* ---------------- Nav ---------------- */

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 120;
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(n.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto" : ""
        }`}
        style={scrolled ? { maxWidth: "72rem" } : undefined}
      >
        <a href="#home" className="flex items-center gap-2 py-2 font-display text-lg font-extrabold">
          <span className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
            <span className="text-white">V</span>
          </span>
          <span className="gradient-text">Vyshini</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "oklch(1 0 0 / 8%)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{n.label}</span>
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-lg glass p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="flex h-5 w-5 flex-col justify-center gap-1">
            <span className="h-0.5 w-full bg-foreground" />
            <span className="h-0.5 w-full bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="glass mx-4 mt-2 flex flex-col rounded-2xl p-3 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------- Sections ---------------- */

function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <Particles />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span className="tracking-widest uppercase text-muted-foreground">Available for Opportunities</span>
          </div>
          <p className="mb-2 text-lg text-muted-foreground">Hello, I'm</p>
          <h1 className="text-5xl leading-[1.05] font-extrabold md:text-7xl">
            <span className="gradient-text">Vyshini B M</span>
          </h1>
          <div className="mt-4 flex items-center gap-2 font-mono text-lg md:text-2xl">
            <span className="text-cyan">&gt;</span>
            <span className="text-foreground">{role}</span>
            <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-purple" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a passionate Full Stack Developer with a strong interest in Artificial Intelligence, Machine
            Learning, Cloud Computing, and Cybersecurity. I build innovative solutions that solve real-world
            problems while continuously learning emerging technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-cyan"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/vyshini-bm-141179326" },
              { icon: Github, href: "https://github.com/vyshini" },
              { icon: Terminal, href: "https://leetcode.com/u/Vyshini/" },
              { icon: Trophy, href: "https://www.hackerrank.com/profile/vyshinigowda" },
              { icon: Mail, href: "mailto:vyshinigowda@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:scale-110 hover:border-cyan/50 hover:text-cyan"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div
            className="relative grid h-full w-full place-items-center rounded-full border border-white/10"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.65 0.2 265 / 30%), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.65 0.22 300 / 30%), transparent 60%)",
            }}
          >
            <div className="grid h-3/4 w-3/4 place-items-center rounded-full glass-strong animate-pulse-glow">
              <BrainCircuit className="h-24 w-24 text-cyan" strokeWidth={1.2} />
            </div>
            {FLOAT_ICONS.map((label, i) => {
              const angle = (i / FLOAT_ICONS.length) * Math.PI * 2;
              const r = 46;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <motion.div
                  key={label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono backdrop-blur-md"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Introduction">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.5fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-xs"
        >
          <div
            className="absolute -inset-3 rounded-3xl opacity-70 blur-2xl"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="gradient-border relative h-full w-full overflow-hidden rounded-3xl">
            <img
              src={profileAsset.url}
              alt="Portrait of Vyshini B M"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
              <p className="font-display text-lg font-bold text-foreground">Vyshini B M</p>
              <p className="text-xs text-muted-foreground">CSE · SVIT</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm an enthusiastic{" "}
            <span className="text-foreground">Computer Science Engineering</span> student passionate about
            software development, AI, and emerging technologies. I approach every problem with curiosity and a
            drive to build things that matter.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Strong problem-solving mindset",
              "Passion for continuous learning",
              "Interest in real-world software",
              "Curiosity-driven developer",
              "Continuous improvement mindset",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-3xl font-extrabold gradient-text">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 glass rounded-2xl p-5 text-sm text-muted-foreground">
            Currently interning at{" "}
            <span className="font-semibold text-foreground">IBM SkillsBuild</span> — gaining industry exposure
            in software engineering, AI fundamentals & collaborative development.
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function EducationExperience() {
  const items = [
    {
      icon: GraduationCap,
      title: "Bachelor of Engineering — CSE",
      org: "Sai Vidya Institute of Technology",
      when: "Graduating 2027 · CGPA 9.4 / 10",
      desc: "Building strong foundations in DSA, systems, AI/ML and modern web development.",
    },
    {
      icon: Briefcase,
      title: "IBM SkillsBuild Internship",
      org: "IBM",
      when: "1 Month · Ongoing",
      desc: "Practical industry exposure in software engineering, AI fundamentals & industry best practices.",
    },
  ];
  return (
    <Section id="journey" title="Education & Experience" eyebrow="My Journey">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-primary/60 to-purple/60 md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full glass md:left-1/2 md:-translate-x-1/2">
                  <it.icon className="h-4 w-4 text-cyan" />
                </div>
                <div className="glass rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-cyan">{it.when}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-foreground">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.org}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Technical Skills" eyebrow="Toolbox">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 font-display text-lg font-bold gradient-text">{group.group}</h3>
            <div className="space-y-3">
              {group.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="mb-4 font-display text-lg font-bold gradient-text">Core Subjects</h3>
          <div className="flex flex-wrap gap-2">
            {CORE_SUBJECTS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="mb-4 font-display text-lg font-bold gradient-text">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" title="Services" eyebrow="What I Do">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors hover:border-cyan/40"
          >
            <div
              className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div
              className="relative mb-4 grid h-12 w-12 place-items-center rounded-xl"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <s.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="relative font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Selected Work">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-8"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-40`} />
            <div className="relative">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan">{p.subtitle}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-foreground">{p.title}</h3>
                </div>
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Rocket className="h-5 w-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tech
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md px-2 py-0.5 font-mono text-xs text-cyan"
                      style={{ background: "oklch(0.78 0.14 210 / 10%)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
                  >
                    {l.label} <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" title="Certifications" eyebrow="Credentials">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group glass flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5">
              <Award className="h-5 w-5 text-cyan" />
            </div>
            <p className="text-xs uppercase tracking-widest text-cyan">{c.date}</p>
            <h3 className="mt-1 font-display text-base font-bold text-foreground">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            <button className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-cyan/50 group-hover:text-cyan">
              View Certificate <ExternalLink className="h-3 w-3" />
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Hackathons() {
  return (
    <Section id="hackathons" title="Hackathons" eyebrow="Competitions">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {HACKATHONS.map((h, i) => (
          <motion.div
            key={h.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{h.name}</h3>
                <p className="text-xs text-muted-foreground">{h.host}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{h.project}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs text-cyan">
                {h.result}
              </span>
              <button className="text-xs text-muted-foreground hover:text-cyan">Certificate →</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="mb-6 text-center font-display text-2xl font-bold gradient-text">Achievements</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <Sparkles className="mx-auto mb-2 h-5 w-5 text-purple" />
              <p className="text-xs text-foreground">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CodingProfiles() {
  const profiles = [
    { name: "GitHub", stat: "Active Contributor", icon: Github, href: "https://github.com/vyshini" },
    { name: "LeetCode", stat: "Problem Solver", icon: Terminal, href: "https://leetcode.com/u/Vyshini/" },
    { name: "HackerRank", stat: "Coding Enthusiast", icon: Trophy, href: "https://www.hackerrank.com/profile/vyshinigowda" },
  ];
  return (
    <Section id="profiles" title="Coding Profiles" eyebrow="Where I Code">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 text-center transition-colors hover:border-cyan/40"
          >
            <div
              className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <p.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.stat}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs text-cyan">
              Visit profile <ExternalLink className="h-3 w-3" />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim() || "New portfolio contact",
          message: form.message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      console.error("EmailJS send failed", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const sending = status === "sending";

  return (
    <Section id="contact" title="Get in Touch" eyebrow="Contact">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "vyshinigowda@gmail.com", href: "mailto:vyshinigowda@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 8073124732", href: "tel:+918073124732" },
            { icon: MapPin, label: "Location", value: "Rajanukunte, Yelahanka, Bengaluru - 560064" },
            { icon: Linkedin, label: "LinkedIn", value: "vyshini-bm-141179326", href: "https://www.linkedin.com/in/vyshini-bm-141179326" },
            { icon: Github, label: "GitHub", value: "github.com/vyshini", href: "https://github.com/vyshini" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-start gap-4 glass rounded-2xl p-4 transition-colors hover:border-cyan/40"
            >
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-cyan">{c.label}</p>
                <p className="truncate text-sm text-foreground">{c.value}</p>
              </div>
            </a>
          ))}
          <div className="glass overflow-hidden rounded-2xl">
            <iframe
              title="Bengaluru Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C13.05%2C77.65%2C13.15&amp;layer=mapnik"
              className="h-56 w-full opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-3xl p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                disabled={sending}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/60 disabled:opacity-60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                disabled={sending}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/60 disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              disabled={sending}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/60 disabled:opacity-60"
              placeholder="Let's collaborate"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={onChange}
              disabled={sending}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan/60 disabled:opacity-60"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            {status === "sent" ? "Message Sent!" : status === "sending" ? "Sending..." : status === "error" ? "Failed — try again" : (
              <>
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          Designed & Developed by <span className="gradient-text font-semibold">Vyshini B M</span>
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/vyshini-bm-141179326" },
            { icon: Github, href: "https://github.com/vyshini" },
            { icon: Mail, href: "mailto:vyshinigowda@gmail.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 grid h-12 w-12 place-items-center rounded-full text-white transition-transform hover:scale-110"
      style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left"
      style={{ scaleX, background: "var(--gradient-primary)" }}
    />
  );
}

/* ---------------- Root ---------------- */

function Portfolio() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <EducationExperience />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Hackathons />
      <CodingProfiles />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
