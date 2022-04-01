import React, { useEffect, useState } from 'react';
import fakedata from '../../fakeData';
import './Shop.css';
import Product from '../Products/Product';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { useContext } from 'react';
import { UserContext } from '../../App';
import HomeBanner from '../HomeBanner/HomeBanner';




const Shop = () => {
    // for Show and display product
    const initialDesplayProduct = fakedata.slice(0, 26);
    const [products, setProduct] = useState(initialDesplayProduct);

    // purpose of shoping cart 
    // const [cart, setCart] = useState([]);
    
    const [cart, setCart] = useContext(UserContext)

    useEffect(() => {    //to fix the problem when we visit shop page after sometiem then cart item changed... but we need the previous cart history.
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousProduct = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            
            return product;

        })
        setCart(previousProduct)
    }, [])

    const handleAddProduct = (product) => {
        // console.log("your product", product)
        const productKey = product.key;
        const sameProduct = cart.find(pd => pd.key === productKey);
        let count = 1;  //mdoifyed for solve quantity problem
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== productKey);
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        // const newCart = [...cart, product]
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const productCount = sameProduct.length;

        addToDatabaseCart(product.key, count)
    }
    return (
        <div className='shopContainer'>
            
            <div>
                <HomeBanner/>
            </div>
            <div className="product-container">
                {
                    products.map(pd => <Product productInfo={pd} handleProduct={handleAddProduct} showCartBtn={true} key={pd.key}></Product>)
                }

            </div>
           <div className='footer'>

           </div>
        </div>
    );
}

export default Shop;