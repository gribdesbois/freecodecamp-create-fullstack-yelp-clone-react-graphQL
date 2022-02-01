import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Logo from './components/shared/Logo'
import PlanetSearch from './components/PlanetSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 style={{ margin: 'auto' }}>My first Apollo app</h2>
      <Logo />
      <PlanetSearch/>
    </div>
  )
}

export default App
