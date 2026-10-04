'use client';

import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Globe, 
  Linkedin, 
  Twitter, 
  Briefcase, 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Star, 
  Award, 
  Edit3, 
  ExternalLink, 
  CheckCircle, 
  X,
  Terminal,
  Cpu,
  Server,
  Wrench,
  Sparkles
} from 'lucide-react';



// Custom GitHub SVG Icon to ensure compatible icon rendering across all lucide-react versions
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Md Anisur Rahman Shaon',
    title: 'Full-Stack Developer | MERN & Next.js',
    bio: 'Passionate Full-Stack Developer with expertise in modern web technologies. I love building scalable applications, clean UI/UX, and solving complex problems with React, Next.js, and Node.js.',
    location: 'Dhaka, Bangladesh',
    email: 'anisur.shaon@example.com',
    portfolio: 'https://shaon.dev',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    status: 'Open to Work',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  });

  const [activeTab, setActiveTab] = useState('about');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({ ...profile });

  const [skills] = useState({
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'PostgreSQL', 'JWT Authentication'],
    tools: ['Git & GitHub', 'Linux / Ubuntu', 'MikroTik', 'VS Code', 'Postman', 'Vercel', 'Docker']
  });

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability Platform',
      description: 'A full-stack web app helping users track carbon footprint, set sustainability goals, and compete in eco-friendly challenges.',
      tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      stars: 24,
      featured: true
    },
    {
      id: 2,
      title: 'DevPulse - Developer Community',
      description: 'Real-time discussion platform for developers featuring markdown editing, live code previews, and interactive voting.',
      tags: ['React', 'Express.js', 'Socket.io', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#',
      stars: 18,
      featured: true
    },
    {
      id: 3,
      title: 'Modern E-Commerce Store',
      description: 'Fast ecommerce storefront with Stripe payments, dynamic inventory management, and responsive admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      demoLink: '#',
      codeLink: '#',
      stars: 32,
      featured: false
    }
  ];

  const experiences = [
    {
      role: 'Full-Stack Developer (Freelance)',
      company: 'Self-Employed / Remote',
      period: '2023 - Present',
      description: 'Building custom web applications using Next.js, React, Node.js, and MongoDB for global clients. Specialized in optimized performance and UI responsiveness.'
    },
    {
      role: 'Junior Web Developer',
      company: 'Tech Solutions Ltd.',
      period: '2022 - 2023',
      description: 'Developed and maintained responsive user interfaces using HTML, CSS, JavaScript, and React. Collaborated with cross-functional teams.'
    }
  ];

  const education = [
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Polytechnic Institute',
      period: '2019 - 2023',
      description: 'Focused on core computer science fundamentals, web development, data structures, and networking principles.'
    }
  ];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile({ ...editFormData });
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-16">
      
      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          
          {/* Cover Photo */}
          <div className="h-48 sm:h-64 md:h-80 w-full relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900">
            <img 
              src={profile.coverPhoto} 
              alt="Cover" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Profile Details */}
          <div className="relative px-6 pb-6 pt-0 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between -mt-16 sm:-mt-20 md:-mt-24 mb-6 gap-4">
              
              {/* Avatar */}
              <div className="flex items-end gap-5">
                <div className="relative group">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl ring-4 ring-slate-950 overflow-hidden shadow-2xl bg-slate-800">
                    <img 
                      src={profile.avatar} 
                      alt={profile.name} 
                      className="w-full h-full object-cover transition transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute bottom-2 right-2 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
                  </span>
                </div>

                <div className="mb-2 hidden sm:block">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-3.5 h-3.5" /> {profile.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setEditFormData({ ...profile });
                    setIsEditModalOpen(true);
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition border border-slate-700/80 hover:border-slate-600 shadow-md"
                >
                  <Edit3 className="w-4 h-4 text-indigo-400" />
                  Edit Profile
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition shadow-lg shadow-indigo-600/30"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {profile.name}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="w-3 h-3" /> Pro Developer
                </span>
              </div>
              
              <p className="text-base sm:text-lg font-medium text-indigo-400">
                {profile.title}
              </p>

              <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
                {profile.bio}
              </p>

              {/* Meta information */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{profile.email}</span>
                </div>
                {profile.portfolio && (
                  <a href={profile.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-400 transition">
                    <Globe className="w-4 h-4 text-slate-500" />
                    <span>Website</span>
                  </a>
                )}
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition">
                  {/* <Linkedin className="w-4 h-4" /> */}
                </a>
                <a href={profile.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition">
                  {/* <Twitter className="w-4 h-4" /> */}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-xs text-slate-400">Projects Done</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2+ Yrs</p>
              <p className="text-xs text-slate-400">Experience</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-xs text-slate-400">Tech Stack</p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">70+</p>
              <p className="text-xs text-slate-400">GitHub Stars</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8">
          <div className="flex border-b border-slate-800 space-x-2 sm:space-x-8 overflow-x-auto">
            {[
              { id: 'about', label: 'About & Bio', icon: User },
              { id: 'skills', label: 'Skills & Tech', icon: Code },
              { id: 'projects', label: 'Projects', icon: FolderGit2 },
              { id: 'experience', label: 'Experience & Edu', icon: Briefcase }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-3 px-3 border-b-2 font-medium text-sm transition whitespace-nowrap ${
                    isActive 
                      ? 'border-indigo-500 text-indigo-400' 
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="py-6">
            
            {/* ABOUT TAB */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-400" /> Technical Background
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Hello! I'm Md Anisur Rahman Shaon, a web developer based in Dhaka, Bangladesh. I specialize in building modern, responsive, and performance-driven web applications using React, Next.js, and Node.js.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    My web development journey started during my Computer Engineering diploma, where I fell in love with turning complex logic into interactive, user-friendly digital experiences.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" /> Career Highlights
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">▸</span> Built 15+ modern web applications with React & Next.js.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">▸</span> Strong focus on responsive UI/UX and Tailwind CSS design.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-400">▸</span> Experienced in REST APIs and MongoDB backend integration.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-400" /> Quick Overview
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-xs text-slate-500 block">Main Focus</span>
                        <span className="text-slate-200 font-medium">Full-Stack Web</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">Primary Stack</span>
                        <span className="text-slate-200 font-medium">MERN / Next.js</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">Location</span>
                        <span className="text-slate-200 font-medium">Dhaka, Bangladesh</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">Availability</span>
                        <span className="text-emerald-400 font-medium">Open for hire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 text-indigo-400">
                    <Cpu className="w-5 h-5" />
                    <h3 className="font-semibold text-white">Frontend Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-medium rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    <Server className="w-5 h-5" />
                    <h3 className="font-semibold text-white">Backend & Database</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4 text-purple-400">
                    <Wrench className="w-5 h-5" />
                    <h3 className="font-semibold text-white">Tools & System</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-medium rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <span className="flex items-center gap-1 text-xs text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3 fill-amber-400" /> {project.stars}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                      <a href={project.demoLink} className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                      <a href={project.codeLink} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 font-medium">
                        <GithubIcon className="w-3.5 h-3.5" /> Source Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-indigo-400" /> Experience
                  </h3>
                  <div className="relative pl-6 space-y-6 border-l-2 border-slate-800">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                        <h4 className="font-semibold text-white">{exp.role}</h4>
                        <p className="text-xs text-indigo-400 font-medium">{exp.company} • {exp.period}</p>
                        <p className="text-sm text-slate-400 mt-2">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-emerald-400" /> Education
                  </h3>
                  <div className="relative pl-6 space-y-6 border-l-2 border-slate-800">
                    {education.map((edu, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-950" />
                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                        <p className="text-xs text-emerald-400 font-medium">{edu.institution} • {edu.period}</p>
                        <p className="text-sm text-slate-400 mt-2">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-indigo-400" /> Edit Profile Information
              </h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Title / Headline</label>
                <input 
                  type="text" 
                  value={editFormData.title}
                  onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Bio</label>
                <textarea 
                  rows="3"
                  value={editFormData.bio}
                  onChange={(e) => setEditFormData({ ...editFormData, bio: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Location</label>
                  <input 
                    type="text" 
                    value={editFormData.location}
                    onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Status</label>
                  <input 
                    type="text" 
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition shadow-lg shadow-indigo-600/30"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}