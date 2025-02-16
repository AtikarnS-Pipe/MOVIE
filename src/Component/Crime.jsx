import React from 'react'
import Login from './Login';
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import './Drama.css'
import 'react-slideshow-image/dist/styles.css'
import starwars6 from './Picture/6.jpg'
import Pipe from './Picture/pipe.jpg'

function Crime() {
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
        <h2 style={{left:'440px',color:'red'}}>Crime</h2>
        <h2 onClick={()=>navigate('/Drama')} style={{left:'550px'}}>Drama</h2>
        <h2 onClick={()=>navigate('/Fantasy')} style={{left:'660px'}}>Fantasy</h2>
        <h2 onClick={()=>navigate('/Horror')} style={{left:'780px'}}>Horror</h2>
        <h2 onClick={()=>navigate('/Scifi')} style={{left:'900px',width:'100px'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=VGBkLhI-vAg')}><img src="https://hips.hearstapps.com/hmg-prod/images/americanmurderer-1677530158.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=980:*" alt="" /></div>
          <div className="two" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=ZvNWbAPNc2E')}><img src="https://m.media-amazon.com/images/M/MV5BYmIxZjViMGMtOTgyOC00NGI4LWJiMmItZGEyYmE4OTlmYjBiXkEyXkFqcGc@._V1_.jpg" alt="" /></div>
          <div className="three" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=N_yfmHCkSB0')}><img src="https://hips.hearstapps.com/hmg-prod/images/best-true-crime-movies-2023-boston-strangler-1677533428.jpg" alt="" /></div>
          <div className="four" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=yNncHPl1UXg')}><img src="https://hips.hearstapps.com/hmg-prod/images/zodiac-1677517901.jpeg?crop=1xw:1xh;center,top&resize=980:*" alt="" /></div>
          <div className="five" ><img src="https://c8.alamy.com/comp/W7KCD1/crime-movies-spectacular-movie-night-retro-poster-design-cinema-flyer-with-hand-gun-and-bullet-on-dark-textured-background-W7KCD1.jpg" alt="" /></div>
          <div className="six" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=Y_NiP_bqlns')}><img src="https://i.ebayimg.com/images/g/8xMAAOSwID5iy-BK/s-l1200.jpg" alt="" /></div>
          <div className="seven" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=K8X6yTa92VY')}><img src="https://resizing.flixster.com/Ft6o7or_oRjefPOHOW10bK8GxyU=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26668041_v_v4_aa.jpg" alt="" /></div>
          <div className="eight" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=IgUSzQL0MS0')}><img src="https://m.media-amazon.com/images/M/MV5BOWJlZjgxZTgtOTlhYy00ZjI4LWI3ZDQtYzI2MjM3OTFiMzk3XkEyXkFqcGc@._V1_.jpg" alt="" /></div>
        </div>
      </div>
  )
}

export default Crime