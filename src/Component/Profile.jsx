import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import pipe from './Picture/pipe.jpg'

function Profile() {
    const navigate = useNavigate();
  return (
    <div>
        <div className="MainS">
        <div className="topbars">
        <h3 className='H' onClick={()=>navigate('/Scifi')}>Home</h3>
        <h3 className='M' onClick={()=>navigate('/Mylist')}>My List</h3>
        <h3 className='T' onClick={()=>navigate('/Top10')}>Top 10</h3>
            <div className="Profiles" style={{position:'relative',bottom:'6px'}}>
                <img src={pipe} style={{width:'20px',height:'20px',color:'white',position:'relative',bottom:'9px'}}/>
                <h4 style={{width:'90px',position:'relative',left:'6px',bottom:'8px'}}>Atikarn S.</h4>
             </div>
        </div>
        <div className="LOGOUT" onClick={()=>navigate('/')}><h4>Logout</h4></div>
        <div className="Pics">
            <img src={pipe} alt="" width={300} height={300} style={{borderRadius:'50%'}} />
            <div className="data">
                <h3 className='N'>Name</h3>
                <div className="nametag">Atikarn Sirinorakul</div>
                <h3 className='E'>Email</h3>
                <div className="emailtag">atikarnn2547@gmail.com</div>
                <h3 className='T'>Tel.NO</h3>
                <div className="teltag">0985176883</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile