import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
  }

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className='container mx-auto sm:max-w-md w-4/5 relative'
    >
      <FaSearch className='absolute text-neutral-300 sm:top-[.7rem] left-2 top-[.875rem]' />
      <input
        onChange={(e) => setInput(e.target.value)}
        className='placeholder:italic placeholder:text-neutral-300 block bg-neutral-700 text-white w-full border 
        border-slate-300 rounded-lg py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-neutral-300
        focus:ring-neutral-300 focus:ring-1 sm:text-sm'
        placeholder='search for cookies...'
        type='text'
        value={input}
        name='search'
      />
    </form>
  )
}

export default Search
