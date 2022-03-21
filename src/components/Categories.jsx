import React from 'react'
import Category from './Category'
import { FaPizzaSlice } from 'react-icons/fa'
import US from '../assets/us.png'
import Italy from '../assets/italy.png'
import France from '../assets/france.png'
import Japan from '../assets/japan.png'

const Categories = () => {
  return (
    <div className='flex gap-4 sm:gap-8 justify-center my-6 '>
      <Category text={'american'} icon={US} />
      <Category text={'italian'} icon={Italy} />
      <Category text={'french'} icon={France} />
      <Category text={'japanese'} icon={Japan} />
    </div>
  )
}

export default Categories
