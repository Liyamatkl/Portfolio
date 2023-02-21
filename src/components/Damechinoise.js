import React from 'react'
import damechinoise from './../damechinoise.jpg'
import damechinoise2 from './../damechinoise2.jpg'

const Damechinoise = () => {
  return (
<div className='body-background'>
			<a href='/portfolio' style={{color:"black", position:"fixed"}}><i class='bx bx-left-arrow-alt bx-flip-vertical bx-tada bx-lg' href="/projet"></i>	
</a>
            <div className="Body-general">                 

				<h1>Dame Chinoise ♟️</h1>

            <section class="container" className='containerfalling'>
	<div class="slider-wrapper">
		<div class="sliderdame">
			<img id="slide-1" src={damechinoise} />
                          <img id="slide-2" src={damechinoise2} />
                      </div>
                        
		
					</div>
					<div className='paragraphe'>
						<h2>Langage: Ocaml</h2>
						<div class="underline">
  </div>
				<p>Le jeu Dame Chinoise est un mini projet reproduisant le jeu dans sa forme originelle.
Une interface graphique est mise à disposition afin d'avoir une meilleure experience 
de jeu. Le jeu peut accueillir jusqu'à 6 joueurs, à chaque fois qu'un joueur place
						  un pied le plateau tourne.
						  <br></br>Le but du jeu est de déplacer l'ensemble de ses pions dans la zone opposée à sa zone de départ.
Le vainqueur est le premier joueur à avoir amené la totalité de ses pions dans sa zone d'arrivée. Les joueurs sont répartis de façon symétrique autour du tablier de jeu.

<a href="https://github.com/Liyamatkl/Chineese-Checkers" style={{faWeight:"bold", textDecoration:"none"}}	>👉Lien vers le code👈 </a></p>
						
						
						<div class="underline">
							
  </div>
				</div>
				</section>
            </div>
        </div>  )
}

export default Damechinoise