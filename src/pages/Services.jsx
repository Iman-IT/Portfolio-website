import React from 'react'

function Services() {
  return (
      <>
      <div className="container-fluid bg-light   pt-5" id='services'>
     
        <h1 className='ps-5 pt-3'>Services</h1>
       
        <p className='ps-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora qui repellat aliquam eos quidem nam aut cupiditate doloremque ab! Quod quisquam earum reprehenderit voluptatibus sapiente quo fuga odit dignissimos recusandae!</p>
        <div className="row mx-auto d-flex justify-content-center align-content-center">
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-img pt-5">
                <img src="11.jpg" className='img-fluid' alt="" />
               </div>
              <h3 className='text-center pt-2'> Responsive Websites</h3>
</div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-img" >
                <img src="4.jpg" className='img-fluid' alt="" />
               </div>
              <h3 className='text-center'>Landing Websites</h3>
</div>
          </div>
         
          
        </div>
      </div>
      </>
  )
}

export default Services