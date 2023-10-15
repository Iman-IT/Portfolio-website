import React from 'react'
import '../components/GlobalStyles.css'
function Footer() {
  return (
      <div className='contianer bg-warning'>
          <div className="row mx-auto d-flex align-content-center align-items-center">
              <div className="col-12 col-md-4 pt-4">
                 
                  <h3><img src="logo1.png" alt="logo" width={70} height={70} className='img-fluid logo mt-2' /></h3>
          <h4>Iman IT Frontend Developer</h4>
                  {/* <a href="#"> <FaTwitter className=' img-fluid icons' /></a>
            <a href="#"> <FaLinkedinIn className='img-fluid icons' /></a>    
            <a href="#"> <FaFacebook className='img-fluid icons' /></a>  */}
                  <p>@{new Date().getFullYear()}. All Rights Reserved</p>
              </div>

              <div className="col-12 col-md-4 pt-4">
                  <h5 >Quick Links:</h5>
                  <a href="/">Home</a> <br />
                  <a href="/skills">Skills</a> <br />
                  <a href="/projects">Projects</a> <br />
                  <a href="/about" target="_self">About Me</a> <br />
                  <a href="/contactus" target="_blank">Contact us</a>
                  
              </div>
              <div className="col-12 col-md-4 pt-4">
                  <h5>Stay in Touch</h5> 
                  <img src="twitter.png" width={50} height={50} alt="" />
                  <img src="link.png" width={40} height={40} alt="" />

                  </div>

          </div>
    </div>
  )
}

export default Footer