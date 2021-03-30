import React from "react";

function FoodDetail(props) {
  return (
    <div className="text-center">
      <h1> Food name: {props.food} </h1>
      <h3>Is it vegetarian? {props.vegetarian}</h3>
      <h3>Does it have dairy? {props.dairy}</h3>
      
    </div>
  );
}

export default FoodDetail;