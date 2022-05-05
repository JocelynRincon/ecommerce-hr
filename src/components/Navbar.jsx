import React from "react";
import im from "../media/im.jpeg";
import "../components/style/Navbar.css"


const navbar = () => {
  return (
<div id="about">
      <nav className="header navbar navbar-expand-lg navbar-light">
        <div  className="cont-nav container-fluid">
          <img className="but-log" src={im} alt="logo" />
          {/* <navLink className="navbar-brand" to="#">Portafolio</navLink> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="list-nav collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#header">
                  Inicio </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Productos </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contacto </a>
                  </li>
            </ul>
            </div>
        </div>
      </nav>
      
      </div>
  );
};
export default navbar;


