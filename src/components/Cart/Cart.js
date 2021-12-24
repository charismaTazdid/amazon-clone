import React from 'react';

const Cart = (props) => {
    const cart = props.orderSummary;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
    }

    const round = price => {
        const roundValue = price.toFixed(2);
        return Number(roundValue);
    }

    let shipping = 0;

    if (totalPrice > 150) {
        shipping = 0;
    }
    else if (totalPrice > 100) {
        shipping = 6.50;
    }
    else if (totalPrice > 0) {
        shipping = 14.99;
    }
    const tax = round(totalPrice / 10)
    // As 10% tax + VAT
    let grandTotal = round(totalPrice + tax + shipping);

    return (
        <div>
            <h4 className="text-danger">Order Summary: {cart.length} </h4>
            <h5>Total: $ {round(totalPrice)}</h5>
            <h5>Shipping Cost:  {shipping}</h5>
            <h5>tax + VAT: $ {tax}</h5>
            <h4>Grand Total: $ {grandTotal}</h4>
            {
               props.children
            }
           

        </div>
    );
};

export default Cart;