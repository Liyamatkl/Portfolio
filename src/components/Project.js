import React from 'react'
import author from './../me.jpg'
import fallingsnake from './../fallingsnake.jpg'
import projetlaravel from './../projetlaravel.jpg'
import damechinoise from './../damechinoise.jpg'

const Portfolio = () => {
  return (
    <div className='body-background'>
         <div className="Body-general">  

        <h1>Projet👨‍💻</h1>
        <div class="underline">
  </div>
        <div class="container" className='containerportfolio' >
          
  <div class="card">
            <div class="box">
              
      <div class="content">
                <img src={fallingsnake} class="img"/>
                <h3 >Falling Snake</h3>
                <p>Java</p>
        <a href="/fallingsnake">Read More</a>
      </div>
            </div>
  </div>

          

  <div class="card" >
    <div class="box">
      <div class="content">
        <img src={projetlaravel} class="img1"/>
                <h3>Cours en Ligne®</h3>
                <p>Laravel</p>
        <a href="/coursenligne">Read More</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <img src={damechinoise} class="img1" />
            <h3>Dame Chinoise</h3>
          <p>Ocaml</p>
        <a href="/damechinoise">Read More</a>
      </div>
    </div>
  </div>
</div>
       
            
        
          </div>
    </div>   
  )
}

export default Portfolio