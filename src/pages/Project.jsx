import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className="container-fluid">
      <div className="d-flex justify-content-between m-5">
        <h1>All Projects</h1>
        <input className='form-control w-25' type="text" placeholder='Search Projects By Languages used' />
      </div>
      <Row  className="mt-5 m-5">
         <Col sm={12} md={6} lg={4}>
           <ProjectCard/>
           </Col>
      </Row>
    </div>
    </>
  )
}

export default Projects