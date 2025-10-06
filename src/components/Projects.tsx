import { ExternalLink, Github, ShoppingCart, Eye, CheckSquare } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Freshly-Yours',
      icon: ShoppingCart,
      description: 'A supply-chain web app for street food vendors using MERN, reducing sourcing issues and ensuring fair pricing.',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Vendor & Supplier Authentication',
        'Smart Order Management',
        'Inventory & Demand Forecasting',
        'Delivery & Tracking'
      ],
      githubUrl: 'https://github.com/anuj-singh-dev02',
      demoUrl: '#'
    },
    {
      title: 'Gender & Age Detection',
      icon: Eye,
      description: 'Real-time face detection and demographic classification using pre-trained deep learning models.',
      tech: ['Python', 'OpenCV', 'Deep Learning', 'NumPy'],
      features: [
        'Real-time Face Detection',
        'Age Classification',
        'Gender Recognition',
        'Pre-trained CNN Models'
      ],
      githubUrl: 'https://github.com/anuj-singh-dev02',
      demoUrl: '#'
    },
    {
      title: 'Task List Web Page',
      icon: CheckSquare,
      description: 'Responsive task management web app with interactive UI and local storage persistence.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      features: [
        'Add & Edit Tasks',
        'Delete Functionality',
        'Local Storage Persistence',
        'Responsive Design'
      ],
      githubUrl: 'https://github.com/anuj-singh-dev02',
      demoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-600"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-md">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="font-bold text-2xl text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800">
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all hover:shadow-md"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    <a
                      href={project.demoUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-md"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/anuj-singh-dev02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <Github size={24} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
