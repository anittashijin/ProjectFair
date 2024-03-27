import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import profile from '../assets/profile.webp'


function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="d-flex justify-content-between">
      <h3 className='text-warning'> User Profile</h3>
      <button onClick={()=>setOpen(!open)} className='btn'><div className="i fa-solid fa-chevron-down"></div></button>
    </div>
    <Collapse in={open}>
        <div className='row justify-content-center mt-3 shadow ' id="example-collapse-text">
         <label className='text-center'>
          <input  type="file" style={{display:'none'}} />
          <img width={'200px'} height={'200px'} className='rounded-circle' src={profile} alt="" />
          <div className='mb-2'>
            <input type="text" className='form-control' placeholder='Github URL' />
          </div>
          <div className='mb-2'>
            <input type="text" className='form-control' placeholder='LinkedIn URL' />
          </div>
          <div className='d-grid'>
            <button className='btn btn-warning'>Upload Profile</button>
          </div>
         </label>
        </div>
      </Collapse>
    </>
  )
}

export default Profile