import React from 'react'
import { useCart } from 'react-use-cart'


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center"> Tu carrito está vacío</h1>
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5> Item ({totalUniqueItems}) total Items: ({totalItems}) 
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>

                    <td>
                      <img src={item.img} style={{ height: '6rem' }} alt='product' />
                    </td>
                    <td> {item.title} </td>
                    <td> {item.price} </td>
                    <td> Cantidad ({item.quantity} ) </td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}

                      >+</button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => removeItem(item.id)}
                      >Eliminar Items</button>
                    </td>

                  </tr>
                )

              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>
            Total precio: $ {cartTotal} </h2>

        </div>

        <div className="col-auto" >
          <button
            className="btn btn-danger m-2"
            onClick={() => emptyCart()}
          > limpiar carrito</button>
          <button className="btn btn-primary" >Ir a Pagar  </button>
        </div>

      </div>
    </section>
  )
}

export default Cart