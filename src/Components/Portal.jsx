import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import ReadBook from './Readbook'
import AddBook from './Addbook'
import Cartitems from './Cartitems'
const Portal = () => {
  return (
    <>
    <div className="portal">
        <Navbar/>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Books/>} path='/books'/>
            <Route element={<AddBook/>} path='/addbook'/>
            <Route element={<ReadBook/>} path='/readbook/:id'/>
            <Route element={<Cartitems/>} path='/cartiems'/>
        </Routes>
    </div>
    </>
  )
}

export default Portal