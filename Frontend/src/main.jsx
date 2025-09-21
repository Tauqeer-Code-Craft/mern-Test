import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Cards from './Pages/Cards.jsx'
import About from './Pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/cards' element={<Cards/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)
