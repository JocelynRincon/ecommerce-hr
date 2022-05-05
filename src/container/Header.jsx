
import React from 'react'
import home from '../media/home.jpg'
import '../container/style/Header.css'

const header = () => {
  return (
    <div id='header'
        style={{width:"100%", display:"flex", justifyContent:"center", 
          overflow:"hidden" }}
    > 
            <h2 className="text">
              ¡Nuestro arte es hacer del Aluminio, parte de tu vida!</h2>

        <img className="logo" style={{width:"100%", height:"90vh", display:"flex", 
        justifyContent:"center", alignItems:"center",  }} src={home} alt='home' />


    </div>
   
  )
}

export default header