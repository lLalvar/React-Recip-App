import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const CategoryPage = () => {
  const category = useParams().type
  const [recipes, setRecipes] = useState([])
  const check = localStorage.getItem(category)

  const getCategory = async (category) => {
    if (check) {
      setRecipes(JSON.parse(check))
    } else {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=6df787a95f8f4305932b36cdf58d8074&cuisine=${category}`
      )
      localStorage.setItem(category, JSON.stringify(res.data.results))
      setRecipes(res.data.results)
    }
  }
  useEffect(() => {
    getCategory(category)
  }, [category])

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='container mx-auto mt-10 pb-10 grid grid-cols-2 gap-[2vw] lg:grid-cols-3 xl:grid-cols-4'
    >
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={'/recipe/' + recipe.id}>
          <div className='rounded-lg overflow-hidden cursor-pointer sm:rounded-2xl text-center relative'>
            <div className='bg-gradient-to-t absolute from-black rounded-xl opacity-50 h-1/2 bottom-0 w-full'></div>
            <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-sm sm:text-xl'>
              {recipe.title}
            </h4>
            <img src={recipe.image} alt='' className=' object-cover w-full' />
          </div>
        </Link>
      ))}
    </motion.div>
  )
}

export default CategoryPage
