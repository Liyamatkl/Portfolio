import React from 'react'
import courenligne from "./../projetlaravel.jpg"
import courenligne2 from "./../projetlaravel2.jpg"
import courenligne3 from "./../projetlaravel3.jpg"
import courenligne4 from "./../projetlaravel4.jpg"


const CourenLigne = () => {
  return (
    <div className='body-background'>
			<a href='/portfolio' style={{color:"black", position:"fixed"}}><i class='bx bx-left-arrow-alt bx-flip-vertical bx-tada bx-lg' href="/projet"></i>	
</a>
            <div className="Body-general">                 

				<h1>Cours en Ligne®</h1>

            <section class="container" className='containerfalling'>
	<div class="slider-wrapper">
		<div class="slider">
			<img id="slide-1" src={courenligne} />
			<img id="slide-2" src={courenligne2} />
			<img id="slide-3" src={courenligne3} />
			<img id="slide-4" src={courenligne4} />
            
                        </div>
         
					</div>
					<div className='paragraphe'>
						<h2>Langage: PHP, Laravel</h2>
						<div class="underline">
  </div>
				<p>Le projet COURS EN LIGNE® est une application web résumant les principaux aspects du 
backend d'une application basique. C'est donc une plateforme avec une interface Admin,
Enseignant et Gestionnaire. De multiples actions peuvent être réalisées comme:
<br></br>
							<br></br>
•  Afficher la liste des étudiants affiliés à un certain cours
<br></br>
							<br></br>
•  Supprimer un utilisateur
<br></br>
							<br></br>
• Attribuer un cours à un étudiant
<br></br>
							<br></br>
•  Afficher les utilisateurs selon leur type
<br></br>
							<br></br>
De nombreuse autres actions en lien avec la base de données peuvent être réalisées...<br></br>
Ce projet a eu une note de 17/20 durant la 2ème année de licence.<a href="https://github.com/Liyamatkl/Cours-en-Ligne-" style={{faWeight:"bold", textDecoration:"none"}}	>👉Lien vers le code👈 </a></p>
						
						
						<div class="underline">
							
  </div>
				</div>
				</section>
            </div>
        </div>
  )
}

export default CourenLigne