"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Github, Linkedin, Mail, Download, ExternalLink, ChevronRight, Code, Database, Cloud, Server, Briefcase, GraduationCap, Award, MapPin, Calendar, X, Command } from 'lucide-react';

// Types
interface Personal {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  responseTime: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string;
  achievements: string[];
  tech: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  images?: string[];
  featured?: boolean;
}

interface Skills {
  backend: string[];
  frontend: string[];
  devops: string[];
  databases: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  cgpa?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

// Data
const data = {
  personal: {
    name: "Kunal More",
    title: "Backend Architect | System Designer",
    tagline: "Building scalable enterprise systems with modern tech",
    location: "Mumbai, India",
    email: "morekunal1335@gmail.com",
    github: "Voldemond",
    linkedin: "kunal-more13",
    availability: "Open to opportunities",
    responseTime: "24 hours"
  },
  
  experience: [
    {
      company: "Quadient (FCI)",
      role: "Software Developer",
      period: "May 2025 - Present",
      logo: "Q",
      description: "Backend-integrated enterprise workflows for customer communication systems",
      achievements: [
        "Developed automated XML/CSV data transformation pipelines",
        "Integrated RESTful APIs for dynamic data processing",
        "Managed production deployments and change requests"
      ],
      tech: ["Java", "Groovy", "REST APIs", "SQL", "XML"]
    },
    {
      company: "Aayacare Private Limited",
      role: "React Developer / Manual Tester",
      period: "July 2023 - Sept 2023",
      logo: "A",
      description: "Frontend development and QA testing internship",
      achievements: [
        "Enhanced React components with REST API integration",
        "Performed cross-browser and regression testing",
        "Assisted in AWS-based deployments"
      ],
      tech: ["React", "JavaScript", "AWS", "REST APIs"]
    }
  ],
  
  projects: [
    {
      name: "WealthWise",
      description: "Full-stack trading platform with JWT authentication and microservices architecture",
      tech: ["Spring Boot", "Hibernate", "MySQL", "JWT", "REST APIs"],
      github: "https://github.com/Voldemond/WEALTHWISE",
      images: [
      "/projects/wealthwise/1.png",
      "/projects/wealthwise/2.png",
      "/projects/wealthwise/3.png",
      "/projects/wealthwise/4.png",
      "/projects/wealthwise/5.png",
      "/projects/wealthwise/6.png",
      "/projects/wealthwise/7.png",
      "/projects/wealthwise/8.png",
      "/projects/wealthwise/9.png",
      "/projects/wealthwise/10.png"
    ],
      featured: true
    },
    
    {
      name: "Car Rental Service",
      description: "CRUD-based backend application with booking and management features",
      tech: ["Java", "MySQL", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Voldemond/Webistan",
    images: [
      "/projects/webistan/1.png",
      "/projects/webistan/2.png"
    ],
    },
    {
      name: "PasteKaro",
      description: "Modern paste-sharing platform with real-time collaboration and syntax highlighting",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Voldemond/pastekaro",
      live: "https://pastekaro.vercel.app",
    images: [
      "/projects/pastekaro/1.png",
      "/projects/pastekaro/2.png",
      "/projects/pastekaro/3.png",
      "/projects/pastekaro/4.png",
      "/projects/pastekaro/5.png"
    ],
      featured: true
    },
    {
      name: "Real Estate Blockchain",
      description: "Blockchain-integrated backend for secure property transactions",
      tech: ["Java", "Blockchain", "Smart Contracts", "APIs"],
      github: "https://github.com/Voldemond/Web-3.0",
    images: [
      "/projects/Web/1.png",
      "/projects/Web/2.png",
      "/projects/Web/3.png",
      "/projects/Web/4.png",
      "/projects/Web/5.png",
      "/projects/Web/6.png"
    ],
    },
  {
    name: "Dinezzy",
    description: "Full-stack food ordering and restaurant management platform with real-time features",
    tech: ["React", "Firebase", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Voldemond/Dinezzy",
    live: "https://dinezzy-48f0f.web.app/home",
    images: [
      "/projects/dinezzy/1.png",
      "/projects/dinezzy/2.png",
      "/projects/dinezzy/3.png",
      "/projects/dinezzy/4.png",
      "/projects/dinezzy/5.png",
      "/projects/dinezzy/6.png"
    ],
    featured: true
  }
  ],
  
  skills: {
    backend: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Groovy"],
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS"],
    devops: ["Docker", "Jenkins", "AWS", "CI/CD", "Linux", "Vercel"],
    databases: ["MySQL", "MongoDB"]
  },
  
  education: [
    {
      degree: "PG-DAC",
      institution: "CDAC",
      year: "2025",
      description: "Advanced Computing"
    },
    {
      degree: "B.E. Information Technology",
      institution: "University of Mumbai",
      year: "2024",
      cgpa: "7.9",
      description: ""
    }
  ]
};
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden mb-4 group">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-blue-400 w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Command Palette Component
// Enhanced Command Palette Component
const CommandPalette = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      // Welcome message
      if (output.length === 0) {
        setOutput([
          '╔════════════════════════════════════════════════╗',
          '║     Welcome to Kunal\'s Portfolio Terminal     ║',
          '║           Type "help" for commands            ║',
          '╚════════════════════════════════════════════════╝',
          ''
        ]);
      }
    }
  }, [isOpen]);
  
  const commands = {
    help: {
      description: 'Show all available commands',
      execute: () => [
        '',
        '╭─ Available Commands ──────────────────────────╮',
        '│',
        '│  Navigation:',
        '│    about          - Show profile information',
        '│    projects       - List all projects',
        '│    experience     - Show work experience',
        '│    education      - Show education details',
        '│    skills         - Display tech stack',
        '│',
        '│  Information:',
        '│    whoami         - Display current user info',
        '│    resume         - View resume details',
        '│    contact        - Show contact information',
        '│',
        '│  Projects:',
        '│    open <name>    - Open project (e.g., open wealthwise)',
        '│    demo <name>    - View live demo',
        '│',
        '│  Social:',
        '│    github         - Open GitHub profile',
        '│    linkedin       - Open LinkedIn profile',
        '│    email          - Copy email address',
        '│',
        '│  System:',
        '│    clear          - Clear terminal',
        '│    history        - Show command history',
        '│    theme          - Toggle color theme',
        '│    stats          - Show GitHub statistics',
        '│    ascii          - Display ASCII art',
        '│    exit           - Close terminal',
        '│',
        '╰───────────────────────────────────────────────╯',
        ''
      ]
    },
    
    whoami: {
      description: 'Display user information',
      execute: () => [
        '',
        '┌─ User Information ────────────────────────────┐',
        `│ Name:     ${data.personal.name}`,
        `│ Role:     ${data.personal.title}`,
        `│ Location: ${data.personal.location}`,
        `│ Email:    ${data.personal.email}`,
        `│ GitHub:   github.com/${data.personal.github}`,
        `│ Status:   ${data.personal.availability}`,
        '└───────────────────────────────────────────────┘',
        ''
      ]
    },
    
    about: {
      description: 'Show profile information',
      execute: () => [
        '',
        '📋 About Kunal More',
        '─'.repeat(50),
        'Software developer specializing in backend development,',
        'cloud technologies, and modern web engineering.',
        '',
        '🎯 Focus Areas:',
        '  • Enterprise System Architecture',
        '  • Microservices & REST APIs',
        '  • Cloud-Native Solutions',
        '  • Full-Stack Development',
        '',
        '💼 Currently: Software Developer @ Quadient',
        ''
      ]
    },
    
    projects: {
      description: 'List all projects',
      execute: () => {
        const lines = [
          '',
          '📁 Projects Portfolio',
          '═'.repeat(50),
          ''
        ];
        data.projects.forEach((p, i) => {
          lines.push(`${i + 1}. ${p.name}${p.featured ? ' ⭐' : ''}`);
          lines.push(`   ${p.description}`);
          lines.push(`   Tech: ${p.tech.join(', ')}`);
          if (p.live) lines.push(`   🌐 Live: ${p.live}`);
          lines.push('');
        });
        lines.push('💡 Tip: Use "open <project-name>" to view details');
        lines.push('');
        return lines;
      }
    },
    
    experience: {
      description: 'Show work experience',
      execute: () => {
        const lines = [
          '',
          '💼 Work Experience',
          '═'.repeat(50),
          ''
        ];
        data.experience.forEach((exp, i) => {
          lines.push(`${i + 1}. ${exp.role} @ ${exp.company}`);
          lines.push(`   ${exp.period}`);
          lines.push(`   ${exp.description}`);
          lines.push('');
          lines.push('   Key Achievements:');
          exp.achievements.forEach(ach => {
            lines.push(`   • ${ach}`);
          });
          lines.push('');
          lines.push(`   Technologies: ${exp.tech.join(', ')}`);
          lines.push('');
        });
        return lines;
      }
    },
    
    education: {
      description: 'Show education details',
      execute: () => {
        const lines = [
          '',
          '🎓 Education',
          '═'.repeat(50),
          ''
        ];
        data.education.forEach((edu, i) => {
          lines.push(`${i + 1}. ${edu.degree}`);
          lines.push(`   ${edu.institution} (${edu.year})`);
          if (edu.cgpa) lines.push(`   CGPA: ${edu.cgpa}`);
          if (edu.description) lines.push(`   ${edu.description}`);
          lines.push('');
        });
        return lines;
      }
    },
    
    skills: {
      description: 'Display tech stack',
      execute: () => [
        '',
        '⚡ Technical Skills',
        '═'.repeat(50),
        '',
        '🔹 Backend:',
        `   ${data.skills.backend.join(' • ')}`,
        '',
        '🔹 Frontend:',
        `   ${data.skills.frontend.join(' • ')}`,
        '',
        '🔹 DevOps & Cloud:',
        `   ${data.skills.devops.join(' • ')}`,
        '',
        '🔹 Databases:',
        `   ${data.skills.databases.join(' • ')}`,
        ''
      ]
    },
    
    contact: {
      description: 'Show contact information',
      execute: () => [
        '',
        '📬 Contact Information',
        '═'.repeat(50),
        '',
        `📧 Email:    ${data.personal.email}`,
        `🔗 LinkedIn: linkedin.com/in/${data.personal.linkedin}`,
        `💻 GitHub:   github.com/${data.personal.github}`,
        '',
        `⏱️  Response Time: ${data.personal.responseTime}`,
        `✅ Status: ${data.personal.availability}`,
        ''
      ]
    },
    
    resume: {
      description: 'View resume details',
      execute: () => [
        '',
        '📄 Resume Summary',
        '═'.repeat(50),
        '',
        '💼 Experience:',
        ...data.experience.map(e => `   • ${e.role} @ ${e.company}`),
        '',
        '🎓 Education:',
        ...data.education.map(e => `   • ${e.degree} - ${e.institution}`),
        '',
        '💡 Download full resume from the hero section!',
        ''
      ]
    },
    
    github: {
      description: 'Open GitHub profile',
      execute: () => {
        window.open(`https://github.com/${data.personal.github}`, '_blank');
        return ['', `✓ Opening GitHub profile: github.com/${data.personal.github}`, ''];
      }
    },
    
    linkedin: {
      description: 'Open LinkedIn profile',
      execute: () => {
        window.open(`https://linkedin.com/in/${data.personal.linkedin}`, '_blank');
        return ['', `✓ Opening LinkedIn profile: linkedin.com/in/${data.personal.linkedin}`, ''];
      }
    },
    
    email: {
      description: 'Copy email address',
      execute: () => {
        navigator.clipboard.writeText(data.personal.email);
        return ['', `✓ Email copied to clipboard: ${data.personal.email}`, ''];
      }
    },
    
    stats: {
      description: 'Show GitHub statistics',
      execute: () => [
        '',
        '📊 GitHub Statistics',
        '═'.repeat(50),
        '',
        '📁 Public Repositories: 15+',
        '⭐ Total Stars: Growing...',
        '🔱 Username: Voldemond',
        '💻 Primary Language: Java',
        '🌟 Featured Projects: 5',
        '',
        '🔗 Visit: github.com/Voldemond',
        ''
      ]
    },
    
    history: {
      description: 'Show command history',
      execute: () => {
        if (commandHistory.length === 0) {
          return ['', '📜 No command history yet', ''];
        }
        const lines = ['', '📜 Command History', '─'.repeat(50), ''];
        commandHistory.forEach((cmd, i) => {
          lines.push(`${i + 1}. ${cmd}`);
        });
        lines.push('');
        return lines;
      }
    },
    
    ascii: {
      description: 'Display ASCII art',
      execute: () => [
        '',
        '    ██╗  ██╗██╗   ██╗███╗   ██╗ █████╗ ██╗     ',
        '    ██║ ██╔╝██║   ██║████╗  ██║██╔══██╗██║     ',
        '    █████╔╝ ██║   ██║██╔██╗ ██║███████║██║     ',
        '    ██╔═██╗ ██║   ██║██║╚██╗██║██╔══██║██║     ',
        '    ██║  ██╗╚██████╔╝██║ ╚████║██║  ██║███████╗',
        '    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝',
        '',
        '        🚀 Backend Architect | System Designer',
        ''
      ]
    },
    
    theme: {
      description: 'Toggle color theme',
      execute: () => ['', '🎨 Theme toggle coming soon!', ''],
    },
    
    clear: {
      description: 'Clear terminal',
      execute: () => null
    },
    
    exit: {
      description: 'Close terminal',
      execute: () => null
    }
  };
  
  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;
    
    // Add to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    
    const parts = cmd.trim().toLowerCase().split(' ');
    const command = parts[0];
    const args = parts.slice(1);
    
    // Handle special commands
    if (command === 'clear') {
      setOutput([]);
      setQuery('');
      return;
    }
    
    if (command === 'exit') {
      onClose();
      return;
    }
    
    // Handle open <project>
    if (command === 'open' && args.length > 0) {
      const projectName = args.join(' ');
      const project = data.projects.find(p => 
        p.name.toLowerCase().includes(projectName)
      );
      
      if (project) {
        window.open(project.github, '_blank');
        setOutput([...output, `$ ${cmd}`, '', `✓ Opening ${project.name} on GitHub...`, '']);
      } else {
        setOutput([...output, `$ ${cmd}`, '', `✗ Project "${projectName}" not found`, '']);
      }
      setQuery('');
      return;
    }
    
    // Handle demo <project>
    if (command === 'demo' && args.length > 0) {
      const projectName = args.join(' ');
      const project = data.projects.find(p => 
        p.name.toLowerCase().includes(projectName) && p.live
      );
      
      if (project && project.live) {
        window.open(project.live, '_blank');
        setOutput([...output, `$ ${cmd}`, '', `✓ Opening ${project.name} live demo...`, '']);
      } else {
        setOutput([...output, `$ ${cmd}`, '', `✗ No live demo available for "${projectName}"`, '']);
      }
      setQuery('');
      return;
    }
    
    // Execute command
    if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands].execute();
      if (result === null) return; // For clear/exit
      setOutput([...output, `$ ${cmd}`, ...result]);
    } else {
      setOutput([
        ...output, 
        `$ ${cmd}`,
        '',
        `✗ Command not found: ${command}`,
        '  Type "help" for available commands',
        ''
      ]);
    }
    
    setQuery('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(query);
    } else if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setQuery(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setQuery('');
        } else {
          setHistoryIndex(newIndex);
          setQuery(commandHistory[newIndex]);
        }
      }
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-950 rounded-lg w-full max-w-4xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 font-mono text-sm">kunal@portfolio:~$</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Terminal Output */}
        <div className="p-6 h-[600px] overflow-y-auto font-mono text-sm bg-gray-950">
          {output.map((line, i) => (
            <div 
              key={i} 
              className={`
                ${line.startsWith('$') ? 'text-green-400 mt-3 mb-1' : ''}
                ${line.startsWith('✓') ? 'text-green-400' : ''}
                ${line.startsWith('✗') ? 'text-red-400' : ''}
                ${line.startsWith('💡') || line.startsWith('🔗') ? 'text-blue-400' : ''}
                ${line.includes('═') || line.includes('─') || line.includes('│') || line.includes('╔') || line.includes('╗') || line.includes('╚') || line.includes('╝') || line.includes('┌') || line.includes('┐') || line.includes('└') || line.includes('┘') || line.includes('├') || line.includes('┤') || line.includes('╭') || line.includes('╮') || line.includes('╰') || line.includes('╯') ? 'text-gray-500' : 'text-gray-300'}
              `}
            >
              {line || '\u00A0'}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-green-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none caret-green-400"
              placeholder="Type 'help' for commands..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.key === '/') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/20" />
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float ${p.duration}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      
      <nav className="fixed top-0 w-full backdrop-blur-md bg-gray-900/50 border-b border-gray-800 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-blue-400 font-bold">{'<KM />'}</div>
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors text-sm"
          >
            <Command className="w-4 h-4" />
            <span className="text-gray-400">Press ⌘K</span>
          </button>
        </div>
      </nav>
      
      <div className="relative pt-20">
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl text-center space-y-8">
            <div className="font-mono text-blue-400 animate-pulse">
              {'> KUNAL_MORE.init()'}
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Backend Architect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                System Designer
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building scalable enterprise systems with Java, Spring Boot, and modern cloud technologies.
              Currently crafting customer communication workflows at Quadient.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="/resume.pdf" 
                download="Kunal_More_Resume.pdf"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
            
            <div className="flex gap-6 justify-center text-gray-400">
              <a href={`https://github.com/${data.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={`https://linkedin.com/in/${data.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${data.personal.email}`} className="hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Terminal className="text-blue-400" />
              System Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400 hover:border-purple-400 transition-all duration-300 hover:scale-110">
  <img 
    src="/profile.jpg" 
    alt="Kunal More" 
    className="w-full h-full object-cover"
  />
</div>
                    <div>
                      <div className="font-bold text-lg">{data.personal.name}</div>
                      <div className="text-gray-400 text-sm">{data.personal.title}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      {data.personal.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Briefcase className="w-4 h-4 text-green-400" />
                      {data.personal.availability}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-4 h-4 text-purple-400" />
                      Response time: {data.personal.responseTime}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">2+</div>
                      <div className="text-xs text-gray-400">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">8+</div>
                      <div className="text-xs text-gray-400">Projects Built</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">10+</div>
                      <div className="text-xs text-gray-400">Technologies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">100%</div>
                      <div className="text-xs text-gray-400">Commitment</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Software developer with strong expertise in backend development, cloud technologies, and modern web engineering.
                  Currently working at Quadient on enterprise customer communication management systems.
                </p>
                <p>
                  I specialize in building scalable, reliable applications using Java, Spring Boot, and microservices architecture.
                  My experience spans from automated workflow development to full-stack web applications with React and REST APIs.
                </p>
                <p>
                  Passionate about clean code, system design, and exploring emerging technologies like blockchain and cloud-native solutions.
                </p>
                
                <div className="pt-4">
                  <h3 className="font-semibold mb-3 text-white">Currently Exploring</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Spring', 'Hibernate', 'Apache Structs'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Code className="text-blue-400" />
              Tech Stack
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-blue-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold">Backend</h3>
                </div>
                <div className="space-y-2">
                  {data.skills.backend.map(skill => (
                    <div key={skill} className="text-sm text-gray-400">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {data.skills.frontend.map(skill => (
                    <div key={skill} className="text-sm text-gray-400">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-green-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-6 h-6 text-green-400" />
                  <h3 className="font-semibold">DevOps</h3>
                </div>
                <div className="space-y-2">
                  {data.skills.devops.map(skill => (
                    <div key={skill} className="text-sm text-gray-400">{skill}</div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-orange-400" />
                  <h3 className="font-semibold">Databases</h3>
                </div>
                <div className="space-y-2">
                  {data.skills.databases.map(skill => (
                    <div key={skill} className="text-sm text-gray-400">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              Experience
            </h2>
            
            <div className="space-y-8">
              {data.experience.map((exp, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-blue-500 transition-all">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {exp.logo}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <div className="text-blue-400">{exp.company}</div>
                        </div>
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-gray-300">
                            <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="projects" className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Github className="text-blue-400" />
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projects.map((project, i) => (
                <div
                  key={i}
                  className={`bg-gray-900/50 border rounded-lg p-6 backdrop-blur hover:scale-105 transition-all ${
                    project.featured ? 'border-blue-500 md:col-span-2' : 'border-gray-800 hover:border-blue-500'
                  }`}
                >
                  {project.featured && (
                    <div className="inline-block px-2 py-1 bg-blue-500/20 border border-blue-500 rounded text-xs text-blue-300 mb-3">
                      Featured
                    </div>
                  )}
                  {project.images && project.images.length > 0 && (
        <ImageCarousel images={project.images} />
      )}
                  
                  <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    {project.live && (
                      
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live 
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.education.map((edu, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur hover:border-blue-500 transition-colors">
                  <div className="font-bold text-lg mb-1">{edu.degree}</div>
                  <div className="text-blue-400 mb-2">{edu.institution}</div>
                  {edu.description && <div className="text-gray-400 text-sm mb-2">{edu.description}</div>}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                    {edu.cgpa && <span>• CGPA: {edu.cgpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Build Something Incredible</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Open to discussing new opportunities, collaborations, or just chatting about technology.
              I typically respond within 24 hours.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              
              <a 
                href={`mailto:${data.personal.email}`}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
              
              <a 
                href={`https://linkedin.com/in/${data.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              
              <a 
                href={`https://github.com/${data.personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              💡 Pro tip: Press <kbd className="px-2 py-1 bg-gray-800 rounded">Cmd/Ctrl + K</kbd> or <kbd className="px-2 py-1 bg-gray-800 rounded">/</kbd> to open the command terminal
            </div>
          </div>
        </section>
        
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-400">
            <div>© 2026 Kunal More. Built with React + Next.js</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </div>
      
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        kbd {
          box-shadow: 0 2px 0 rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}