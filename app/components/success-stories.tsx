'use client'

import { useState } from 'react'
import { X, Star } from 'lucide-react'

export function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null)

  const stories = [
    { name: 'Chioma Adeyinka', role: 'Product Manager', company: 'Tech Corp', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chioma', story: 'careerdev helped me transition from developer to PM in 6 months. The frameworks are game-changing!' },
    { name: 'Tunde Okafor', role: 'Senior Engineer', company: 'StartUp Labs', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde', story: 'The skill architecture sessions cleared my career path. Now leading a team of 8!' },
    { name: 'Blessing Njoku', role: 'Business Owner', company: 'Self-Employed', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing', story: 'Started my own venture after the masterclass. Best decision ever!' },
    { name: 'Adekunle Taiwo', role: 'Solutions Architect', company: 'Finance Corp', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adekunle', story: 'Got promoted within 3 months. The confidence and clarity I gained was invaluable.' },
    { name: 'Amara Obi', role: 'Director of Strategy', company: 'Global Ventures', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara', story: 'The networking connections alone were worth it. Found my co-founder here!' },
    { name: 'Oluwaseun Adebayo', role: 'Head of Product', company: 'Tech Unicorn', rating: 5, image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oluwaseun', story: 'Transformed my career and life. Highly recommended for anyone serious about growth.' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-16 scroll-reveal">Success Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((story, i) => (
          <button
            key={i}
            onClick={() => setSelectedStory(i)}
            className="glass-card text-left group hover:border-cyan-400/50 scroll-reveal transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-12 h-12 rounded-full"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-white">{story.name}</h3>
                <p className="text-sm text-cyan-400">{story.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 line-clamp-3 mb-3">{story.story}</p>
            <div className="flex">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Story Modal */}
      {selectedStory !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-cyan-400/30 rounded-2xl max-w-md w-full shadow-2xl" style={{animation: 'fadeIn 0.3s ease-out'}}>
            <div className="p-8">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={stories[selectedStory].image}
                  alt={stories[selectedStory].name}
                  className="w-16 h-16 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-white text-lg">{stories[selectedStory].name}</h3>
                  <p className="text-cyan-400">{stories[selectedStory].role} at {stories[selectedStory].company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(stories[selectedStory].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{stories[selectedStory].story}</p>
              <button
                onClick={() => setSelectedStory(null)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all"
              >
                Start Your Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
