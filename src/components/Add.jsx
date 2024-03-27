import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import upload from '../assets/img.png'



function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'><i className="fa-solid fa-plus me-1"></i>Add New</button>
    
    <Modal
    size='lg'centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label >
                <input type="file" style={{display:'none'}} />
                <img height={'200px'} className='img-fluid' src={upload} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className='mb-2'><input type="text" className='form-control' placeholder='project Title' /></div>
              <div className='mb-2'><input type="text" className='form-control' placeholder='Languages used in the project' /></div>
              <div className='mb-2'><input type="text" className='form-control' placeholder='projec Github Link' /></div>
              <div className='mb-2'><input type="text" className='form-control' placeholder='project Website Link' /></div>
            </div>
            <div className='mb-2'><input type="text" className='form-control' placeholder='project overview' /></div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add