import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiPlus,BiMinus } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
// import axios from 'axios'

const CartItem = ({_id,name,image,price,countInStock}) => {
  const prova = useGlobalContext()
  console.log(prova);
  return <article className="cart-item">
  <div className="img-container">
  <img src={image} alt={name} className="img"></img>
  </div>
  <p className="prd-name">{name}</p>
  <div className="qty-selector">
  <button className="btn icon-btn">
  <BiPlus className="icon"/>
  </button>
  <p>1</p>
  <button className="btn icon-btn">
  <BiMinus className="icon minus-icon"/>
  </button>
  </div>
  <p>{price} €</p>
  <button className="btn icon-btn">
  <MdDeleteForever className="icon minus-icon"/>
  </button>
  </article>;
};

export default CartItem;