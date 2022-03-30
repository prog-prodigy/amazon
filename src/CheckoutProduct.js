import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
import {motion} from 'framer-motion'
const CheckoutProduct = ({title,price,rating,image,id,hideBtn}) => {
    const [{basket},dispatch]= useStateValue()
    
    const removefromBasket=()=>{
        dispatch({type:'REMOVE_FROM_BASKET',payload:{id:id}})
    }
  return (
    <motion.div layout transition>
    <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={image} alt='cartproduct'/>
            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct-rating'>{Array(rating).fill().map(()=> <p><StarIcon style={{color:'#fc7'}}/></p>)}</p>
     {!hideBtn && <button onClick={removefromBasket}>Remove from Basket</button>}   
            </div>
    </div>
    </motion.div>
  )
}

export default CheckoutProduct