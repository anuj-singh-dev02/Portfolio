import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-slate-300 dark:text-slate-400">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Anuj Kumar Singh
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved to Anuj Kumar Singh.
        </p>
      </div>
    </footer>
  );
}
