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
      company: "FCI CCM ",
      role: "Quadient Software Developer",
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
// Spotlight Card Component
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// Scroll Reveal Component
interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RevealOnScroll = ({ children, className = "", ...props }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
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
    <div className="relative w-full h-48 bg-gray-950 rounded-lg overflow-hidden mb-4 group border border-gray-800">
      <img
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded text-[10px] font-mono border border-gray-700">
          {currentIndex + 1}/{images.length}
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


// Animated Terminal Component
const AnimatedTerminal = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const commands = [
    { cmd: '$ java -jar WealthWise.jar', color: 'text-orange-400' },
    { cmd: '$ npm run dev', color: 'text-green-400' },
    { cmd: '$ docker-compose up', color: 'text-blue-400' },
    { cmd: '$ git push origin main', color: 'text-purple-400' },
    { cmd: '$ mvn spring-boot:run', color: 'text-red-400' },
    { cmd: '$ kubectl apply -f deploy.yml', color: 'text-cyan-400' },
    { cmd: '$ mysql -u root -p', color: 'text-yellow-400' },
    { cmd: '$ aws s3 sync ./build s3://bucket', color: 'text-pink-400' },
  ];

  useEffect(() => {
    const command = commands[currentIndex].cmd;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < command.length) {
          setCurrentText(command.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % commands.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="font-mono flex items-center gap-2 h-6">
      <span className="text-green-400">{'>'}</span>
      <span className={commands[currentIndex].color}>
        {currentText}
        <span className="animate-pulse">▊</span>
      </span>
    </div>
  );
};

// CodeCompiler Component (Single Line Loop with Animated Dots)
const CodeCompiler = () => {
  const [stage, setStage] = useState(0);
  const [dots, setDots] = useState('');

  const stages = [
    { text: '> KUNAL_MORE.init()', color: 'text-cyan-400' },
    { text: '> Compiling Java bytecode', color: 'text-orange-400' },
    { text: '> Starting Spring Boot', color: 'text-green-400' },
    { text: '> Building React components', color: 'text-blue-400' },
    { text: '> Containerizing with Docker', color: 'text-blue-300' },
    { text: '> Deploying to AWS', color: 'text-yellow-400' },
    { text: '✓ System Ready!', color: 'text-green-400', noDots: true },
  ];

  useEffect(() => {
    // Reset dots when stage changes
    if (stages[stage].noDots) {
      setDots('');
      const timeout = setTimeout(() => {
        setStage((prev) => (prev + 1) % stages.length);
      }, 3000); // Keep "System Ready" longer
      return () => clearTimeout(timeout);
    } else {
      setDots('');
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (count <= 3) {
          setDots('.'.repeat(count));
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setStage((prev) => (prev + 1) % stages.length);
          }, 1000); // Pause before switching
        }
      }, 800); // Speed of each dot

      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <div className="font-mono text-sm md:text-base font-bold bg-gray-900/80 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-md shadow-2xl inline-flex items-center gap-3 min-w-[300px] justify-start">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
      </div>
      <div className="h-4 w-px bg-gray-700 mx-1" />
      <div className={`transition-colors duration-300 ${stages[stage].color}`}>
        {stages[stage].text}{dots}
        <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-current align-middle opacity-50"></span>
      </div>
    </div>
  );
};

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
            <div className="mb-8 flex justify-center">
              <CodeCompiler />
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

        <RevealOnScroll className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Terminal className="text-blue-400" />
              System Status
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Profile Card / Server Status */}
              <SpotlightCard className="md:col-span-1 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <img
                        src="/profile.jpg"
                        alt="Kunal More"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {data.personal.name}
                  </h3>
                  <div className="text-sm font-mono text-blue-300 mb-4">{data.personal.title}</div>

                  <div className="w-full space-y-3 font-mono text-xs text-left bg-black/20 p-4 rounded-lg border border-gray-800/50">
                    <div className="flex justify-between">
                      <span className="text-gray-500">LOC:</span>
                      <span className="text-gray-300">{data.personal.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">STATUS:</span>
                      <span className="text-green-400">{data.personal.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">UPTIME:</span>
                      <span className="text-blue-300">2.5 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">PING:</span>
                      <span className="text-yellow-300">24ms</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              {/* Stats & Description */}
              <div className="md:col-span-2 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Experience", value: "1 Year", color: "text-blue-400", icon: Briefcase },
                    { label: "Projects", value: "8+ Deployed", color: "text-green-400", icon: Server },
                    { label: "Tech Stack", value: "10+ Tools", color: "text-purple-400", icon: Database },
                    { label: "Commitment", value: "100%", color: "text-orange-400", icon: Award },
                  ].map((stat, i) => (
                    <SpotlightCard key={i} className="p-4 flex flex-col items-center justify-center text-center group hover:border-blue-500/50 transition-colors">
                      <stat.icon className={`w-6 h-6 mb-2 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                      <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                    </SpotlightCard>
                  ))}
                </div>

                <SpotlightCard className="p-6 relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Terminal className="w-24 h-24" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-300 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    /var/log/about_me.txt
                  </h3>
                  <div className="mb-4 opacity-80 scale-90 origin-top-left -ml-2">
                    <AnimatedTerminal />
                  </div>
                  <div className="space-y-4 font-mono text-sm text-gray-400 leading-relaxed relative z-10">
                    <p>
                      <span className="text-green-400">➜</span> Software developer with strong expertise in <span className="text-gray-200">backend development</span>, <span className="text-gray-200">cloud technologies</span>, and modern web engineering. Currently optimizing enterprise workflows at <span className="text-blue-300">Quadient</span>.
                    </p>
                    <p>
                      <span className="text-green-400">➜</span> I specialize in building scalable, reliable applications using <span className="text-orange-300">Java</span>, <span className="text-green-300">Spring Boot</span>, and microservices architecture.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="text-gray-500"># tags:</span>
                      {['CleanCode', 'SystemDesign', 'CloudNative', 'Blockchain'].map(tag => (
                        <span key={tag} className="text-blue-400/60 bg-blue-900/10 px-2 rounded hover:text-blue-300 hover:bg-blue-900/30 cursor-crosshair transition-all">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Code className="text-blue-400" />
              Tech Stack
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Backend', icon: Server, color: 'text-blue-400', skills: data.skills.backend },
                { name: 'Frontend', icon: Code, color: 'text-purple-400', skills: data.skills.frontend },
                { name: 'DevOps', icon: Cloud, color: 'text-green-400', skills: data.skills.devops },
                { name: 'Databases', icon: Database, color: 'text-orange-400', skills: data.skills.databases }
              ].map((category, idx) => (
                <SpotlightCard key={idx} className="p-6 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map(skill => (
                      <div key={skill} className="flex items-center gap-2 group/skill">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/skill:bg-current ${category.color.replace('text', 'text')}`} />
                        <span className="text-sm text-gray-400 group-hover/skill:text-gray-200 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              Experience
            </h2>

            <div className="space-y-8">
              {data.experience.map((exp, i) => (
                <SpotlightCard key={i} className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-2xl flex-shrink-0 text-blue-300">
                      {exp.logo}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                        <div>
                          <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                          <div className="text-blue-400 font-medium">{exp.company}</div>
                        </div>
                        <div className="text-sm font-mono text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700 w-fit">
                          <span className="mr-2">🗓️</span>
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, j) => (
                          <div key={j} className="flex items-start gap-3 text-sm text-gray-400 group">
                            <span className="text-green-400 mt-1 select-none">➜</span>
                            <span className="group-hover:text-gray-200 transition-colors">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(tech => (
                          <span key={tech} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="py-20 px-6 bg-gray-900/30" id="projects">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Github className="text-blue-400" />
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, i) => (
                <SpotlightCard
                  key={i}
                  className={`p-6 flex flex-col h-full ${project.featured ? 'md:col-span-2' : ''}`}
                >
                  <div className="mb-4 flex justify-between items-start">
                    <div>
                      {project.featured && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-[10px] text-yellow-300 mb-2 uppercase tracking-wide font-bold">
                          <Award className="w-3 h-3" /> Featured
                        </div>
                      )}
                      <h3 className="font-bold text-xl">{project.name}</h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors font-medium text-sm border border-green-500/30 px-2 py-0.5 rounded bg-green-500/10"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="mobile-relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {project.images && project.images.length > 0 && (
                    <ImageCarousel images={project.images} />
                  )}

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-800/80 border border-gray-700/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.education.map((edu, i) => (
                <SpotlightCard key={i} className="p-6">
                  <div className="font-bold text-lg mb-1">{edu.degree}</div>
                  <div className="text-blue-400 mb-4 font-medium">{edu.institution}</div>
                  {edu.description && <div className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.description}</div>}
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-mono border-t border-gray-800 pt-4">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                    {edu.cgpa && <span className="text-green-400/80">• CGPA: {edu.cgpa}</span>}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </RevealOnScroll>

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