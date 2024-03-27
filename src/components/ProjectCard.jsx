import React,{ useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <Card onClick={handleShow} className='shadow btn' style={{ width: '28rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" />
      <Card.Body>
        <Card.Title>Project title</Card.Title>   
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Project Fair</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6">
              <img className='img-fluid' src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6><span className='fw-bolder'>Language Used</span>:HTML,CSS,JS</h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Description:</span>Lorem ipsum dolor sit amet,aliquid at dolores odit temporibus quia praesentium nostrum obcaecati enim autem nisi blanditiis nesciunt amet ratione laudantium molestias corrupti!</p>
            </div>
          </div>

        </Modal.Body>
        <div className='float-start m-2'>
          <a href={'https://github.com/anittashijin/Quiz-app'} target='_blank' className='btn btn-secondary'  onClick={handleClose}>
          <i className="fa-brands fa-github"></i>

          </a>
          <a href={'https://quiz-app-seven-delta.vercel.app/'} target='_blank' className='btn btn-secondary ms-2'  onClick={handleClose}>
          <i className="fa-solid fa-link"></i>

          </a>
        </div>
      </Modal>
    </>
  )
}

export default ProjectCard