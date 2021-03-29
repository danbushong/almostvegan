import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe"
import {v4 as uuidv4} from "uuid" ;



function FoodContainer() {

  const [query, setQuery] = useState([]);

  const [recipes, setRecipe] = useState([])

  const [didItSubmit, setWasItSubmitted] = useState(false)


  // const [formObject, setFormObject] = useState([])






  const APP_ID = "171a1274";

  const APP_KEY = "2f55324f23c054712335c6346d529523"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=dairy-free&health=egg-free`






  function loadRecipes() {

    axios.get(url).then((res) => {
      setRecipe(res.data.hits)

    })





  };

  console.log(didItSubmit)

  const onSubmit = (e) => {
    e.preventDefault();
    setWasItSubmitted(true)
    console.log(didItSubmit)
    loadRecipes();
    console.log(recipes)





  }

  const onChange = e => {
    setQuery(e.target.value)
  }





  return (
    <div className="FoodContainer">
      <h1>Food</h1>
      <form className="search-form" >
        <input type="text" placeholder="Search" onChange={onChange} value={query} />
        <input type="submit" value="search" onClick={onSubmit} />
      </form>
      <div className="recipes">

        {recipes !== [] &&
          recipes.map(recipe =>
            <Recipe key={uuidv4()} recipe={recipe} />)}


      </div>
    </div>
  )


} export default FoodContainer


