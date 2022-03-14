import React from "react";
import logo from "../media/im.jpeg";


const navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(1, 34, 60)",
        color: "white",
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:"10vh"

        
      }}

    >
      <img style={{
        width:"20%",
        
      
        // height:"auto",
      }}  src={logo} alt="" />
      
             
    </div>
  );
};

export default navbar;
