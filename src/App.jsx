import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Redirect from './pages/Redirect'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create/>} />
      <Route path='u/:id' element={<Redirect/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
