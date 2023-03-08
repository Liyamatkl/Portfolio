import React from 'react'
import damechinoise from './../damechinoise.jpg'
import damechinoise2 from './../damechinoise2.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


const Damechinoise = () => {
  return (
<div className='body-background'>
			<Link to='/portfolio' style={{color:"black", position:"fixed"}}><i class='bx bx-left-arrow-alt bx-flip-vertical bx-tada bx-lg' href="/projet"></i>	
</Link>
            <div className="Body-general">                 

				<h1>Dame Chinoise ♟️</h1>
                        
			  <Carousel className="carousel-cours">
      <Carousel.Item interval={1000}>
        <img
          className="d-block h-50"
          src={damechinoise}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={750}>
        <img
          className="d-block   h-50"
          src={damechinoise2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
		
					<div className='paragraphe'>
						<h2>Langage: <paint>Ocaml</paint></h2>
						<div class="underline">
          </div>
                      <div class='description'>

				<p>Le jeu Dame Chinoise est un mini projet reproduisant le jeu dans sa forme originelle.
Une interface graphique est mise à disposition afin d'avoir une meilleure experience 
de jeu. Le jeu peut accueillir jusqu'à 6 joueurs, à chaque fois qu'un joueur place
						  un pied le plateau tourne.
						  <br></br>Le but du jeu est de déplacer l'ensemble de ses pions dans la zone opposée à sa zone de départ.
Le vainqueur est le premier joueur à avoir amené la totalité de ses pions dans sa zone d'arrivée. Les joueurs sont répartis de façon symétrique autour du tablier de jeu.

<a href="https://github.com/Liyamatkl/Chineese-Checkers" style={{faWeight:"bold", textDecoration:"none"}}	>👉Lien vers le code👈 </a></p>
						
						</div>
						<div class="underline">
							
  </div>
				</div>
            </div>
        </div>  )
}

export default Damechinoise