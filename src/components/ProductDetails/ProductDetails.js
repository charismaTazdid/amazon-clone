import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';

const ProductDetails = () => {
const [productByKey, setProductByKey] = useState({})
    const { productKey } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productKey}`)
            .then(res => res.json())
            .then( data => setProductByKey(data))

    }, [productKey])

    // const productByKey = fakeData.find(pd => pd.key === productKey);

    return (
        <div>
            {/* <h3> {productkey} Details comming sooooonnnn.... </h3> */}

            <Product productInfo={productByKey} showCartBtn={false}></Product>
        </div>
    );
};

export default ProductDetails;