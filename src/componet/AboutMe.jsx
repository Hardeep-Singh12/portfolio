import React from 'react'
import Bootstrap from '../img/bootstrap.png'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import physics from '../img/physics.png'
import tailwind from '../img/tailwind.png'
import photoshop from '../img/photoshop.png'
import java from '../img/java.png'
import sql from '../img/database-storage.png'

function AboutMe() {
 let data = [
    { icon: html, name: 'HTML' },
    { icon: css, name: 'CSS' },
    { icon: js, name: 'JavaScript' },
    { icon: physics, name: 'React' },
    { icon: Bootstrap, name: 'Bootstrap' },
    { icon: tailwind, name: 'Tailwind CSS' },
    { icon: java, name: 'Java' },
    { icon: photoshop, name: 'Photoshop' },
    { icon: sql, name: 'SQL' }
  ]

  return (
    <>
      <div className='flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl min-h-screen py-10 bg-black text-white font-bold'>
        <h1>My Skills</h1>

        <div className='flex flex-wrap justify-center gap-6 px-4 sm:px-10 md:px-20 mt-8'>
          {data.map((item) => (
            <div
              key={item.name}
              className='flex flex-col items-center justify-center gap-2 p-4 sm:p-6 transition-transform duration-500 hover:scale-105'
            >
              <img
                src={item.icon}
                alt={item.name}
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain hover:border-2 hover:p-1 rounded-xl'
              />
              <h4 className='text-sm sm:text-base md:text-lg mt-2'>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutMe