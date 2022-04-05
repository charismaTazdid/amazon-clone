import React from 'react';
import './Inventory.css';


const Inventory = () => {

    const handleAddProduct = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })


    };

    return (
        <div className='inventory'>
            <h2>Inventory in under development proccess</h2>


            <br />
            <br />
            <br />
            <form action="">
                <p><span>Name: </span><input type="text" /></p>
                <p><span> Price: </span><input type="text" /></p>
                <p><span> Quantity: </span><input type="text" /></p>
                <p><span>Product Image: </span><input type="file" /></p>


                <button onClick={handleAddProduct} type="submit" className='inventoryAddProduct'> Add Product </button>
            </form>




        </div>
    );
};

export default Inventory;