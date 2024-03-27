import React from 'react'
import { Link } from 'react-router-dom'
import landing from '../assets/Land.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'


function Home() {
  return (
    <>
  <div className='w-100 d-flex justify-content-center align-items-center rounded' style={{height:'100vh',backgroundColor:'lightgreen'}}>
<div className='container'>
    <div className="row align-items-center">
        <div className="col-lg-6">
         <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i> Project Fair</h1>
         <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolores aliquam accusamus praesentium id veritatis, sint ipsa ut quos nihil. Harum officiis soluta minima sequi quos doloremque eaque quia. Porro.</p>
         <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
         
        </div>
        <div className="col-lg-6">
    <img className='img-fluid' src={landing}  alt="" />
        </div>
    </div>
</div>

    </div>
<div className='mt-5'>
  <h1 className='text-center mb-5'>EXPLORE OUR PROJECTS</h1>
  <marquee>
    <div className='d-flex'>
<div className='me-5'>
<ProjectCard />
</div>

    </div>
  </marquee>
  
</div>
<div className='d-flex justify-content-center align-items-center mb-5 flex-column'>
  <h3>Our Testimonials</h3>
  <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.freeiconspng.com/uploads/flat-user-icon-11.png" alt="" />
          <span>Max Miller</span>
          </Card.Title>   
          <Card.Text>
            <div className='d-flex justify-content-center' >
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius architecto voluptates? Aliquid nihil nisi vel excepturi a accusamus non eius est alias, cupiditate et maxime odio minima ea quibusdam.</p>
          </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.freeiconspng.com/uploads/flat-user-icon-11.png" alt="" />
          <span>Max Miller</span>
          </Card.Title>   
          <Card.Text>
            <div className='d-flex justify-content-center' >
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius architecto voluptates? Aliquid nihil nisi vel excepturi a accusamus non eius est alias, cupiditate et maxime odio minima ea quibusdam.</p>
          </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.freeiconspng.com/uploads/flat-user-icon-11.png" alt="" />
          <span>Max Miller</span>
          </Card.Title>   
          <Card.Text>
            <div className='d-flex justify-content-center' >
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique eius architecto voluptates? Aliquid nihil nisi vel excepturi a accusamus non eius est alias, cupiditate et maxime odio minima ea quibusdam.</p>
          </Card.Text>
      </Card.Body>
    </Card>
  </div>
  
</div>
<hr className='m-5' /> 
    </>
  )
}

export default Home