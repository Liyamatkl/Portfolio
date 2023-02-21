import React from 'react'
import Typed from "react-typed"


const Home = () => {
  return (
      <div className="header-wraper">
          <div className="main-info">
              <h1>Hi 👋</h1>
              <br></br>
              <h1 >Je suis AIT OUAKLI Liyam</h1>
              <Typed
                  className="typed-text"
                  strings={["Desing Web", "Développement Web", "JAVA", "Python", "C"]}
                  typeSpeed={30}
                  backSpeed={30}
                  loop
              />
              <a href='/contact' className='btn-main-offer'>
Contactez Moi</a>
          </div>
      </div>
  )
}

export default Home
