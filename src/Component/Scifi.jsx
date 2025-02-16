import React from 'react'
import Login from './Login';
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import './Scifi.css'
import 'react-slideshow-image/dist/styles.css'
import starwars6 from './Picture/6.jpg'
import Pipe from './Picture/pipe.jpg'

function Scifi() {
    const navigate = useNavigate();
    const gotoyoutube = (link) => {
      window.open(link, "_blank");
    }
  return (
    <div className='Main'>
      <div className="pic">
      <img src={starwars6}  alt="" />
        <div className="detail">
          <h1 className='S'>Star </h1>
          <h1 className='W'>Wars</h1> 
          <h2 className='R'>RETURN OF THE JEDI</h2>
          <h4 className='w' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=7L8p7_SLzvU')}>Watch Now</h4>
          <h4 className='M'>Add To MyList</h4>
            <div className="topbar">
              <h3 className='H'>Home</h3>
              <h3 className='M' onClick={()=>navigate('/Mylist')}>My List</h3>
              <h3 className='T' onClick={()=>navigate('/Top10')}>Top 10</h3>
              <form action="" style={{position:'absolute',bottom:'535px',left:'950px',width:'400px'}}>
                <input type="text" placeholder='Search' /><FaMicrophone style={{position:'relative',right:'25px',top:'4px'}} />
              </form>
            </div>
            <div className="noti">
            <FaBell style={{position:'relative',right:'7.5px',top:'2px'}}/>
            </div>
            <div className="profile" onClick={()=> navigate('/Profile')}>
              <img src={Pipe} style={{width:'20px',height:'20px',color:'white',position:'relative',top:'1px'}}/>
              <h4 style={{width:'90px',position:'relative',left:'6px',top:'1px'}}>Atikarn S.</h4>
              </div>
        </div>
      </div>
      <div className="List">
        <h2 onClick={()=>navigate('/Action')}>Action</h2>
        <h2 onClick={()=>navigate('/Adventure')} style={{left:'155px'}}>Adventure</h2>
        <h2 onClick={()=>navigate('/Comedy')} style={{left:'310px'}}>Comedy</h2>
        <h2 onClick={()=>navigate('/Crime')} style={{left:'440px'}}>Crime</h2>
        <h2 onClick={()=>navigate('/Drama')} style={{left:'550px'}}>Drama</h2>
        <h2 onClick={()=>navigate('/Fantasy')} style={{left:'660px'}}>Fantasy</h2>
        <h2 onClick={()=>navigate('/Horror')} style={{left:'780px'}}>Horror</h2>
        <h2 style={{left:'900px',width:'100px',color:'red'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=zSWdZVtXT7E')}><img src="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" /></div>
          <div className="two" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=5PSNL1qE6VY')}><img src="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" alt="" /></div>
          <div className="three" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=vKQi3bBA1y8')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JpAa61BgkNomeBtnOV74IKWanzABJ7Byug&s" alt="" /></div>
          <div className="four" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=d96cjJhvlMA')}><img src="https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" /></div>
          <div className="five" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=qvsgGtivCgs')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMatgj8oOd3w22Q-TPKOI6JXwXokonxx0EA&s" alt="" /></div>
          <div className="six" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=eOrNdBpGMv8')}><img src="https://upload.wikimedia.org/wikipedia/th/d/d4/%E0%B8%94%E0%B8%B4%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA_itunes.jpg" alt="" /></div>
          <div className="seven" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=RFinNxS5KN4')}><img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg" alt="" /></div>
          <div className="eight" onClick={() => gotoyoutube('https://www.youtube.com/watch?v=P78pl1FUXfA')}><img src="https://m.media-amazon.com/images/M/MV5BMTk4NTk4MTk1OF5BMl5BanBnXkFtZTcwNTE2MDIwNA@@._V1_FMjpg_UX1000_.jpg" alt="" /></div>
        </div>
      </div>
  )
}

export default Scifi