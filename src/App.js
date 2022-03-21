import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='App bg-neutral-50 min-h-screen '>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
