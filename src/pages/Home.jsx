import Categories from '../components/Categories'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Main from './Main'
import { Routes, Route, useLocation } from 'react-router-dom'
import CategoryPage from './CategoryPage'
import SearchPage from './SearchPage'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const location = useLocation()
  return (
    <div className='container w-11/12 mx-auto xl:w-screen'>
      <Logo />
      <Search />
      <Categories />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main />} />
          <Route path='/category/:type' element={<CategoryPage />} />
          <Route path='/searched/:search' element={<SearchPage />} />
          <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Home
