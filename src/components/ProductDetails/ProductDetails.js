import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetails = () => {

    const { productKey } = useParams();
    const productByKey = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            {/* <h3> {productkey} Details comming sooooonnnn.... </h3> */}
            
            <Product productInfo={productByKey} showCartBtn={false}></Product>
        </div>
    );
};

export default ProductDetails;