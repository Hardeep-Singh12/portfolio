import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const list = [
    { name: "Home", link: "." },
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#services" },
    { name: "Projects", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className='w-full sticky top-0 z-50 bg-black text-white px-4 sm:px-10 py-4'>
      <div className='flex items-center justify-between'>

        {/* Logo */}
        <div className='text-2xl sm:text-3xl text-amber-700 font-bold hover:text-amber-600 transition-all duration-300'>
          Hardeep Singh
        </div>

        {/* Hamburger Icon */}
        <div className='text-white text-3xl sm:hidden cursor-pointer' onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex gap-6 text-lg items-center'>
          {list.map((item) => (
            <li key={item.name}>
              <a href={item.link} className='hover:underline hover:text-amber-500 text-zinc-400 transition-all duration-300'>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className='border border-zinc-600 px-4 py-1 rounded-md bg-gradient-to-r from-amber-500 to-pink-600 hover:scale-105 transition-all duration-300 text-white'>
              Contact Me
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className='flex flex-col gap-4 text-lg mt-4 sm:hidden'>
          {list.map((item) => (
            <li key={item.name}>
              <a href={item.link} className='block text-zinc-400 hover:text-amber-500 transition-all duration-300'>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className='w-full border border-zinc-600 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 to-pink-600 hover:scale-105 transition-all duration-300 text-white'>
              Contact Me
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar