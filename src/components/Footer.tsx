import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-400 text-center flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Arfa Rida
          </p>
          <p className="text-gray-500">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
