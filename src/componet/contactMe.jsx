import React from 'react'

function ContactMe() {return (
    <>
      <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl flex justify-center items-center pt-24 bg-black text-white'>
        Contact Me
      </h1>

      <div className='flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-10 md:px-20 pt-16 bg-black text-gray-400 pb-12'>
        
        {/* Left Text Content */}
        <div className='flex flex-col gap-4 text-lg sm:text-xl md:text-2xl w-full lg:w-1/2'>
          <h1 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-amber-600 to-pink-600'>
            Let's talk
          </h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message
            about anything you want me to work on. You can contact me anytime.
          </p>
          <p>harseepsinghsardar@gmail.com</p>
          <p>+91-9253443662</p>
          <p>Haryana, India</p>
        </div>

        {/* Contact Form */}
        <form action="" className='flex flex-col text-lg sm:text-xl gap-4 w-full lg:w-[50%]'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter full name' className='text-black p-3 bg-gray-300 rounded-md' />

          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder='xyz@gmail.com' className='text-black bg-gray-300 p-3 rounded-md' />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" className='text-black p-3 bg-gray-300 h-40 rounded-md' placeholder='Your message...'></textarea>

          <button className='mt-2 border-2 border-pink-600 transition-all duration-300 p-3 rounded-full bg-gradient-to-r from-amber-500 to-pink-600 hover:border-neutral-800 text-white font-semibold'>
            Contact Me
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactMe