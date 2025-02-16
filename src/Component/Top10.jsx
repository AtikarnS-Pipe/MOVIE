import React from 'react'
import './Top10.css'
import starwars6 from './Picture/6.jpg'
import { useNavigate } from 'react-router-dom';
import Pipe from './Picture/pipe.jpg'

function Top10() {
    const navigate = useNavigate();
    const gotoyoutube = (link) => {
        window.open(link, "_blank");
      }
  return (
<div> 
        <div className="main">
    <div className="topbarr">
        <h3 className='H' onClick={()=>navigate('/Scifi')}>Home</h3>
        <h3 className='M' onClick={()=>navigate('/Mylist')}>My List</h3>
        <h3 className='T'>Top 10</h3>
        <div className="Profile" style={{position:'relative',bottom:'6px'}} onClick={()=> navigate('/Profile')}>
            <img src={Pipe} style={{width:'20px',height:'20px',color:'white',position:'relative',bottom:'9px'}}/>
            <h4 style={{width:'90px',position:'relative',left:'6px',bottom:'8px'}}>Atikarn S.</h4>
            </div>
    </div>
    <div className="Lists">
        <div className="ONE">
            <h1>1.</h1>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/773B031A52B5727F7C218E42149B45095C21A8BA56601EB1F51FC46485304210/scale?width=1200&aspectRatio=1.78&format=webp" alt="" width={300} height={150} />
            <p>After rescuing Han Solo from Jabba the Hutt, the Rebels must attack the second Death Star orbiting above a remote forest moon. Luke Skywalker confronts Darth Vader and the Emperor, convinced that he can bring Vader back to the good side.
                <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=7L8p7_SLzvU')}>Watch Now</h3>
                <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
            
        </div>
        <div className="TWO">
            <h1>2.</h1>
            <img src="https://cdn.abcotvs.com/dip/images/228999_guardiansthumbnail.jpg" alt="" width={300} height={150} />
            <p>After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the "Guardians of the Galaxy" to save the galaxy.
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=d96cjJhvlMA&t=1s')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="THREE">
            <h1>3.</h1>
            <img src="https://www.amphur.in.th/wp-content/uploads/2012/05/The-Avengers-2012.jpg" alt="" width={300} height={150} />
            <p>After being exiled from the Nine Realms following his actions in Asgard, Loki wanders the periphery of outer space before coming into contact with Other, the servant of a mysterious warlord. Other makes a deal with Loki: in exchange for recovering the Tesseract, a powerful energy source being studied by S.H.I.E.L.D. on Earth
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=eOrNdBpGMv8&t=6s')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="FOUR">
            <h1>4.</h1>
            <img src="https://streamcoimg-a.akamaihd.net/000/281/7724/2817724-Banner-L2-61c87318ee423a1706d640b15cff6df9.jpeg" alt="" width={260} height={150} />
            <p>The year is 1963, the night: Halloween. Police are called to 43 Lampkin Ln. only to discover that 15-year-old Judith Myers has been stabbed to death by her 6-year-old brother, Michael. After being institutionalized for 15 years, Myers breaks out on the night before Halloween. No one knows, nor wants to find out, what will happen on October 31st 1978
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=oVgtguYmNBg')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="FIVE">
            <h1>5.</h1>
            <img src="https://s.isanook.com/mv/0/ui/24/124849/bad-boys-for-life-2020.jpg" alt="" width={260} height={150} />
            <p>Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.
            Marcus and Mike have to confront new issues (career changes and midlife crises), as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=jKCj3XuPG8M')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="SIX">
            <h1>6.</h1>
            <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b1c67f59aa90e85c17563734ba0d9e061e07ab26d8ea1e704c1a9fba2cf52615._UR1920,1080_RI_.jpg   " alt="" width={260} height={150} />
            <p>An English librarian called Evelyn Carnahan becomes interested in starting an archaeological dig at the ancient city of Hamunaptra. She gains the help of Rick O'Connell, after saving him from his death. What Evelyn, her brother Jonathan and Rick are unaware of is that another group of explorers are interested in the same dig
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=f7oKxlaUBac&t=9s')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="SEVEN">
            <h1>7.</h1>
            <img src="https://w0.peakpx.com/wallpaper/854/701/HD-wallpaper-harry-potter-harry-potter-and-the-philosopher-s-stone.jpg" alt="" width={260} height={150} />
            <p>On the night of 1 November 1981, celebrated wizard Albus Dumbledore (Richard Harris) and his deputy Minerva McGonagall (Maggie Smith) meet up on Privet Drive in the Surrey town Little Whinging and discuss of the deaths of James and Lily Potter (Adrian Rawlins and Geraldine Somerville), whose one-year-old son Harry Potter (Saunders Triplets) is to be brought to them by their half-giant associate Rubeus Hagrid (Robbie Coltrane).
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=VyHV0BRtdxo&t=13s')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="EIGHT">
            <h1>8.</h1>
            <img src="https://cdn.shopify.com/s/files/1/1140/8354/files/1._Avatar_2009_480x480.jpg?v=1635265206" alt="" width={260} height={150} />
            <p>In the year 2148, Earth has become a dying planet. It is severely overpopulated with over 20 billion humans and its resources are rapidly depleting with climate change, pollution, famine, poverty, and countries warring over remaining resources. Jake Sully is a 22-year-old ex-marine paralyzed from the waist down due to wounds sustained in combat. He is living in a literal one-room dilapidated apartment resembling a prison cell
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=5PSNL1qE6VY')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
            </div>
        <div className="NINE">
            <h1>9.</h1>
            <img src="https://i0.wp.com/gravereviews.com/wp-content/uploads/2021/03/christine-2.jpg?resize=640%2C371&ssl=1" alt="" width={300} height={150} />
            <p>Arnold "Arnie" Cunningham is an awkward, unpopular teen with only one friend, Dennis Guilder. Arnie's life begins to change when he buys a used, badly battered red-and-white 1958 Plymouth Fury, named "Christine," in need of extensive repairs
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=ieBmy6qjiCI')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
        <div className="TEN">
            <h1>10.</h1>
            <img src="https://f.ptcdn.info/354/049/000/olm2yn1iyBcMay4Nw70-o.jpg" alt="" width={300} height={150} />
            <p>Former assassin John Wick loses his wife Helen to a terminal illness. Following her death, John receives a beagle puppy named Daisy, the last gift from Helen to help him cope with his grief. John and Daisy connect and spend time driving around in John's vintage 1969 Ford Mustang Mach 1. While at a gas station, John encounters Iosef Tarasov, the son of Russian crime lord Viggo Tarasov, who offers to buy his car
            <h3 className='W' onClick={()=>gotoyoutube('https://www.youtube.com/watch?v=C0BMx-qxsP4&t=1s')}>Watch Now</h3>
            <h3 className='A' style={{position:'relative',bottom:'87px',left:'200px'}}>Add To Mylist</h3>
            </p>
        </div>
    </div>
    </div>
</div>
  )
}

export default Top10