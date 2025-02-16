import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

function Register() {

    const navigate = useNavigate();
  return (
    <div>
      <div className="MAINS">
        <div className="TOPIC"><h1>Register</h1></div>
          <form className='Username'>
            <h5 style={{marginBottom:'10px',fontWeight:'bolder'}}>Username</h5>
            <input type="username" />
          </form>
          <form className='Password'>
            <h5 style={{marginBottom:'10px',fontWeight:'bolder'}}>Password</h5>
            <input type="password" />
          </form>
        <form className='CPassword'>
          <h5 style={{marginBottom:'10px',fontWeight:'bolder'}}>Confirm Password</h5>
            <input type="password" />
          </form>
          <div className="namesur">
          <form className='Name'>
          <h5 style={{marginBottom:'10px',fontWeight:'bolder'}}>Name</h5>
            <input type="name" />
          </form>
          <form className='Surname'>
          <h5 style={{marginBottom:'10px',fontWeight:'bolder'}}>Surname</h5>
            <input type="name" />
          </form>
          </div>
          <div className="signup">
            <h3>Sign Up</h3>
          </div>
          <div className="LOGIN">
            <h4 style={{marginRight:'5px'}}>Do you have an account?</h4>
            <h4 className='Lo' onClick={()=>navigate('/')}>Login</h4>
          </div>
      </div>
    </div>
  )
}

export default Register