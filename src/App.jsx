import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/homeC/Home'
import Battle from './components/battle/Battle'
import Bootcamp from './components/bootcamp/Bootcamp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
