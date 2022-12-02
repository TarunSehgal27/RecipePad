
import React from 'react';
import { useEffect,useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios'

export default function ShowRecipes() {
    const [apiData,setApiData] = useState([])
    useEffect(() =>{
      async function callApi(){
        const apiResult = await axios.get('http://127.0.0.1:9000/recipesWithSearch')
        
        setApiData(apiResult.data.recipes)
        console.log(apiResult)
    }
    callApi()
    console.log(apiData)
      },[])

      const recipeInformation = async (id) => {
        const res = await axios.get(`http://localhost:9000/recipeInformation/${id}`)
        console.log(res,id)
      }
    return (
        <div>
            <h1>RecipePad</h1>
            <p>You can make <span>400</span> recipies.</p>
            <div className="searchbox-recipes">
                <input type='search' placeholder='Search'/>
            </div>
            {apiData && apiData.map(recipe=> <div onClick={() => recipeInformation(recipe.id)}><Recipe title={recipe.title} image={recipe.image} /></div>)}
        </div>
    );
}