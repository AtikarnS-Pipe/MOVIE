import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import './Login.css'

function Login() {

    const navigate = useNavigate();
  return (
    <div>
      <div className="MaiNs">
        <div className="Topic"><h1>Login</h1></div>
        <form className="username">
          <input type="username"  />
          <IoIosMail style={{position:'relative',right:'240px',top:'3px'}} />
        </form>
        <form className="password">
          <input type="password" />
          <FaKey style={{color:'white',position:'relative',right:'240px',top:'3px'}} />
        </form>
        <div className="signin">
          <h3 onClick={()=>navigate('/Scifi')}>Sign In</h3>
        </div>
        <div className="Register">
          <h4 style={{marginRight:'5px'}}>Don't have an account?</h4>
          <h4 className='Re' onClick={()=>navigate('/Register')}>Register</h4>
        </div>
        <div className="SocialLog">
        <ImGoogle3 style={{width:'100px',height:'50px'}} />
        <FaFacebook style={{width:'100px',height:'50px'}} />
        </div>
      </div>
    </div>
  )
}

export default Login