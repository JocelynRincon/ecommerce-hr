import React, { useState } from "react";
import data from "../data/Data";
import Itemcard from "./ItemCard"

const Home = () => {
  const [items, setItems] = useState(data.productData);
  const filterItem = (categItem) => {
    const updatedItems = data.productData.filter((curItem) => {
      return curItem.category === categItem;
    });
    if (updatedItems == null) {
      setItems(null);
    }
    setItems(updatedItems); 
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">Productos</h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warnig"
            onClick={() => setItems(data.productData)}
          >
            Todos
          </button>

          <button
            className="btn btn-warnig"
            onClick={() => filterItem("Door")}
          >
            Puertas
          </button>
          <button
            className="btn btn-warnig"
            onClick={() => filterItem("grate")}
          >
            Rejas
          </button>
          <button
            className="btn btn-warnig"
            onClick={() => filterItem("window")}
          >
            Ventanas
          </button>
        </div>
      </div>
      
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items != null ? (
                items.map((item) => {
                  const { id, title, img, desc, price } = item;
                  return (
                    <Itemcard
                      img={img}
                      title={title}
                      desc={desc}
                      price={price}
                      item={item}
                      key={id}
                    />
                  );
                })
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;