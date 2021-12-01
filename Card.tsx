import React from "react";
import { useState } from "react";
import Buton from "./Buton";
interface cardData {
  name: string,
  price: number,
}
const Card = ({name,price} : cardData) =>{
    const showMSg: string = "Nothing to show"
    return <div>
    <div className="card shadow">
    <div className="card-header">
      Show Weather Details
    </div>
    <div className="card-body" >
      <p className="card-text float-left">Name : {name}</p>
      <p className="card-text float-left">Price: {price}</p>

    </div>

  </div></div>
}
export default Card;