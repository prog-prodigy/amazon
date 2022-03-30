import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { auth, db } from './firebase'
import { useStateValue } from './StateProvider'
import Orders from './Orders'
import { onAuthStateChanged } from 'firebase/auth'
import orderImage from './images/order.png'
import Product from './Product'
const Order = () => {
    const [userId, setUserId] = useState('')
    const [basket, setBasket] = useState()
    const hideBtn = true;
    const [{ renderAd, user }] = useStateValue()
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser => {
            setUserId(currentUser)
        }))
        const fetchData = async () => {

            if (user) {
                const docRef = doc(db, 'data', `${userId.uid}`)
                await getDoc(docRef).then((doc) => {
                    setBasket(doc.data(), doc.id)
                })


            } else {
                setBasket([])
            }
        }
        fetchData()
    }, [user, userId?.uid])
    console.log(basket?.basket)

    if (basket?.basket) {
        return (
            <div className="order">
                <div className='order-text'>
                    <h1>Your Orders</h1>
                </div>
                <div className='orders-order'>
                    <h2><strong>Order id:</strong></h2>
                    <p>{userId?.uid}</p>
                    {basket?.basket?.map(order => {
                        return <Orders hideBtn={hideBtn} order={order} />
                    })}
                    <p><strong>Order total:</strong> Rs.{basket?.amount}</p>
                </div>
            </div>
        )

    } else {
        return (
            <div className='box'>
                <img className='order-null-image' alt='orderimage' src={orderImage} />
            </div>

        )
    }
}

export default Order