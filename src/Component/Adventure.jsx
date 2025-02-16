import React from 'react'
import Login from './Login';
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import './Adventure.css'
import 'react-slideshow-image/dist/styles.css'
import starwars6 from './Picture/6.jpg'
import Pipe from './Picture/pipe.jpg'

function Adventure() {
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
        <h2 style={{left:'155px',color:'red'}}>Adventure</h2>
        <h2 onClick={()=>navigate('/Comedy')} style={{left:'310px'}}>Comedy</h2>
        <h2 onClick={()=>navigate('/Crime')} style={{left:'440px'}}>Crime</h2>
        <h2 onClick={()=>navigate('/Drama')} style={{left:'550px'}}>Drama</h2>
        <h2 onClick={()=>navigate('/Fantasy')} style={{left:'660px'}}>Fantasy</h2>
        <h2 onClick={()=>navigate('/Horror')} style={{left:'780px'}}>Horror</h2>
        <h2 onClick={()=>navigate('/Scifi')} style={{left:'900px',width:'100px'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=1VIZ89FEjYI')}><img src="https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-01-08-at-2-12-55-pm-1610133207.png" alt="" /></div>
          <div className="two" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=gUTtJjV852c')}><img src="https://i.etsystatic.com/12729518/r/il/5fe0af/1963524000/il_570xN.1963524000_q13i.jpg" alt="" /></div>
          <div className="three" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=SBBONir09z4')}><img src="https://m.media-amazon.com/images/M/MV5BMjE1NDMxMjI0OV5BMl5BanBnXkFtZTcwMjQyMDExOQ@@._V1_FMjpg_UX1000_.jpg" alt="" /></div>
          <div className="four" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=f7oKxlaUBac')}><img src="https://upload.wikimedia.org/wikipedia/en/6/68/The_mummy.jpg" alt="" /></div>
          <div className="five" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=2QKg5SZ_35I')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWb4-tko3-5_r4uaeip4vBZ7UDZzBeJSn3KtbxjV6_sdfZK_34WbXJSqYWWRT25yFG2s&usqp=CAU" alt="" /></div>
          <div className="six" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=naQr0uTrH_s')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2Y7XyGhDYiQtUOo2KwiougKAf-Cc27aP3fT1hRLYjdtAiDCNnjwoZ3JYSrxiI6dL0Aw&usqp=CAU" alt="" /></div>
          <div className="seven" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=GKq7QlNz3CA')}><img src="https://wp.scoopwhoop.com/wp-content/uploads/2024/04/04161206/image-5.png" alt="" /></div>
          <div className="eight" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=cOF2LIAp9bw')}><img src="https://m.media-amazon.com/images/M/MV5BMTU2MTkwMzM0NF5BMl5BanBnXkFtZTgwMjA0NDA4NTE@._V1_.jpg" alt="" /></div>
        </div>
      </div>
  )
}

export default Adventure