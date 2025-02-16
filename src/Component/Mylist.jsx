import React from 'react'
import './Mylist.css'
import { useNavigate } from 'react-router-dom'
import pipe from './Picture/pipe.jpg'

function Mylist() {
    const navigate = useNavigate();
  return (
     <div>
      <div className="Mains">
        <div className="topbaR">
        <h3 className='H' onClick={()=>navigate('/Scifi')}>Home</h3>
        <h3 className='M'>My List</h3>
        <h3 className='T' onClick={()=>navigate('/Top10')}>Top 10</h3>
            <div className="Profiles" style={{position:'relative',bottom:'6px'}} onClick={()=> navigate('/Profile')}>
                    <img src={pipe} style={{width:'20px',height:'20px',color:'white',position:'relative',bottom:'9px'}}/>
                    <h4 style={{width:'90px',position:'relative',left:'6px',bottom:'8px'}}>Atikarn S.</h4>
             </div>
        </div>
        <div className="Details">
          <div className="action">
          <h1>Action</h1>
          <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/29/51/10/jrngb_2016_salone_poster_1400x2100_nb.jpg" alt="" width={150} height={200}  />
          <img src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/24/90/45/pantr_us_2023_sa_poster_1400x2100_nb.jpg" alt="" width={150} height={200}  />
          <img src="https://i.pinimg.com/564x/fe/d6/b0/fed6b0853d833f0b4670dc178c3e368f.jpg" alt="" width={150} height={200}  />
          <img src="https://resizing.flixster.com/sztYWQ9vBo1gd_Jqi6W_oSXRg_o=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA1MDc1NGZiLWI5NDQtNDYyMy04M2Y0LTlhMzBiZWE4MzE2ZS5qcGc=" alt="" width={150} height={200}  />
          </div>
          <div className="adventure">
            <h1>Adventure</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2Y7XyGhDYiQtUOo2KwiougKAf-Cc27aP3fT1hRLYjdtAiDCNnjwoZ3JYSrxiI6dL0Aw&usqp=CAU" alt="" width={150} height={200} />
            <img src="https://hips.hearstapps.com/hmg-prod/images/screen-shot-2021-01-08-at-2-12-55-pm-1610133207.png" alt="" width={150} height={200} />
            <img src="https://wp.scoopwhoop.com/wp-content/uploads/2024/04/04161206/image-5.png" alt="" width={150} height={200} />
            
          </div>
          <div className="comedy">
            <h1>Comedy</h1>
            <img src="https://hips.hearstapps.com/hmg-prod/images/friday-657737fc3b240.jpeg?crop=1xw:1xh;center,top&resize=980:*" alt="" width={150} height={200} />
          </div>
          <div className="crime">
          <h1>Crime</h1>
          <img src="https://i.ebayimg.com/images/g/8xMAAOSwID5iy-BK/s-l1200.jpg" alt="" width={150} height={200} />
          </div>
          <div className="drama">
          <h1>Drama</h1>
          </div>
          <div className="fantasy">
          <h1>Fantasy</h1>
          <img src="https://images.workpointtoday.com/workpointnews/2022/01/11121712/1641878230_16481_HarryPotterandtheSorcerer_sStone-Poster.jpg" alt="" width={150} height={200} />
          <img src="https://s.isanook.com/mv/0/ud/4/20194/alice-poster.jpg" alt="" width={150} height={200} />
          </div>
          <div className="horror">
          <h1>Horror</h1>
          <img src="https://m.media-amazon.com/images/M/MV5BY2I4NDQ0YjktNWNlNS00NDNiLWI5ZjYtYWM0MzIzMDg3NzA4XkEyXkFqcGc@._V1_.jpg" alt="" width={150} height={200} />
          <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14452845_p_v8_ab.jpg" alt="" width={150} height={200} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H_DJmNeHcF6tNG6zN371sHNmzjWwcLLnVT_xVMQaIv4unQt1NeXs_E70D_x9_CJ-zVg&usqp=CAU" alt="" width={150} height={200} />
          <img src="https://m.media-amazon.com/images/M/MV5BNTg1YzcwZDgtZmUzYi00NGI0LTlhN2YtNGMxZTI5MDc3ZmMyXkEyXkFqcGc@._V1_.jpg" alt="" width={150} height={200} />
          <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8085_p_v7_ab.jpg" alt="" width={150} height={200} />
          </div>
          <div className="scifi">
          <h1>Scifi</h1>
          <img src="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" alt="" width={150} height={200} />
          <img src="https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" width={150} height={200} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMatgj8oOd3w22Q-TPKOI6JXwXokonxx0EA&s" alt="" width={150} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mylist