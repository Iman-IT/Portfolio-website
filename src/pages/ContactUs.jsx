import React from 'react'

function ContactUs() {
  return (
      <div className='container-fluid bg-light' id='contactus'>
          <h1 className="text-center">Contact Me</h1>
          <div className="row mx-auto  d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-4  pt-4">
              <form action="">
                  <p style={{ color: "black" }} >Name:</p>
                  <input type="text" name="name" placeholder="Enter Name" required className='form-control' />
                  <p style={{ color: "black", marginTop: '20px', }}>Email:</p>
                      <input type="email" name="email" className='form-control' placeholder="Enrer EMAIL" required />
                      <p style={{ color: "black", marginTop: '20px', }}>Message:</p>
                      <textarea name="" id="" cols="30" rows="5" className='form-control'>Message</textarea>
             
                   
                   
                          <button type="submit" className="btn btn-lg mt-4 text-white d-flex align-content-center align-items-center ">Submit</button>
                     
                
               
              </form>
              </div>
              <div class="col-12 col-md-6 pb-5 text-center">
                  <img src="contact.png" className='img-fluid' alt="" />
              </div>
            
          </div>
    </div>
  )
}

export default ContactUs