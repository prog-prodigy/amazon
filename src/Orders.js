
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Orders.css'
const Orders = ({ order: item, hideBtn }) => {
    return (
     <div className='order-item'>

            <CheckoutProduct hideBtn={hideBtn} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
            </div>

        
    )
}

export default Orders