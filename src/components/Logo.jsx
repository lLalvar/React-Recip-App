import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className=' font-Sansita py-8 flex items-center text-black text-4xl font-bold justify-center sm:justify-start'>
      <Link to='/'>
        <div className='flex cursor-pointer'>
          <GiKnifeFork className='cursor-pointer' />
          <div className='pl-2 cursor-pointer text-[2.375rem]'>delicious</div>
        </div>
      </Link>
    </div>
  )
}

export default Logo
