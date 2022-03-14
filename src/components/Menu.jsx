import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'; 
import '../components/style/menu.css'


 function Menu() {
   const [dropdown, setDropdown]=useState(false);

   const abrirCerrarDropdown=()=>{
     setDropdown(!dropdown);

   }

   return (
    <div className='Menu'>
      
      
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle>
        <svg className="list" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>
            Inicio
          </DropdownItem>
          <DropdownItem>
            Productos       
          </DropdownItem>
          <DropdownItem>
            Contacto
          </DropdownItem>

        </DropdownMenu>
        


      </Dropdown>
   
     </div>
   )
 }

export default Menu;
