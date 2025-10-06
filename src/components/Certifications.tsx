import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'IBM Skills Build',
      year: '2025'
    },
    {
      title: 'Two-Day International Seminar on Recent Trends in Emerging Technologies (RTET - 2024)',
      issuer: 'SKFGI',
      year: '2024'
    },
    {
      title: 'Generative AI Bootcamp',
      issuer: 'Google Cloud & Hack2Skill',
      year: '2025'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100 dark:border-slate-600"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-md">
                  <Award className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-center mb-2">
                {cert.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm mb-1">{cert.issuer}</p>
              <p className="text-blue-600 dark:text-blue-400 text-center text-sm font-medium">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
