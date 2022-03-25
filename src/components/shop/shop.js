import React, { useEffect, useState } from "react";
import LoadData from "../LoadData/LoadData";
import "./shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storeCart = getStoredCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleCart = (setProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === setProduct.id);
    if (!exists) {
      setProduct.quantity = 1;
      newCart = [...cart, setProduct];
    } else {
      const rest = cart.filter((product) => product.id !== setProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart, product];
    setCart(newCart);
    addToDb(setProduct.id);
  };
  return (
    <div className="shop">
      <div className="product-item">
        {products.map((product) => (
          <LoadData
            key={product.id}
            data={product}
            handleCart={handleCart}
          ></LoadData>
        ))}
      </div>
      <div className="order-summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
