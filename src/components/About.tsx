import { GraduationCap } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.Tech in CSE (AI & ML)',
      institution: 'SKFGI',
      year: 'Expected 2026',
      grade: 'CGPA: 7.0/10'
    },
    {
      degree: '12th Grade',
      institution: 'Hind Motor High School',
      year: '2022',
      grade: '87.5%'
    },
    {
      degree: '10th Grade',
      institution: 'Hind Motor High School',
      year: '2020',
      grade: '60%'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. My journey in technology is driven by curiosity and the desire to create innovative solutions that make a real-world impact.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With a strong foundation in both AI/ML and Web Development, I enjoy working on projects that bridge the gap between intelligent systems and user-friendly applications. I'm constantly learning and exploring new technologies to expand my skill set.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not coding, I actively participate in college cultural events, college clubs and community service through NSS, believing in holistic development and giving back to the community.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-200 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.year}</span>
                      <span className="text-slate-500 dark:text-slate-400">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
