import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './Routes/Index'

function App() {

  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
