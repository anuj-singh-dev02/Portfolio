import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-4 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
              Anuj Kumar Singh
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
              Aspiring CSE (AI/ML) Student | Web Developer
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Passionate about applying AI/ML and web development to build intelligent and engaging applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Info
            </a>
            <a
              href="https://drive.google.com/file/d/1nQUw2OneW2EF3JWjeps9LvSLx4YvsubC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/anuj-singh-dev02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:shadow-md hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/anujkumarsingh02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:shadow-md hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
            <a
              href="mailto:anujsingh4388@gmail.com"
              className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:shadow-md hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={24} className="text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700">
              <img
                src="/profile pic.png"
                alt="Anuj Kumar Singh"
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
