import React, { useState, useEffect } from "react";
import axios from "axios";


function FoodContainer() {

  const [query, setQuery] = useState([]);

  const [recipeList, setRecipeList] = useState([])

  const APP_ID = "171a1274";

  const APP_KEY = "2f55324f23c054712335c6346d529523"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=dairy-free`

  useEffect(()=> {
    loadRecipes()
  }, [])

  


  function loadRecipes(){

    axios.get(url).then((res) => {
      setRecipeList(res.data.hits[0])
      console.log(res.data.hits[0])
    })

    



  };
  
  


  


  
    
    

    

  const onSubmit = (e) => {
    e.preventDefault();
    
    loadRecipes()



  }

  const onChange = e => {
    setQuery(e.target.value)
  }



  return (
    <div className="FoodContainer">
      <h1>Food</h1>
      <form className="search-form" onClick={onSubmit}>
        <input type="text" placeholder="Search" onChange={onChange} value={query} />
        <input type="submit" value="search" />
      </form>
      {recipeList.length ? (
        <div>{recipeList}</div>

      ): (null)}
      
    </div>
  )






}
export default FoodContainer


