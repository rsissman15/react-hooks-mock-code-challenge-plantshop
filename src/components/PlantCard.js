import React, {useState} from "react";

function PlantCard({plant}) {
  const [inStock,setStock]=useState(true)

  function handleClick(){
    setStock(!inStock)
  }

  const handleButtonClass= inStock ? "primary" : ""
  const handleButtonName= inStock ? "In Stock" : "Out of Stock"



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleClick} className={handleButtonClass}>{handleButtonName}</button>

    </li>
  );
}

export default PlantCard;
