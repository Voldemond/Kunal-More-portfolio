"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronRight, Code, Database, Cloud, Server, Briefcase, GraduationCap, Award, MapPin, Calendar, Terminal, Command } from 'lucide-react';
import { data } from '@/lib/data';
import CommandPalette from '@/components/CommandPalette';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function Portfolio() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
    
    // Keyboard shortcut
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
    <div className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">
      {/* Animated Background */}
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
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-gray-900/50 border-b border-gray-800 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-blue-400 font-bold">{'<KM />'}</div>
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors text-sm cursor-pointer"
          >
            <Command className="w-4 h-4" />
            <span className="text-gray-400">Press ⌘K</span>
          </button>
        </div>
      </nav>
      
      <div className="relative pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 -mt-20">
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
              <a href="/resume.pdf" target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2">
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
        
        {/* About Section */}
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-2xl font-bold">
                      KM
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
                    {['Spring', 'Hibernate', 'Apache Struts', 'Go', 'Rust'].map(tech => (
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
        
        {/* Tech Stack */}
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
        
        {/* Experience */}
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
        
        {/* Projects */}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Education */}
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
                  <div className="text-gray-400 text-sm mb-2">{edu.description}</div>
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
        
        {/* Contact */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Incredible</h2>
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
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-400">
            <div>© 2026 Kunal More. Built with React + Next.js</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}