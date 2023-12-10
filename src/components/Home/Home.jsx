import React, { useState } from 'react';
import '../Home/Home.css';
import Navbar from './Navbar';
import { data } from '../../data';
import Footer from './Footer';
import { FaStar, FaHeart } from 'react-icons/fa';

const Home = () => {
  const [cart, setCart] = useState(0);
  const handleCart = () => {
    setCart((prevCart) => prevCart + 1);
  };
  return (
    <div className='home-container'>
      <Navbar cartCount={cart} />
      <div className='home-main'>
        {data.map((item, index) => (
          <div key={index} className='item-card'>
            <div className='card-img'>
              <img src={item.img} alt={item.name} />
              <FaHeart className='heart-icon' />
            </div>
            <div className='item-details'>
              <p>{item.name}</p>
              <h4>{item.brand}</h4>
              <div className='item-price-rating'>
                <p>{item.price}</p>
                <div className='rating-w-star'>
                  <FaStar fontSize='.8rem' />
                  <p>{item.ratingStar}</p>
                </div>
              </div>
            </div>
            <div className='cart-buy' onClick={handleCart}>
              <button className='cart'>Add to cart</button>
              <button className='buy'>Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
