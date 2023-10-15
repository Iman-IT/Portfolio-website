import React from 'react'
import '../components/GlobalStyles.css'
function Projects ()
{

  return (
      <div className="container-fluid text-black bg-light" id='projects'>
              <h1 className='text-dark pt-5 pb-2'> Projects</h1>
          <div className="row mx-auto portfolio-imgs d-flex justify-content-center align-content-center">
              <div className="col-12 col-md-4">
                  <div className="card px-3" style={{height:'20.7rem'}}>
                      <img src="as.jpg" alt="" className='img-fluid' />
                      <div className="card-text">
                      <p className=" text-center">
              <a href="https://imanreactcalculator.netlify.app" className='text-center btn text-white'>
                Calculator </a></p>
             </div>
                      
            
                  </div> 
              </div>
              <div className="col-12 col-md-4  ">
                  <div className="card px-3 ">
                      <img src="meet.jpg" className='img-fluid pt-3'alt="" />
                      
            <div className="card-text pt-4">
              <p className='text-center'>                      <a href="https://imanreactcalculator.netlify.app" className='text-center btn text-white'>
               Meeting Tracker </a></p>
            </div>      </div> </div>
              
              <div className="col-12 col-md-4 ">
                  <div className="card">
                  <img src="11.jpg" className='img-fluid' alt="" />
               
                  <div className="card-text">
              <p className=" text-center pt-3 pb-1">
              <a href="https://adamastech.netlify.app" className='text-center btn text-white'>Company Website </a> 
                </p> 
                      </div>
                     
                  </div> </div>
              
          </div>
    </div>
  )
}

export default Projects