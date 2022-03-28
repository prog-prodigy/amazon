import React from 'react'
import './Home.css'
import banner from './images/banner.jpg'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src={banner} alt='banner'/>
            <div className='home-row'>
                <Product title={'Apple iPhone 12 (128GB) - Blue'} image={'https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg'} price={60490} id={'42321'} rating={4} />
                <Product title={'Mi Notebook Pro QHD+ IPS Anti Glare Display Intel Core i5-11300H 11th Gen 14-inch(35.56 cms) Thin and Light Laptop'} image={'https://m.media-amazon.com/images/I/41O7cCoUoVL._AC_SY400_.jpg'}
                price={37999}
                rating={3} id={'121232'}/>
            </div>
            <div className='home-row'>
            <Product title={'Boat Airdopes(3) TWS bluetooth '} id={'123434'} image={'https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_SY400_.jpg'} rating={5} price={1329} />
            <Product title={'Delmonte Del Monte Extra Virgin Olive Oil PET, 1L'} id={'121323'} image={'https://images-eu.ssl-images-amazon.com/images/I/51R81glBiOL._AC_SR400,600_.jpg'} rating={4} price={330} />
            <Product title={'Biker Helmet Protection '} id={'0041'} image={'https://m.media-amazon.com/images/I/41oUHP4YOiL._AC_SY400_.jpg'} rating={3} price={2999} />
            </div>
            <div className='home-row'>
            <Product title={'Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel® Core™ i5 - 16GB Memory - 256GB SSD - Platinum '} id={'039820'} image={'https://m.media-amazon.com/images/I/61UGE9cZVlL._AC_UY327_QL65_.jpg'} rating={5} price={373999} />
                
            </div>
        </div>
    </div>
  )
}

export default Home