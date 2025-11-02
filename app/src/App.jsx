import { useState,useEffect, use } from 'react'
import './App.css'

function App() {
  const[meals, setMeals]= useState ([]);
  const[meal,setMeal]= useState ("Rice");
  const handleSubmit=(e)=>{
    e.preventDefault();
    getMeals();
  }

  async function getMeals(){
    {
      try{
        const res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+meal);
        const data= await res.json();
        setMeals(data.meals);
        console.log(data.meals);

      }catch (error){
        console.error("Error fetching meals:", error);
        alert("Failed to fetch meals. Please try again later.");
      }
    }
  }

useEffect (()=>{
  getMeals();
},[])




  return (
    <>
      <div className="py-2 px-4 max-w-4xl mx-auto">
       <h1 className="text-4xl lg:text-6xl text-neutral-800 bg-neutral-200 rounded-b-lg p-2 font-bold text-center mb-4">
        Recipe Finder
      </h1>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Enter food Name...'
          className="border-2 p-2 rounded-lg w-1/2 mx-auto block mb-4 text-black focus:border-neutral-800 focus:ring-4 focus:ring-neutral-800 outline-0"
          value={meal}
          onChange={e=>setMeal(e.target.value)}
          />
          
      </form>
       {meals ? 
       <div style={{justifySelf:"center"}}>
            {meals.map((meal)=>{
              return(
              <article className="border-2 p-4 rounded-lg bg-neutral-100 text-neutral-800 m-10" key={meal.idMeal}>
                <h2 className="text-2xl flex-wrap lg:text-4xl text-neutral-800  p-2 font-bold  mb-4">{meal.strMeal}<br></br>
                <span className='font-normal text-sm'>{meal.strCategory}</span><br></br>
                <span className='font-normal text-sm'>{meal.strArea}</span></h2>
                <img src={meal.strMealThumb} alt="Food Image" style={{width:"100%", height:"100vh"}}/>
                <h3 className="text-2xl lg:text-4xl text-neutral-800  p-2 font-bold  mb-2">Ingredients</h3>
                <ul className="p-2 list-decimal list-inside">
                  {meal.strIngredient1 && meal.strMeasure1 && (
                    <li>{meal.strIngredient1} - {meal.strMeasure1}</li>
                  )}
                  {meal.strIngredient2 && meal.strMeasure2 && (
                    <li>{meal.strIngredient2} - {meal.strMeasure2}</li>
                  )}
                  {meal.strIngredient3 && meal.strMeasure3 && (
                    <li>{meal.strIngredient3} - {meal.strMeasure3}</li>
                  )}
                  {meal.strIngredient4 && meal.strMeasure4 && (
                    <li>{meal.strIngredient4} - {meal.strMeasure4}</li>
                  )}
                  {meal.strIngredient5 && meal.strMeasure5 && (
                    <li>{meal.strIngredient5} - {meal.strMeasure5}</li>
                  )}
                  {meal.strIngredient6 && meal.strMeasure6 && (
                    <li>{meal.strIngredient1} - {meal.strMeasure1}</li>
                  )}
                  {meal.strIngredient7 && meal.strMeasure7 && (
                    <li>{meal.strIngredient7} - {meal.strMeasure7}</li>
                  )}
                  {meal.strIngredient8 && meal.strMeasure8 && (
                    <li>{meal.strIngredient8} - {meal.strMeasure8}</li>
                  )}
                  {meal.strIngredient9 && meal.strMeasure9 && (
                    <li>{meal.strIngredient9} - {meal.strMeasure9}</li>
                  )}
                  {meal.strIngredient10 && meal.strMeasure10 && (
                    <li>{meal.strIngredient10} - {meal.strMeasure10}</li>
                  )}
                  {meal.strIngredient11 && meal.strMeasure11 && (
                    <li>{meal.strIngredient11} - {meal.strMeasure11}</li>
                  )}
                  {meal.strIngredient12 && meal.strMeasure12 && (
                    <li>{meal.strIngredient12} - {meal.strMeasure12}</li>
                  )}
                  {meal.strIngredient13 && meal.strMeasure13 && (
                    <li>{meal.strIngredient13} - {meal.strMeasure13}</li>
                  )}
                  {meal.strIngredient14 && meal.strMeasure14 && (
                    <li>{meal.strIngredient14} - {meal.strMeasure14}</li>
                  )}
                  {meal.strIngredient15 && meal.strMeasure15 && (
                    <li>{meal.strIngredient15} - {meal.strMeasure15}</li>
                  )}
                  {meal.strIngredient16 && meal.strMeasure16 && (
                    <li>{meal.strIngredient16} - {meal.strMeasure16}</li>
                  )}
                  {meal.strIngredient17 && meal.strMeasure17 && (
                    <li>{meal.strIngredient17} - {meal.strMeasure17}</li>
                  )}
                  {meal.strIngredient18 && meal.strMeasure18 && (
                    <li>{meal.strIngredient18} - {meal.strMeasure18}</li>
                  )}
                  {meal.strIngredient19 && meal.strMeasure19 && (
                    <li>{meal.strIngredient19} - {meal.strMeasure19}</li>
                  )}
                </ul>
                
                <h3 className="text-2xl lg:text-4xl text-neutral-800  p-2 font-bold  mb-2">Instructions</h3>
                <p className="text-2sm lg:text-4sm text-neutral-800  p-2 font-light  mb-2">{meal.strInstructions}</p>
                <ul className="p-2 flex-wrap gap-4 list-inside"> 
                  <li className='text-center'>
                    {meal.strYoutube && (
                      <a href={meal.strYoutube} rel='noreferrer' target='_blank' style={{background:"grey",width:"60px",padding:"5px", borderRadius:"50px", fontStyle:"bold", marginRight:"10px"}}>Watch</a> 
                    )}
                  {meal.strSource && (
                    <a href={meal.strSource} rel='noreferrer' target='_blank'style={{background:"grey",width:"60px",padding:"5px", borderRadius:"50px", fontStyle:"bold"}}>Source</a>

                  )}
                  </li>
                 
                </ul>
            </article>
              )
            })}
          </div>
          : <p className='text-center text-2xl mt-10 '>No {meal} found. Try different Foods.</p>
       }
    </div>
    </>
  )
}

export default App
