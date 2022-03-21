import Vegetarian from '../components/Vegetarian'
import Trending from '../components/Trending'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vegetarian />
      <Trending />
    </motion.div>
  )
}

export default Main
