import React from 'react'

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah L.', quote: 'This community has transformed my approach to personal finance. I feel more confident and in control than ever before.' },
    { name: 'Michael R.', quote: 'The resources and support here are unmatched. I've learned so much and it's made a real difference in my financial life.' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-green-500">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials