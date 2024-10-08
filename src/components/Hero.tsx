import React from 'react'

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Master Your Finances</h1>
        <p className="text-xl mb-8">Join our community and take control of your financial future</p>
        <a href="#" className="bg-white text-green-500 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition duration-300">Get Started</a>
      </div>
    </section>
  )
}

export default Hero