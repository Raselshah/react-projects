import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const totalShopping = total + shipping + tax;
  return (
    <div className="order-info">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge: $ {shipping}</p>
      <p>Tax: $ {tax}</p>
      <h4>Grand Total: $ {totalShopping.toFixed(2)}</h4>
      <div className="btn-group">
        <button>
          <p>Clear Cart</p> <MdDeleteForever />
        </button>
        <button>
          <p>Review Order </p> <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cart;
