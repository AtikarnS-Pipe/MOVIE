import React from 'react'
import Login from './Login';
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import './Horror.css'
import 'react-slideshow-image/dist/styles.css'
import starwars6 from './Picture/6.jpg'
import Pipe from './Picture/pipe.jpg'

function Horror() {
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
        <h2 style={{left:'780px',color:'red'}}>Horror</h2>
        <h2 onClick={()=>navigate('/Scifi')} style={{left:'900px',width:'100px'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=8i3_2iGTQi8')}><img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14452845_p_v8_ab.jpg" alt="" /></div>
          <div className="two" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=oVgtguYmNBg')}><img src="https://i1.wp.com/raremeat.blog/wp-content/uploads/2018/10/Halloween.jpg?resize=350%2C535&ssl=1" alt="" /></div>
          <div className="three" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=aDrOvFtzyPQ')}><img src="https://m.media-amazon.com/images/M/MV5BNTg1YzcwZDgtZmUzYi00NGI0LTlhN2YtNGMxZTI5MDc3ZmMyXkEyXkFqcGc@._V1_.jpg" alt="" /></div>
          <div className="four" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=BU2eYAO31Cc')}><img src="https://m.media-amazon.com/images/M/MV5BY2I4NDQ0YjktNWNlNS00NDNiLWI5ZjYtYWM0MzIzMDg3NzA4XkEyXkFqcGc@._V1_.jpg" alt="" /></div>
          <div className="five" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=ieBmy6qjiCI')}><img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8085_p_v7_ab.jpg" alt="" /></div>
          <div className="six" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=OpEQNEHKdXg')}><img src="https://m.media-amazon.com/images/M/MV5BZGI4MzkzNzQtYjA3MC00ZjE1LWI0NWUtMDdjNWQ3OTgxZTkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" /></div>
          <div className="seven" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=zlgl4G5ttfw')}><img src="https://m.media-amazon.com/images/M/MV5BZTBiMThhNjQtMjJlOC00YzQ0LWFhYTMtOWMxYmJkYTQ4ZGE3XkEyXkFqcGc@._V1_.jpg" alt="" /></div>
          <div className="eight" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=bCxm7cTpBAs')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H_DJmNeHcF6tNG6zN371sHNmzjWwcLLnVT_xVMQaIv4unQt1NeXs_E70D_x9_CJ-zVg&usqp=CAU" alt="" /></div>
        </div>
      </div>
  )
}

export default Horror