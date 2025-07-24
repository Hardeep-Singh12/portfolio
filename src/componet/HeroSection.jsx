import React from 'react'

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center text-center px-4 sm:px-10 py-12 bg-black text-white font-bold min-h-screen gap-10'>

      {/* Avatar Circle */}
      <div className='h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 bg-gray-300 rounded-full'></div>

      {/* Hero Text */}
      <div className='leading-relaxed max-w-3xl'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl mb-4'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-600'>
            I'm Hardeep,
          </span>{' '}
          Building responsive UIs <br className='hidden sm:block' /> from the heart of India.
        </h1>
        <p className='text-sm sm:text-lg text-gray-400 font-normal'>
          Front-End Developer from Haryana, India — 1 year into the industry and always <br className='hidden sm:block' />
          growing through code and curiosity.
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6'>
        <button className='border-2 border-pink-600 transition-all duration-300 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 hover:border-white'>
          Contact Me
        </button>
        <button className='border-2 rounded-full px-6 py-2 hover:border-pink-400 transition-all duration-300'>
          My Resume
        </button>
      </div>

    </div>
  )
}

export default HeroSection