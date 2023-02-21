import React from 'react'
import author from './../me.jpg'
import Cvstage from './../Cvstage.jpg'
import { SocialIcon } from 'react-social-icons'


const nav = document.querySelector(".nav");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
          if(lastScrollY < window.scrollY){
            console.log("we are going down");
          } else {
            console.log("we are going up");
          }
        })

const AboutMe = () => {
  return (
      <div className='body-background'>
      <div class="Body-general">    
        
        <h1>About ME.</h1>
        <div class="underline">
  </div>
      </div>
      <div className='About-Component'>
        <div class="d-flex flex-column" className='icon'>
  <div class="p-2" className='icon1'><SocialIcon url="https://github.com/Liyamatkl" /></div>
  <div class="p-2" className='icon2'><SocialIcon url="https://www.linkedin.com/in/liyam-a%C3%AFt-ouakli/" /></div>
</div>
          <img src={author} alt='Liyam AIT OUAKLI' class="card-img-top"></img>
                                      <p >Je suis passionné par la Cybersecurité et la sécurisation des systèmes de données. Comme tout ce qui touche à la technologie et à l’informatique, la cybercriminalité est en constante évolution. Cet aspect me motive à l’idée d’en apprendre davantage au fil des jours, en me formant en autodidacte sur des plateformes tel que TryHackMe ou Root Me. Grâce à ces outils j’ai pu améliorer mes connaissances en sécurité informatique et participer à des CTF.

</p><p>Durant mon apprentissage et mes projets en groupe, j’ai pu acquérir des compétences techniques notamment la maîtrise des langages de programmation:</p>

 <p>♦ Java
 ♦ Python
 ♦ C
 ♦ Ocaml
 ♦ HTML
 ♦ PHP
          ♦ CSS
        ♦ JavaScript</p>

<p>De nature rigoureux et curieux, je suis proactif et j’aime particulièrement travailler en équipe. </p>

        
      </div>
      <div class="cv-div">
        <h1>MON CV 👇</h1>
        <img src={Cvstage} alt='Liyam AIT OUAKLI' class="card-img-footer"></img>

      </div>
       
      
    </div>
  )
}

export default AboutMe