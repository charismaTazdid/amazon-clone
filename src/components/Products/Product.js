import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
const Product = ({productInfo, handleProduct, showCartBtn}) => {
    const {img, name, price, seller, stock, key} = productInfo;
 
  
    return (

        <div className="product">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div>
                 <h4 > <Link to={'/product/'+key} className='product-name'> {name}  </Link> </h4>
                <br />
                <p className="price"><small> $ {price}</small></p>
                <p><small> Seller : {seller} </small></p>
                <p className='stock'><small>Only {stock} item avilavle. Order fast.</small></p>

                {showCartBtn && <button className="productBtn" onClick= { () => handleProduct(productInfo)}> <FontAwesomeIcon icon={faCartPlus} />   Add to cart </button>}
                
            </div>
        </div>
    );
};

export default Product;