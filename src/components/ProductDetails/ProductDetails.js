import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';

const ProductDetails = () => {
const [productByKey, setProductByKey] = useState({})
    const { productKey } = useParams();
    useEffect(() => {
        fetch(`https://shielded-crag-68168.herokuapp.com/product/${productKey}`)
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