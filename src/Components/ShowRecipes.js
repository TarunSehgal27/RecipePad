
import React from 'react';
import { useEffect,useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios'

export default function ShowRecipes() {
    const [apiData,setapiData] = useState([])
    useEffect(() =>{
      async function callApi(){
        const apiResult = await axios.get('http://127.0.0.1:9000/recipesWithSearch')
        console.log(apiResult)
        setapiData(apiResult.data)
    }
    callApi()
    console.log(apiData)
      },[apiData])
    return (
        <div>
            <h1>RecipePad</h1>
            <p>You can make <span>400</span> recipies.</p>
            <div className="searchbox-recipes">
                <input type='search' placeholder='Search'/>
            </div>
            
            
            <div className='recipes'>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    );
}