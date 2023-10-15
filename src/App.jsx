import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import AboutUS from './pages/AboutUS'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



function App() {


  return (
    <>
 
      <Navbar />
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='services' element={<Services/> } />
        <Route path='aboutme' element={<AboutUS />} />
        <Route path='contactus' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
