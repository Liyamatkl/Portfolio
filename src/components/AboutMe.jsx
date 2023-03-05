import React, {useState} from 'react'
import author from './../me.jpg'
import Cvstage from './../Cvstage.jpg'
import { SocialIcon } from 'react-social-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




const AboutMe = () => {
    const [show, setShow] = useState(false);

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
        <div className='parag-plac '>
          <div className='goo'>
                                      <p >Je suis passionné par la Cybersecurité et la sécurisation des systèmes de données. Comme tout ce qui touche à la technologie et à l’informatique, la cybercriminalité est en constante évolution. Cet aspect me motive à l’idée d’en apprendre davantage au fil des jours, en me formant en autodidacte sur des plateformes tel que TryHackMe ou Root Me. Grâce à ces outils j’ai pu améliorer mes connaissances en sécurité informatique et participer à des CTF.

</p><p>Durant mon apprentissage et mes projets en groupe, j’ai pu acquérir des compétences techniques notamment la maîtrise des langages de programmation:</p>
<blockquote>
            <p>♦ Java
              <br></br>
              ♦ Python
              <br></br>
              ♦ C
              <br></br>
              ♦ Ocaml
              <br></br>
              ♦ HTML
              <br></br>
              ♦ PHP
              <br></br>
 
              ♦ CSS
              <br></br>
        ♦ JavaScript</p>
</blockquote>
<p>De nature rigoureux et curieux, je suis proactif et j’aime particulièrement travailler en équipe. </p>
</div>
       </div> 
      </div>
      <div class="cv-div">
        <h1>MON CV 👇</h1>
       
        <>

           <img onClick={() => setShow(true)} src={Cvstage} alt='Liyam AIT OUAKLI' class="card-img-footer"></img>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size='lg'
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        
                     <img src={Cvstage} alt='Liyam AIT OUAKLI' ></img>

        
      </Modal>
    </>

      </div>
       
      
    </div>
  )
}

export default AboutMe