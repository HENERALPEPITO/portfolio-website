'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors">
            Carl Benedict
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`${pathname === '/projects' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 transition-colors`}
            >
              Projects
            </Link>
            <Link 
              href="/tech-stack" 
              className={`${pathname === '/tech-stack' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 transition-colors`}
            >
              Tech Stack
            </Link>
            <Link 
              href="/contact" 
              className={`${pathname === '/contact' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
