import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginLogo from '../assets/Land.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Auth({insideRegister}) {

  const [userInputs,setUserInputs]=useState({
    username:"",email:"",password:""
  })
  console.log(userInputs);
  const handleRegister=(e)=>{
    e.preventDefault()
    if(userInputs.username && userInputs.email && userInputs.password){
      //api call
    }else{
      toast.info("please fill the form completely!!!")
    }
  }

  return (
    <>
        <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center align-items-center">
            <div className="container w-75">
              <Link to={'/'}><i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
              <div className="card shadow p-5">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img className='w-100' src={loginLogo} alt="" />
                  </div>
                  <div className="col-lg-6">
                    <h1 className='fw-bolder mt-2'><i className="fa-solid fa-tarp-droplet fa-bounce"></i> Project Fair</h1>
                    <h5 className='fw-bolder mt-2'>Sign {insideRegister?"up":"in"} to your Acoount</h5>
        <Form>
           
           
            <div>
            {insideRegister &&
                    <FloatingLabel
                         controlId="floatingInputName"
                         label="Username"
                         className="mb-3"
                       >
                         <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="username" />
                       </FloatingLabel>

            }
                    <FloatingLabel
                         controlId="floatingInput"
                         label="Email address"
                         className="mb-3"
                       >
                         <Form.Control value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})}  type="email" placeholder="name@example.com" />
                       </FloatingLabel>
                       <FloatingLabel controlId="floatingPassword" label="Password">
                         <Form.Control value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})}  type="password" placeholder="Password" />
                       </FloatingLabel>
            </div>  
                     
                    {
                  insideRegister ?
                  <div className='mt-3'>
                      <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                      <p>Already Have an Account? Click Here to <Link className='text-info' to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className='mt-3'>
                     <button className='btn btn-primary'>Login</button>
                      <p>New User? Click Here to <Link className='text-info' to={'/register'}>Register</Link></p>
                    </div>
                    }
        </Form>

      
               
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
        </div>
    </>
  )
}

export default Auth