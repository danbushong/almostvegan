import React, { useState } from "react";
import axios from "axios";
import Recipe from "./Recipe"
import {v4 as uuidv4} from "uuid" ;
import "../App.css"




function FoodContainer() {

  const [query, setQuery] = useState([]);

  const [recipes, setRecipe] = useState([])

  const [didItSubmit, setWasItSubmitted] = useState(false)

  const APP_ID = "171a1274";

  const APP_KEY = "2f55324f23c054712335c6346d529523"

  let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=dairy-free&health=egg-free&health=vegetarian`






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

  const bbOnSubmit = (e) => {
    e.preventDefault();
    //all vegetarian for bb
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegetarian`

    axios.get(url).then((res) => {
      setRecipe(res.data.hits)

    })
  }

  const dbOnSubmit = (e) => {
    e.preventDefault();
    //no egg or dairy for db
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=dairy-free&health=egg-free`

    axios.get(url).then((res) => {
      setRecipe(res.data.hits)

    })

  }

  const onChange = e => {
    setQuery(e.target.value)
  }

  const allOnSubmit = (e) => {
    e.preventDefault();
    //search all
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    axios.get(url).then((res) => {
      setRecipe(res.data.hits)

    })

  }





  return (
    <div className="App">
      <h1>Food for DB and BB! </h1>
      <h3>This app was created to help my wife and I figure out what foods we can eat. She is vegetarian, and I can not have dairy or eggs. I hope you find this app useful too!</h3>
      <form className="search-form">
      <input type="text" placeholder="Search" onChange={onChange} value={query} />
      
        <input type="submit" value="DB+BB" onClick={onSubmit} />
        <input type="submit" value="All Veg" onClick={bbOnSubmit} />
        <input type="submit" value="X Dairy+Egg" onClick={dbOnSubmit} />
        <input type="submit" value="All" onClick={allOnSubmit} />
      </form>
      <h4>Legend:</h4>
        <p>DB+BB= Vegetarian, no dairy, no egg</p>
        <p>All Veg= Vegetarian foods only</p>
        <p>X Dairy+Egg= No foods with dairy or egg in them</p>
        <p>All= No dietary restrictions</p>
      <div className="recipes">

        {recipes !== [] &&
          recipes.map(recipe =>
            <Recipe key={uuidv4()} recipe={recipe} />)}


      </div>
    </div>
  )


} export default FoodContainer


