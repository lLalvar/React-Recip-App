import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Recipe = () => {
  const params = useParams().name
  const [details, setDetails] = useState({})
  const [active, setActive] = useState('Instructions')

  const fetchDetails = async (name) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${params}/information?apiKey=1f4431ebff0d46c2913b845d69c959fb`
    )
    setDetails(res.data)
  }

  useEffect(() => {
    fetchDetails(params)
  }, [])

  return (
    <div className='container mx-auto flex flex-col sm:flex-row mt-10 pb-10 gap-10 justify-center'>
      <div className='flex-1'>
        <h1 className=' mb-6 font-semibold'>{details.title}</h1>
        <img src={details.image} alt='' className='' />
      </div>
      <div className='flex-1'>
        <div className='gap-6 flex justify-center sm:justify-start mb-6'>
          <button
            onClick={() => setActive('Instructions')}
            className={`${
              active === 'Instructions' && `bg-neutral-700 text-white`
            }  px-4 py-2 rounded-md border-2 border-neutral-700 hover:-translate-y-1 transition-transform `}
          >
            Instructions
          </button>
          <button
            onClick={() => setActive('Ingredients')}
            className={`${
              active === 'Ingredients' && `bg-neutral-700 text-white`
            } px-4 py-2 rounded-md border-2 border-neutral-700 hover:-translate-y-1 transition-transform `}
          >
            Ingredients
          </button>
        </div>
        {active === 'Instructions' && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: details.summary }}
              className='mb-6'
            ></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {active === 'Ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className='list-disc ml-5'>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Recipe
