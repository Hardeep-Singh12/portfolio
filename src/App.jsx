import React from 'react'
import Navbar from './componet/Navbar'
import HeroSection from './componet/HeroSection'
import AboutMe from './componet/AboutMe'
import Project from './componet/Project'
import ContactMe from './componet/contactMe'

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutMe ></AboutMe>
      <Project/>
      <ContactMe/>
       <footer>
        
       </footer>


    </div>
  )
}

export default App