import { Play } from 'lucide-react'

export function HangoutsSection() {
  const hangouts = [
    {
      id: 1,
      title: 'Career Strategy Fundamentals',
      video: 'EMYS_Pb6tqw',
      views: '2.5K'
    },
    {
      id: 2,
      title: 'Skill Stacking for Success',
      video: 'c7lebXXCyRg',
      views: '1.8K'
    },
    {
      id: 3,
      title: 'Landing Your Dream Role',
      video: 'g_zVphWgNSw',
      views: '2.1K'
    },
    {
      id: 4,
      title: 'Building Personal Authority',
      video: 'bRlRovolVgs',
      views: '1.5K'
    }
  ]

  const galleryPosts = [
    {
      id: 1,
      title: 'Master Class Gallery',
      image: '/gallery/gallery1.jpg',
      link: 'https://web.facebook.com/media/set/?set=a.10241100420784997&type=3'
    },
    {
      id: 2,
      title: 'Convener Session',
      image: '/gallery/gallery2.jpg',
      link: 'https://www.facebook.com/share/18sFSa4AKr/?mibextid=wwXIfr'
    },
    {
      id: 3,
      title: 'Participants',
      image: '/gallery/gallery3.jpg',
      link: 'https://www.facebook.com/share/1BvzeeR1Ka/?mibextid=wwXIfr'
    },
    {
      id: 4,
      title: 'Master Class Session',
      image: '/gallery/gallery4.jpg',
      link: 'https://www.facebook.com/share/1BGHkw2pp7/?mibextid=wwXIfr'
    },
    {
      id: 5,
      title: 'Convener Session',
      image: '/gallery/gallery5.jpg',
      link: 'https://www.facebook.com/share/1XVtfPxWW8/?mibextid=wwXIfr'
    },
    {
      id: 6,
      title: 'Convener Session',
      image: '/gallery/gallery6.jpg',
      link: 'https://www.facebook.com/share/1D5VB1G25c/?mibextid=wwXIfr'
    },
    {
      id: 7,
      title: 'Master Class Session',
      image: '/gallery/gallery7.jpg',
      link: 'https://www.facebook.com/share/14exGw6taRx/?mibextid=wwXIfr'
    },
    {
      id: 8,
      title: 'Master Class Session',
      image: '/gallery/gallery8.jpg',
      link: 'https://www.facebook.com/share/18i8hgzxqq/?mibextid=wwXIfr'
    },
    {
      id: 9,
      title: 'Master Class Session',
      image: '/gallery/gallery9.jpg',
      link: 'https://www.facebook.com/share/1AZ6REgxir/?mibextid=wwXIfr'
    },
    {
      id: 10,
      title: 'MC Session',
      image: '/gallery/gallery10.jpg',
      link: 'https://www.facebook.com/share/1BDpe5TWFA/?mibextid=wwXIfr'
    },
    {
      id: 11,
      title: 'Participants',
      image: '/gallery/gallery11.jpg',
      link: 'https://www.facebook.com/share/18QWDYz9vM/?mibextid=wwXIfr'
    },
    {
      id: 12,
      title: 'Convener',
      image: '/gallery/gallery12.jpg',
      link: 'https://www.facebook.com/share/1KeQqhVT57/?mibextid=wwXIfr'
    },
    {
      id: 13,
      title: 'Participant',
      image: '/gallery/gallery13.jpg',
      link: 'https://www.facebook.com/share/18yJD9dHuo/?mibextid=wwXIfr'
    },
    {
      id: 14,
      title: 'Praise Award',
      image: '/gallery/gallery14.jpg',
      link: 'https://www.facebook.com/share/1ZC9tvKwv5/?mibextid=wwXIfr'
    },
    {
      id: 15,
      title: 'Gabriel Award',
      image: '/gallery/gallery15.jpg',
      link: 'https://www.facebook.com/share/1BFEuzG72A/?mibextid=wwXIfr'
    },
    {
      id: 16,
      title: 'Gabriel Award',
      image: '/gallery/gallery16.jpg',
      link: 'https://www.facebook.com/share/18nnYg3LXT/?mibextid=wwXIfr'
    },
    {
      id: 17,
      title: 'Stephen Award',
      image: '/gallery/gallery17.jpg',
      link: 'https://www.facebook.com/share/1CfDzvnX7R/?mibextid=wwXIfr'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-16 scroll-reveal">
        Previous Hangouts
      </h2>

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

            <h3 className="font-bold text-white text-sm mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-gray-400">
              {item.views} views
            </p>
          </a>
        ))}
      </div>

      {/* FACEBOOK GALLERY */}
      <div className="mt-24 scroll-reveal">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Master Class Gallery
          </h3>

          <a
            href="https://web.facebook.com/media/set/?set=a.10241100420784997&type=3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300"
          >
            View More Photos →
          </a>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex gap-6 w-max"
            style={{
              animation: 'scrollGallery 50s linear infinite'
            }}
          >
            {[...galleryPosts, ...galleryPosts].map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-w-[280px] md:min-w-[340px] lg:min-w-[380px]"
              >
                <div className="glass-card overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-white font-semibold text-sm">
                      {item.title}
                    </h4>

                    <p className="text-cyan-400 text-xs mt-2">
                      Click to view on Facebook
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scrollGallery {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}
