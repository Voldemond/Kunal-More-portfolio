import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Terminal className="w-20 h-20 text-blue-400" />
        </div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-400">Page not found</p>
        <div className="font-mono text-gray-500">
          {'> error: ENOENT: no such file or directory'}
        </div>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}