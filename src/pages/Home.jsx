import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'
import '../components/GlobalStyles.css'
import Skills from './Skills'
import Projects from './Projects'
import Services from './Services'
import AboutUS from './AboutUS'
import ContactUs from './ContactUs'

function Home() {
  return (
    <>
    

      <div className="container text-white bg-light" id='home'>
      
        <img src="bg.jpg" alt="" className='img-fluid' id='main'/>

            <div className="row mx-auto description">
          <div className="col-12 col-md-6 px-5 px-3 ">
            <p>This is me</p>
            <h1 >Iman Aziz</h1>
            <p>The BS Computer Science 7th Semester Student.I am a frontend(React JS) Developer. I want to get industry knowledge and enhance my skills for that purpose i always looking online oppurtunities and Currently i am doing different interships with different companies</p>
            <a href="" className='btn text-white'> Hire me</a>
          </div>
          
          <div className="col-12 col-md-6">
          <img src="main1.png" alt="" className='img-fluid justify-content-center align-content-center' />
            </div>
     
        </div>
        
        
      </div>
      <Skills />
      <Projects />
      <Services />
      <AboutUS />
      <ContactUs />
    
    </>
  )
}

export default Home