import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from './StateProvider';
function Product({title,image,price,rating,id}) {
  const [state,dispatch]=useStateValue()
  const addtoBasket=()=>{
      dispatch({type:'ADD_TO_BASKET',
    item:{
      id,title,price,image,rating
    }})
    console.log(state.basket)
  }
  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_,i)=> (<p><StarIcon style={{color:'#f8ba1f'}}/></p>))}
               
            </div>

        </div>
       
            <img className='product-image' src={image} alt=''/>
       <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product