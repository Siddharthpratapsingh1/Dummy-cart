import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/Cartslice';

const Cart = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((state)=>state.cart)
  
  const handleremove =(id)=>{
    dispatch(remove(id))
  }
  
  return (
    <div className='cartWrapper'>
      {CartItems.map((items)=>(
        <div className='cartCard'>
          <img src={items.image} alt="img" />
          <h5>{items.title}</h5>
          <h5>{items.price}</h5>
          <button className='btn' onClick={()=>handleremove(items.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart