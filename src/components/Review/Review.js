import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem'
import { useNavigate } from 'react-router';
import { UserContext } from '../../App';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([])
    const navigate = useNavigate();
    
    const handleCheckOut = () => {
        navigate('/shipment')
    };


    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKey = Object.keys(savedCart);
        const cartProduct = productsKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];

            return product; 
        })
        setCart(cartProduct)

    }, []);
//bla bla bla
    return (
        <div className='review-div'>

            <div className="review-product-container">
                <h2>Total Item: {cart.length}</h2>
                {
                  cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}> </ReviewItem>)
                }
            </div>

            <div className='cart-div' >
                <Cart orderSummary={cart}>
                    <button onClick={handleCheckOut} className="productBtn"> Check out </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;