import React from 'react'
import { BookOpen, Users, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    { icon: <BookOpen className="h-12 w-12 text-green-500" />, title: 'Expert Resources', description: 'Access a wealth of financial knowledge curated by industry experts.' },
    { icon: <Users className="h-12 w-12 text-green-500" />, title: 'Supportive Community', description: 'Connect with like-minded individuals on their financial journey.' },
    { icon: <TrendingUp className="h-12 w-12 text-green-500" />, title: 'Personal Growth', description: 'Track your progress and celebrate financial milestones together.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Community?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features