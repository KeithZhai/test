import { AnimatedLogo } from '@/components/AnimatedLogo'
import { DemoSelector } from '@/components/DemoSelector'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-grey">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <AnimatedLogo />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Web Operations
              <br />
              <span className="text-orange-burst">Infrastructure</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Your AI needs to do more than search.
              <br />
              <span className="font-semibold text-foreground">It needs to act.</span>
            </p>

            {/* Primary CTA */}
            <div className="mb-20">
              <Link
                href="#api-access"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-burst rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-burst/90 hover:scale-105 hover:shadow-xl"
              >
                Get API Access
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selector Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-warm-grey to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              See how companies are using TinyFish to automate web operations at scale
            </p>
          </div>

          <div className="flex justify-center">
            <DemoSelector />
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              See It in Action
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
              Watch how TinyFish transforms complex web operations into simple API calls
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-warm-grey to-orange-burst/10 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-burst/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-orange-burst rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-foreground/60">Video Demo Coming Soon</p>
                <p className="text-sm text-foreground/40 mt-2">Integration with demo video will be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-burst to-orange-burst/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join the companies automating web operations with TinyFish
          </p>
          <Link
            href="#api-access"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-orange-burst bg-white rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get API Access
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
