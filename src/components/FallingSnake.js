import { faWeight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import fallingsnake from './../fallingsnake.jpg'
import fallingsnake2 from './../fallingsnake2.jpg'
import fallingsnake3 from './../fallingsnake3.jpg'



const FallingSnake = () => {
    return (
		<div className='body-background'>
			<a href='/portfolio' style={{color:"black", position:"fixed"}}><i class='bx bx-left-arrow-alt bx-flip-vertical bx-tada bx-lg' href="/projet"></i>	
</a>
            <div className="Body-general">                 

				<h1>Falling snake 🐍</h1>

            <section class="container" className='containerfalling'>
	<div class="slider-wrapper">
		<div class="sliderfalling">
			<img id="slide-1" src={fallingsnake} />
			<img id="slide-2" src={fallingsnake2} />
			<img id="slide-3" src={fallingsnake3} />
                        </div>
                        

					</div>
					<div className='paragraphe'>
						<h2>Langage: Java</h2>
						<div class="underline">
  </div>
				<p>Falling Snakes est un jeu d'arcade qui se déroule sur une grille 2D de cases correspondant à un champ vertical vu par
devant. Le champ contient des obstacles de diférent nature. Un serpent se déplace sur le champ et quand il arrive à la fin de
la grille, ou quand il rencontre un morceau de bois le serpent descend d’un niveau et change de direction.
							<br></br>
							<br></br>
Voici la liste des objets et leurs effets:
							<br></br>
							<br></br>
•  Bois: Le serpent descend d’un niveau et change de direction
							<br></br>
							<br></br>
•  Fraise: Le serpent devient plus long
							<br></br>
							<br></br>
•  Myrtille: Le serpent devient un superserpent, pendant quelques second les projectiles n’ont pas d’effet
							<br></br>
							<br></br>
•  Pièce d'or: Modifie tous les obstacles au hazard
							<br></br>
							<br></br>	
L’utilisateur bouge un canon au niveau inférieur. Avec ce canon il lance des projectiles qui détruisent les obstacles.
Quand un projectile touche le serpent, un morceau est détruit, et le serpent devient plus court.
Le jeu se termine quand le serpent arrive au niveau inférieur (et le joueur perd), ou si le serpent est détruit (et
le joueur gagne)
<a href="https://github.com/Liyamatkl/Falling-Snake-Game" style={{faWeight:"bold", textDecoration:"none"}}	>👉Lien vers le code👈 </a></p>
						
						
						<div class="underline">
							
  </div>
				</div>
				</section>
            </div>
        </div>
        
  )
}

export default FallingSnake