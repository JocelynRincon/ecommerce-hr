import React from 'react';
import { useCart } from "react-use-cart"
import  '../container/style/ItemCard.css'

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      
<div className="card p-0 overflow-hidden h-100 shadow"> 
<div className="imagen-card">  <img src={props.img} className="card-img-top imagen"   alt=''/> </div>

  <div className="card-body text-center">
    <h5 className="card-title">{props.title} </h5>
    <h5 className="card-text">$ {props.price} </h5>
    <p className="card-text"> {props.desc} </p>
    <button className="btn btn-success" onClick={()=> addItem(props.item)}> Agregar al carrito</button>
  </div>
</div>

    </div>
  )
}

export default ItemCard