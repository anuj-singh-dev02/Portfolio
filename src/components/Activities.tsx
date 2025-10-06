import { Users, Heart } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      title: 'Member of IT Club',
      organization: 'SKFGI',
      icon: Users,
      description: 'Active participation in technical workshops and coding events'
    },
    {
      title: 'Member of NSS Unit',
      organization: 'SKFGI',
      icon: Heart,
      description: 'Contributing to community service and social welfare initiatives'
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Extra-Curricular Activities
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <Icon className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{activity.organization}</p>
                    <p className="text-slate-600 dark:text-slate-300">{activity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
