import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SearchPage = () => {
  const params = useParams().search
  const [searchedRecipes, setSearchedRecipes] = useState([])

  const getSearched = async (name) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    setSearchedRecipes(res.data.results)
  }

  useEffect(() => {
    getSearched(params)
  }, [params])

  return (
    <div className='container mx-auto mt-10 pb-10 grid grid-cols-2 gap-[2vw] lg:grid-cols-3 xl:grid-cols-4'>
      {searchedRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className='rounded-lg overflow-hidden cursor-pointer sm:rounded-2xl text-center relative'
        >
          <div className='bg-gradient-to-t absolute from-black rounded-xl opacity-50 h-1/2 bottom-0 w-full'></div>
          <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-sm sm:text-xl'>
            {recipe.title}
          </h4>
          <img src={recipe.image} alt='' className=' object-cover w-full' />
        </div>
      ))}
    </div>
  )
}

export default SearchPage
