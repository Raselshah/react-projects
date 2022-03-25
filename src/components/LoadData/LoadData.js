import React from "react";
import "./LoadData.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const LoadData = (props) => {
  const { name, img, price, seller, ratings } = props.data;
  return (
    <div className="card">
      <div className="photo">
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <h4>Price :${price}</h4>
        <p>
          <small>Manufacturer :{seller}</small>
        </p>
        <p>
          <small>Rating :{ratings} star</small>
        </p>
      </div>
      <button onClick={() => props.handleCart(props.data)} className="btn-cart">
        <p>
          Add to Cart <BsFillCartPlusFill />
        </p>
      </button>
    </div>
  );
};

export default LoadData;
