import React from 'react'
import '../assets/Styles/navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="nabar">
        <div className="log">
            <h3>LIBRARY BOOKS</h3>
        </div>
        <div className="links">
            <ul>
                <li><NavLink to='/portal/'>HOME</NavLink></li>
                <li><NavLink to='/portal/books'>BOOKS</NavLink></li>
                <li><NavLink to='/portal/addbook'>ADD BOOOKS</NavLink></li>
                <li><NavLink to='/portal/readbook'>READ BOOKS</NavLink></li>
                <li><NavLink to='/portal/cartiems'>CART ITEMS</NavLink></li>
                <li><NavLink to='/'>LOG OUT</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar