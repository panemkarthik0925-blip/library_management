import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Components/Landingpage'
import Portal from './Components/Portal'
const App = () => {
  return (
    <>
       <div className="app">
        <BrowserRouter>
            <Routes>
              <Route element={<Landingpage/>} path='/'/>
              <Route element={<Portal/>} path='/portal/*'/>
              
            </Routes>
        </BrowserRouter>
       </div>
    
    
    </>
  )
}

export default App