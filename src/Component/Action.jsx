import React from 'react'
import Login from './Login';
import { Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import './Action.css'
import 'react-slideshow-image/dist/styles.css'
import starwars6 from './Picture/6.jpg'
import Pipe from './Picture/pipe.jpg'

function Action() {
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
        <h2 style={{color:'red'}}>Action</h2>
        <h2 onClick={()=>navigate('/Adventure')} style={{left:'155px'}}>Adventure</h2>
        <h2 onClick={()=>navigate('/Comedy')} style={{left:'310px'}}>Comedy</h2>
        <h2 onClick={()=>navigate('/Crime')} style={{left:'440px'}}>Crime</h2>
        <h2 onClick={()=>navigate('/Drama')} style={{left:'550px'}}>Drama</h2>
        <h2 onClick={()=>navigate('/Fantasy')} style={{left:'660px'}}>Fantasy</h2>
        <h2 onClick={()=>navigate('/Horror')} style={{left:'780px'}}>Horror</h2>
        <h2 onClick={()=>navigate('/Scifi')} style={{left:'900px',width:'100px'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=rZe3fRnZr78')}><img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/24/90/45/pantr_us_2023_sa_poster_1400x2100_nb.jpg" alt="" /></div>
          <div className="two" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=jKCj3XuPG8M')}><img src="https://resizing.flixster.com/iKOocFLILB5Or02waFFklPddE-I=/fit-in/180x240/v2/https://resizing.flixster.com/4YRa5Vut6ZDw-m8VmGmAx0-ttcU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNiMmJmZWMxLWNiMjktNDE0OC05NmRiLTNmZjY4ZTY5OTY0Yi53ZWJw" alt="" /></div>
          <div className="three" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=3plTi-_IurA')}><img src="https://resizing.flixster.com/sztYWQ9vBo1gd_Jqi6W_oSXRg_o=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA1MDc1NGZiLWI5NDQtNDYyMy04M2Y0LTlhMzBiZWE4MzE2ZS5qcGc=" alt="" /></div>
          <div className="four" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=Q-oxhxD32MM')}><img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/29/51/10/jrngb_2016_salone_poster_1400x2100_nb.jpg" alt="" /></div>
          <div className="five" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=EXeTwQWrcwY')}><img src="https://cdn.shopify.com/s/files/1/1057/4964/files/The-Dark-Knight-Vintage-Movie-Poster-Original-1-Sheet-27x41_58f02be9-1e4e-4884-95b2-1f1b0d7437a1_368x.jpg?v=1719429336" alt="" /></div>
          <div className="six" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=2TAOizOnNPo')}><img src="https://i.pinimg.com/564x/fe/d6/b0/fed6b0853d833f0b4670dc178c3e368f.jpg" alt="" /></div>
          <div className="seven" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=C0BMx-qxsP4')}><img src="https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1727129051/Events/2024/1965/JW10_1000x1480_Poster.jpg.jpg" alt="" /></div>
          <div className="eight" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=Ohws8y572KE')}><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4w41ZJxgS8aGk0rkqUGjNX9EYbUryLfWWGDBbly8byzFC2u1e-p2c_Ukgz7_-_YT1xNAGUfpzwYzuSzsCGgrirDmUA96aIg2gBOgq7i_lJTiiMz0CX-u9r31skPmsd9qyapfVzeFUjSI/s1600/Mission+Impossible+1996.jpg" alt="" /></div>
        </div>
      </div>
  )
}

export default Action