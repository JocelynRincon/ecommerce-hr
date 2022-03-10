
import React from 'react'
import home from '../media/home.jpg'

const header = () => {
  return (
    <div 
        style={{width:"100%", display:"flex", justifyContent:"center", 
        alignContent:"center", alignItems:"center", overflow:"hidden"}}
    > 
            <h2 style={{color:"white", fontSize:"1.3 rem", position:"absolute", display:"flex",
             marginTop:"400px",  
            textAlign:"center", }}>
              ¡Nuestro arte es hacer del Aluminio, parte de tu vida!</h2>

        <img style={{width:"100%", height:"75vh", display:"flex", 
        justifyContent:"center", alignItems:"center",  }} src={home} alt='home' />


    </div>
   
  )
}

export default header