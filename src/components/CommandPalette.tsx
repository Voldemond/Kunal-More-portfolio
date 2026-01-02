"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';
import { data } from '@/lib/data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().toLowerCase().split(' ');
    const command = parts[0];
    
    let result: string[] = [];
    
    switch(command) {
      case 'help':
        result = [
          '> Available commands:',
          '  ls projects     - List all projects',
          '  whoami         - Show profile info',
          '  cat resume     - View resume details',
          '  git stats      - Show GitHub stats',
          '  clear          - Clear terminal',
          '  exit           - Close terminal'
        ];
        break;
      case 'ls':
        if (parts[1] === 'projects') {
          result = data.projects.map(p => `  📁 ${p.name} - ${p.description}`);
        } else {
            result = ['  Usage: ls projects'];
        }
        break;
      case 'whoami':
        result = [
          `> ${data.personal.name}`,
          `  ${data.personal.title}`,
          `  📍 ${data.personal.location}`,
          `  ✉️  ${data.personal.email}`
        ];
        break;
      case 'cat':
        if (parts[1] === 'resume') {
          result = [
            '> Experience:',
            ...data.experience.map(e => `  • ${e.role} at ${e.company}`),
            '> Education:',
            ...data.education.map(e => `  • ${e.degree} - ${e.institution}`)
          ];
        }
        break;
      case 'git':
        if (parts[1] === 'stats') {
          result = [
            '> GitHub Statistics:',
            '  📊 Public Repos: 8+',
            '  ⭐ Total Stars: Building...',
            '  🔱 Username: Voldemond'
          ];
        }
        break;
      case 'clear':
        setOutput([]);
        setQuery('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        result = [`> Command not found: ${command}`, '  Type "help" for available commands'];
    }
    
    setOutput([...output, `$ ${cmd}`, ...result]);
    setQuery('');
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-2xl shadow-2xl border border-gray-700">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-mono text-sm">terminal@portfolio</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 h-96 overflow-y-auto font-mono text-sm">
          <div className="text-gray-400 mb-4">
            Welcome to Kunal's Portfolio Terminal! Type 'help' for commands.
          </div>
          
          {output.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-green-400 mt-2' : 'text-gray-300'}>
              {line}
            </div>
          ))}
          
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCommand(query);
                if (e.key === 'Escape') onClose();
              }}
              className="flex-1 bg-transparent text-white outline-none"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}