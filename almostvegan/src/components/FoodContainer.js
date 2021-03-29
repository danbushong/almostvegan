import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { wasItSubmitted} from "../Atoms"


function FoodContainer() {

  const [query, setQuery] = useState([]);

  const [recipeReturned, setRecipeList] = useState("nothing here")

  const [didItSubmit, setWasItSubmitted] = useState(false)


  // const [formObject, setFormObject] = useState([])

  

  
  

  const APP_ID = "171a1274";

  const APP_KEY = "2f55324f23c054712335c6346d529523"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=dairy-free&health=egg-free`

  
  
  
 

  function loadRecipes(){

    axios.get(url).then((res) => {
      setRecipeList(res.data.hits[0])
      
    })

    



  };

  console.log(didItSubmit)

  const onSubmit = (e) => {
    e.preventDefault();
    setWasItSubmitted(true)
    console.log(didItSubmit)
    
    



  }

  const onChange = e => {
    setQuery(e.target.value)
  }

  



  return (
    <div className="FoodContainer">
      <h1>Food</h1>
      <form className="search-form" >
        <input type="text" placeholder="Search" onChange={onChange} value={query} />
        <input type="submit" value="search" onClick={onSubmit}/>
      </form>
      
      <div>
        <div>{recipeReturned}</div>
        

      </div>
      
      
      
    

      
      
    </div>
  )






}
export default FoodContainer


