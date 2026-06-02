'use client'

import { useState, useEffect, useRef, Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Menu, X, ChevronRight, Play, MessageCircle, Mail, Linkedin, Instagram, Youtube, Users, Target, Zap, TrendingUp, Award, ArrowRight, Sparkles, BookOpen, Lightbulb, Network, CheckCircle, Heart } from 'lucide-react'

// Lazy load heavy sections with dynamic import
const SuccessStories = dynamic(() => import('./components/success-stories').then(mod => ({ default: mod.SuccessStories })), { loading: () => <div className="h-96" /> })
const HangoutsSection = dynamic(() => import('./components/hangouts').then(mod => ({ default: mod.HangoutsSection })), { loading: () => <div className="h-96" /> })

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  // Single scroll listener
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite'}}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite 2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl" style={{animation: 'blob 7s infinite 4s'}}></div>
      </div>

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border border-cyan-400/30 rounded-2xl p-8 max-w-md w-full shadow-2xl" style={{animation: 'fadeIn 0.5s ease-out'}}>
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">Welcome to careerdev</h2>
              <p className="text-gray-300 text-lg mb-2">Career Development Hangout</p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Transform your career with expert-led strategies, powerful masterclasses, and access to a thriving community of professionals.
              </p>
              <button
                onClick={() => setShowWelcome(false)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
              >
                Explore <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="glass fixed top-0 left-0 right-0 z-50 mx-auto border-b border-cyan-400/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">careerdev</div>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 md:top-auto md:right-auto bg-slate-900/95 md:bg-transparent p-4 md:p-0`}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {['Journey', 'Features', 'Stories', 'Author', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero-content" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Master Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Career</span> Journey
              </h1>
              <p className="text-xl text-gray-300 mb-8">Join thousands of professionals transforming their careers with expert mentorship and proven strategies.</p>
              <div className="flex gap-4">
                <a href="https://wa.me/234" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Start Your Journey
                </a>
                <a href="#hangouts" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Explore Hangouts
                </a>
              </div>
            </div>
            <div className="relative">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/c7lebXXCyRg?autoplay=1&mute=1&modestbranding=1"
                title="Career Development"
                className="rounded-xl shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Transformation Journey */}
        <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Your Transformation Journey</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Awareness', desc: 'Understand your current position' },
                { step: '02', title: 'Strategy', desc: 'Create your roadmap' },
                { step: '03', title: 'Execution', desc: 'Take action with support' },
                { step: '04', title: 'Impact', desc: 'Achieve your goals' }
              ].map((item, i) => (
                <div key={i} className="glass-card group hover:border-cyan-400/50">
                  <div className="text-4xl font-bold text-cyan-400/30 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Elite Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, title: 'Life-Changing Masterclass', desc: 'Transform your thinking' },
                { icon: Lightbulb, title: 'Powerful Solutions', desc: 'Direct practical answers' },
                { icon: Users, title: 'Clarity & Direction', desc: 'For young professionals' },
                { icon: Target, title: 'Overcome Anxiety', desc: 'Fear and confusion handled' },
                { icon: TrendingUp, title: 'Avoid Mistakes', desc: 'Career transition wisdom' },
                { icon: Network, title: 'Powerful Networking', desc: 'High productivity gains' }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="glass-card group">
                    <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Lazy Loaded Sections */}
        <section id="hangouts" className="py-20 px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="max-w-6xl mx-auto h-96 bg-slate-800 rounded-xl animate-pulse" />}>
            <HangoutsSection />
          </Suspense>
        </section>

        {/* Success Stories */}
        <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="max-w-6xl mx-auto h-96 bg-slate-800 rounded-xl animate-pulse" />}>
            <SuccessStories />
          </Suspense>
        </section>

        {/* Gbenga Profile */}
        <section id="author" className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Meet The Convener</h2>
            <div className="glass-card">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGr1OoUPZ06Gw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709222099942?e=1781740800&v=beta&t=hQPTSWZ5lg-Pa73NwJSLglKH_bv3XjzhffnB8LA1R4w"
                    alt="Gbenga Obafemi"
                    className="rounded-xl w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-2">Gbenga Obafemi</h3>
                  <p className="text-cyan-400 text-lg mb-4">Career Development Expert & Mentor</p>
                  <p className="text-gray-300 mb-6">With 10+ years of experience in career coaching, Gbenga has helped 500+ professionals transition into fulfilling careers. Specializing in skill architecture and career strategy.</p>
                  <div className="flex gap-4">
                    <a href="https://wa.me/234" className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://linkedin.com" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://instagram.com" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://youtube.com" className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors">
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-300 mb-8">Join our community and start your journey today.</p>
            <a href="https://wa.me/234" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
              Book a Strategy Session <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900/50 border-t border-cyan-400/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="font-bold text-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">careerdev</p>
                <p className="text-gray-400">Transform your career with expert guidance.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a></li>
                  <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
                  <li><a href="#hangouts" className="hover:text-cyan-400 transition-colors">Hangouts</a></li>
                  <li><a href="#author" className="hover:text-cyan-400 transition-colors">Author</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="https://wa.me/234" className="hover:text-cyan-400 transition-colors">WhatsApp</a></li>
                  <li><a href="https://linkedin.com" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
                  <li><a href="https://youtube.com" className="hover:text-cyan-400 transition-colors">YouTube</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@careerdev.com</li>
                  <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Support</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-cyan-400/10 pt-8">
              <p className="text-center text-gray-400">© 2024 careerdev. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/234"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}
