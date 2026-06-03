import { Play } from 'lucide-react'

export function HangoutsSection() {
  const hangouts = [
    { id: 1, title: 'Career Strategy Fundamentals', video: 'EMYS_Pb6tqw', views: '2.5K' },
    { id: 2, title: 'Skill Stacking for Success', video: 'c7lebXXCyRg', views: '1.8K' },
    { id: 3, title: 'Landing Your Dream Role', video: 'g_zVphWgNSw', views: '2.1K' },
    { id: 4, title: 'Building Personal Authority', video: 'bRlRovolVgs', views: '1.5K' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-16 scroll-reveal">Previous Hangouts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hangouts.map((item) => (
          <a
            key={item.id}
            href={`https://youtube.com/shorts/${item.video}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card relative overflow-hidden scroll-reveal hover:border-cyan-400/50"
          >
            <div className="aspect-video bg-slate-800 relative mb-4 rounded-lg overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${item.video}/sddefault.jpg`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" />
              </div>
            </div>
            <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.views} views</p>
          </a>
        ))}
      </div>
    </div>
  )
}
