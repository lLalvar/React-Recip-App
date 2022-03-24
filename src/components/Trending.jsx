import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const check = localStorage.getItem('popular')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    getTrending()
    const handelResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handelResize)
    return () => {
      window.removeEventListener('resize', handelResize)
    }
  }, [])

  const getTrending = async () => {
    if (check) {
      setTrending(JSON.parse(check))
    } else {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=6df787a95f8f4305932b36cdf58d8074&number=9&sort=popularity`
      )
      localStorage.setItem('popular', JSON.stringify(res.data.results))
      setTrending(res.data.results)
    }
  }

  return (
    <div className='container mx-auto pb-10'>
      <h3 className='font-semibold mb-6 md:text-xl'>Trending</h3>
      {screenWidth > 680 ? (
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            gap: '2vw',
            arrows: false,
            pagination: false,
            drag: 'free',
          }}
        >
          {trending.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id}>
                <div className='rounded-lg overflow-hidden cursor-grab active:cursor-grabbing sm:rounded-2xl text-center relative'>
                  <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                  <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                    {recipe.title}
                  </h4>
                  <img
                    src={recipe.image}
                    alt=''
                    className='object-cover w-full'
                  />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            gap: '2vw',
            arrows: false,
            pagination: false,
            drag: 'free',
          }}
        >
          {trending.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id}>
                <div className='rounded-lg overflow-hidden cursor-grab h-44 active:cursor-grabbing sm:rounded-2xl text-center'>
                  <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                  <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                    {recipe.title}
                  </h4>
                  <img
                    src={recipe.image}
                    alt=''
                    className=' object-cover h-44'
                  />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  )
}

export default Trending
