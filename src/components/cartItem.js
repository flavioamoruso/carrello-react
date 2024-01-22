import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiPlus,BiMinus } from "react-icons/bi";
import formatNumber from '../utils/formatNumber';
import { useGlobalContext } from "../context/context";
// import axios from 'axios'

const CartItem = ({_id,name,image,price,qty,countInStock}) => {
  const { deleteItem,aumentaQty,diminuisciQty }= useGlobalContext()
  const aggiungiQty=(_id)=>{
    if(qty+1>countInStock){
      return 
    }
    return aumentaQty(_id)
  }

  const sottraiQty=(_id)=>{
    if( qty - 1 < 1 ){
      return deleteItem(_id)
    }
    return diminuisciQty(_id)
  }

 


  return <article className="cart-item">
  <div className="img-container">
  <img src={image} alt={name} className="img"></img>
  </div>
  <p className="prd-name">{name}</p>
  <div className="qty-selector">
  <button className="btn icon-btn"  onClick={()=> aggiungiQty (_id)}>
  <BiPlus className="icon"/>
  </button>
  <p>{qty}</p>
  <button className="btn icon-btn">
  <BiMinus className="icon minus-icon"onClick={()=>sottraiQty(_id)}/>
  </button>
  </div>
  <p>{formatNumber(price)}</p>
  <button className="btn icon-btn" onClick={()=> deleteItem(_id)}>
  <MdDeleteForever className="icon minus-icon"/>
  </button>
  </article>;
};

export default CartItem;