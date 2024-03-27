import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header({insideDashBoard}) {
  return (
    <>
      <Navbar style={{zIndex:'1'}}  className="card shadow top-0 position-fixed w-100">        <Container>
          <Navbar.Brand>
          <Link className='fw-bolder' style={{textDecoration:'none'}} to={'/'}><i className="fa-brands fa-docker me-1"></i>Project Fair</Link>
          </Navbar.Brand>
          { insideDashBoard && 
          <div className='ms-auto'>
            <button className='btn btn-link'>Logout<i className="fa-solid fa-arrow-right"></i></button>
          </div>}
        </Container>
      </Navbar>
      <hr />
    </>
  )
}

export default Header