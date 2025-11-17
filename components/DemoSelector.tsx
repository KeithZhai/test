'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface UseCase {
  id: string
  title: string
  company: string
  description: string
  icon: string
}

const useCases: UseCase[] = [
  {
    id: 'hotel',
    title: 'Hotel Inventory Aggregation',
    company: 'Google',
    description: 'Automatically collect and aggregate hotel availability and pricing data from multiple sources in real-time.',
    icon: '🏨',
  },
  {
    id: 'market',
    title: 'Market Intelligence at Scale',
    company: 'DoorDash',
    description: 'Monitor competitor pricing, menu changes, and market trends across thousands of restaurants simultaneously.',
    icon: '📊',
  },
  {
    id: 'job',
    title: 'Job Application Automation',
    company: 'Jobright',
    description: 'Streamline job applications by automatically filling forms, tracking submissions, and managing candidate pipelines.',
    icon: '💼',
  },
]

export function DemoSelector() {
  const [selectedCase, setSelectedCase] = useState<string>(useCases[0].id)

  const currentCase = useCases.find((uc) => uc.id === selectedCase) || useCases[0]

  return (
    <div className="w-full max-w-5xl">
      {/* Use Case Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {useCases.map((useCase) => (
          <button
            key={useCase.id}
            onClick={() => setSelectedCase(useCase.id)}
            className={`flex-1 p-4 rounded-lg text-left transition-all duration-300 ${
              selectedCase === useCase.id
                ? 'bg-orange-burst text-white shadow-lg scale-105'
                : 'bg-white text-foreground hover:bg-warm-grey hover:shadow-md'
            }`}
          >
            <div className="text-2xl mb-2">{useCase.icon}</div>
            <div className="font-semibold text-sm sm:text-base">{useCase.title}</div>
            <div className={`text-xs mt-1 ${selectedCase === useCase.id ? 'text-white/80' : 'text-foreground/60'}`}>
              {useCase.company} use case
            </div>
          </button>
        ))}
      </div>

      {/* Use Case Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{currentCase.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{currentCase.title}</h3>
              <p className="text-foreground/70 text-sm">
                <span className="font-semibold text-orange-burst">{currentCase.company}</span> use case
              </p>
            </div>
          </div>
          <p className="text-foreground/80 text-lg leading-relaxed">{currentCase.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
