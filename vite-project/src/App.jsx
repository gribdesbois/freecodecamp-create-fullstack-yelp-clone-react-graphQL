import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Logo from './components/shared/Logo'
import PlanetSearch from './components/PlanetSearch'
import Planet from './components/Planet'
import ErrorBoundary from './components/shared/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ErrorBoundary>

        <h2 style={{ margin: 'auto' }}>My first Apollo app</h2>
        <Logo />
        <Routes>
          <Route path='/planet/:id' element={<Planet />} />
          <Route path='/' element={<PlanetSearch />}/>

        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
