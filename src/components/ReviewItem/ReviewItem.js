import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    // console.log("this is props", props)
    const { img, name, price, seller, quantity, key } = props.product;

    return (
        <div className="itemProduct">
            <div className="pdimg">
                <img src={img} alt="" />
            </div>

            <div className='review-product-info'>
                <h6 className="">{name}</h6>
                <h5>Price: {price}</h5>
                <p>Seller: {seller}</p>
                <p> Quantity : {quantity} </p>
                <button className="productBtn" 
                onClick={() => props.removeProduct(key)}>
                    Remove Item
                </button>
                

            </div>
        </div>
    );
};

export default ReviewItem;