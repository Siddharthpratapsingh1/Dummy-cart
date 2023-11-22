import React, { useEffect, useState} from 'react'

import { useDispatch } from 'react-redux'
import { add } from '../Redux/Cartslice';


const Home = () => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch();

    const fetchproduct = async()=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        setProduct(data);
      }


    useEffect(() => {
      fetchproduct();
    }, [ ])

    const handleadd =(products)=>{
      dispatch(add(products));
    }
  return (
   
    <div className='productsWrapper'>
        {
        product.map((products)=>(
            <div className='card'  key={products.id}>
                <img src={products.image} alt="iimg" />
                <h4>{products.title}</h4>
                <h5>{products.price}</h5>
                <button className='btn' onClick={()=>handleadd(products)} >Add to Cart</button>

            </div>
        )) 
        }
    </div>
  )
}

export default Home