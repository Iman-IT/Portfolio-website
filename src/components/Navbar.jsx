import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import '../components/GlobalStyles.css'
import { HashLink as Link } from 'react-router-hash-link'


function Navbar() {
  return (
      <>
      <nav className="navbar navbar-expand-lg text-white">
  <div className="container">
          <NavLink className="navbar-brand text-white fw-bold"  >
            <img src="logo1.png" alt="" width={50} height={60} />Iman IT
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5 py-2">
        <li className="nav-item text-white">
  <NavLink className='nav-link active'  aria-current="page" to="/"> Home </NavLink>
        </li>
        <li className="nav-item ">
                <Link className='nav-link' to="/#skills"  >Skills</Link>  </li>
              
              <li className="nav-item " >
                <Link className={'nav-link'} to={"/#projects"}>Projects</Link> </li>           
                  {/* <li className="nav-item ">  <NavLink className={'nav-link'} to={"experiance"}>Experiance</NavLink> </li> */}
                  <li className="nav-item ">  <Link className={'nav-link'} to={"/#services"}>Services</Link> </li>
                <li className="nav-item ">
                <Link className='nav-link' to={"/#aboutme"} id='btn' >About Me</Link>  </li>               
                          <li className="nav-item">
                <Link className='nav-link' to={"/#contactus"} id='btn'>Contact Us</Link>  </li>
              
                  
      </ul>
      </div>
  </div>
      </nav>
      
      </>
  )
}

export default Navbar