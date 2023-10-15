import React from 'react'
import '../components/GlobalStyles.css'



function Skills ()
{
 
  return (
      <>
      <div className="container-fluid bg-light" id='skills' >
    
              <div className="row mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-6 col-sm-4">
                  <img src="1111.png" alt=""  className=' img-fluid' />
                  </div>
                
                  <div className="col-12 col-md-6 col-sm-4 pt-1">
                      <h1 className='text-black'>Skills</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dicta blanditiis, temporibus rem inventore doloremque! Nobis, omnis nesciunt. Iure fugit exercitationem doloribus minus ipsam eius perspiciatis iusto corporis libero nam?
                      </p>
                      <p>HTML</p>  <div className="progress">
                          <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={ {width:'100%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>CSS</p><div className="progress mt-1">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:'90%'}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p> ReactJS</p>         <div className="progress mt-1">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:'90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p>PHP</p>
                      <div className="progress mt-1">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:'90%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p>MySQL</p>
<div className="progress mt-1">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:'90%'}}aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<a href="cv.pdf" className='btn text-white mt-2'>Dowload CV</a>    
                  </div>
                 
              </div>
      </div>
      
      </>
  )
}

export default Skills