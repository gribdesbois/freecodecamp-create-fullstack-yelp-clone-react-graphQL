import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Planets from './components/Planets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>My first Apollo app</h2>
      <Planets/>
    </div>
  )
}

export default App
