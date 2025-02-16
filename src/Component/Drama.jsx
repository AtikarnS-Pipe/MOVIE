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

function Drama() {
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
        <h2 style={{left:'550px',color:'red'}}>Drama</h2>
        <h2 onClick={()=>navigate('/Fantasy')} style={{left:'660px'}}>Fantasy</h2>
        <h2 onClick={()=>navigate('/Horror')} style={{left:'780px'}}>Horror</h2>
        <h2 onClick={()=>navigate('/Scifi')} style={{left:'900px',width:'100px'}}>Sci-fi</h2>
      </div>
      <div className="grid-container" style={{bottom:'80px'}}>
          <div className="one" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=CHekzSiZjrY')}><img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/62/86/86/titan_us_1997_sa_poster_1400x2100_nb.jpg" alt="" /></div>
          <div className="two" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=htybz7XscIY')}><img src="https://www.digitaltrends.com/wp-content/uploads/2023/07/kQAFHdt3I1TpYhtzcGeBb1ogwUP.jpg" alt="" /></div>
          <div className="three" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=UaVTIH8mujA')}><img src="https://ejazkhancinema.com/wp-content/uploads/2023/09/The-Godfather-best-drama-movies-blog-by-ejaz-khan-cinema.jpeg" alt="" /></div>
          <div className="four" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=PLl99DlL6b4')}><img src="https://imageservice.sky.com/contentid/A5EK5PhL1W7JopQz3xgYu/BOXART/266/394?language=eng&output-format=jpg&proposition=NOWTV&territory=GB&version=9ff85da6-f165-387a-b4bc-2e5d745df009" alt="" /></div>
          <div className="five" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=6Z-0C02cqFo')}><img src="https://i0.wp.com/joshatthemovies.com/wp-content/uploads/2022/01/Redeeming-Love.jpg?fit=800%2C1200&ssl=1" alt="" /></div>
          <div className="six" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=kadUgcIxODM')}><img src="https://hips.hearstapps.com/hmg-prod/images/romantic-movies-hulu-wild-mountain-thyme-1672174752.jpeg" alt="" /></div>
          <div className="seven" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=ZaMlUazXvyY')}><img src="https://images.angelstudios.com/image/upload/q_auto,w_294,h_441,f_webp,c_scale/v1727921347/studio-app/catalog/95aac1e1-8bcc-41b3-a315-f3b62c79052e" alt="" /></div>
          <div className="eight" onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=YZf8zpchbXE')}><img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg" alt="" /></div>
        </div>
      </div>
  )
}

export default Drama