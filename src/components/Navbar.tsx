
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-gray-900">SQLai</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
            How it works
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
            Pricing
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
            Sign in
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg button-shine">
            <span className="mr-1">Get started</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
