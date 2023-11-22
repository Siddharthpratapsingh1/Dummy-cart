import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div style={{display: "flex" , alignItems: "center", justifyContent: "space-between"}}>
        <span>Add Cart App</span>
        <div>
            <Link className='navLink' style={{fontWeight: "bolder"}} to={"/"}>Home</Link>
            <Link className='navLink' style={{margin: "8px", fontWeight: "bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight: "bolder"}}>Items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar