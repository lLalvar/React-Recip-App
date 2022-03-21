import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ text, icon }) => {
  return (
    <Link to={`category/${text}`}>
      <div className='flex flex-col justify-center items-center bg-neutral-700 text-neutral-100 w-[60px] h-[60px] rounded-full gap-px  cursor-pointer hover:bg-neutral-600 transition duration-300'>
        <img src={icon} alt='' />
        <div className='text-[.675rem]'>{text}</div>
      </div>
    </Link>
  )
}

export default Category
