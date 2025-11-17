import { AnimatedLogo } from '@/components/AnimatedLogo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-warm-grey">
      <main className="flex flex-col items-center justify-center gap-8 px-8 py-16">
        <AnimatedLogo />

        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground">
            Developer-Focused Website
          </h1>
          <p className="text-lg text-foreground/80">
            Built with Next.js 15, TypeScript, Tailwind CSS, and Payload CMS
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/admin"
            className="flex h-12 items-center justify-center gap-2 rounded-lg bg-orange-burst px-8 text-white font-semibold transition-all hover:bg-orange-burst/90 hover:scale-105"
          >
            Admin Panel
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-lg border-2 border-foreground/20 px-8 font-semibold transition-all hover:border-orange-burst hover:text-orange-burst"
          >
            Documentation
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-orange-burst mb-2">Next.js 15</h3>
            <p className="text-foreground/70">
              Modern React framework with App Router and server components
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-orange-burst mb-2">Payload CMS</h3>
            <p className="text-foreground/70">
              Headless CMS for powerful content management
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-orange-burst mb-2">Framer Motion</h3>
            <p className="text-foreground/70">
              Beautiful animations and interactions
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
