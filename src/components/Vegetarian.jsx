import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([])
  const check = localStorage.getItem('vegetarian')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const ref = useRef()

  useEffect(() => {
    getVegetarian()
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
  }, [])

  const getVegetarian = async () => {
    if (check) {
      setVegetarian(JSON.parse(check))
    } else {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      )
      localStorage.setItem('vegetarian', JSON.stringify(res.data.recipes))
      setVegetarian(res.data.recipes)
    }
  }

  return (
    <div className='container mx-auto my-10'>
      <h3 className='font-semibold mb-6 md:text-xl'>Our Vegetarian Picks</h3>
      {screenWidth > 680 ? (
        <Splide
          ref={ref}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2vw',
            autoplay: true,
            interval: 3000,
            resetProgress: false,
            arrows: false,
            pagination: false,
            drag: 'free',
          }}
          hasAutoplayProgress
        >
          <SplideSlide>
            {vegetarian.map((recipe, index) => {
              if (index === 0) {
                return (
                  <Link key={recipe.id} to={'/recipe/' + recipe.id}>
                    <div className='rounded-lg overflow-hidden cursor-grab active:cursor-grabbing sm:rounded-2xl text-center'>
                      <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                      <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                        {recipe.title}
                      </h4>
                      <img
                        src={recipe.image}
                        alt=''
                        className=' object-cover'
                      />
                    </div>
                  </Link>
                )
              }
            })}
          </SplideSlide>
          {vegetarian.map((recipe, index) => {
            if (index !== 0) {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={'/recipe/' + recipe.id}>
                    <div className='rounded-lg overflow-hidden cursor-grab active:cursor-grabbing sm:rounded-2xl text-center'>
                      <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                      <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                        {recipe.title}
                      </h4>
                      <img
                        src={recipe.image}
                        alt=''
                        className=' object-cover'
                      />
                    </div>
                  </Link>
                </SplideSlide>
              )
            }
          })}
        </Splide>
      ) : (
        <Splide
          ref={ref}
          options={{
            type: 'loop',
            perPage: 2,
            perMove: 1,
            gap: '2vw',
            autoplay: true,
            interval: 3000,
            resetProgress: false,
            arrows: false,
            pagination: false,
            drag: 'free',
          }}
          hasAutoplayProgress
        >
          <SplideSlide>
            {vegetarian.map((recipe, index) => {
              if (index === 0) {
                return (
                  <Link key={recipe.id} to={'/recipe/' + recipe.id}>
                    <div className='rounded-lg overflow-hidden cursor-grab active:cursor-grabbing sm:rounded-2xl text-center'>
                      <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                      <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                        {recipe.title}
                      </h4>
                      <img
                        src={recipe.image}
                        alt=''
                        className=' object-cover'
                      />
                    </div>
                  </Link>
                )
              }
            })}
          </SplideSlide>
          {vegetarian.map((recipe, index) => {
            if (index !== 0) {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={'/recipe/' + recipe.id}>
                    <div className='rounded-lg overflow-hidden cursor-grab active:cursor-grabbing sm:rounded-2xl text-center'>
                      <div className='bg-gradient-to-t absolute w-full from-black rounded-xl opacity-30 h-1/2 bottom-0'></div>
                      <h4 className='absolute text-white left-1/2 bottom-1 sm:bottom-6 -translate-x-1/2 text-xs sm:text-lg w-full'>
                        {recipe.title}
                      </h4>
                      <img
                        src={recipe.image}
                        alt=''
                        className=' object-cover'
                      />
                    </div>
                  </Link>
                </SplideSlide>
              )
            }
          })}
        </Splide>
      )}
    </div>
  )
}

export default Vegetarian
