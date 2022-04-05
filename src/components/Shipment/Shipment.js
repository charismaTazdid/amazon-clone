import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css';

const Shipment = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => {
        const savedCart = getDatabaseCart();
        const orderDetails = { ...logedInUser, orderdProducts: savedCart, shipmentInfo: data, orderTime: new Date() }
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('order placed successfully')
                processOrder()
            }
        })

    };

    return (
        <>
            <h4 className='shipping'> Provide Shipping and Billing Information... </h4>

            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <input className='form-input' {...register("firstName", { required: true })} placeholder='First Name' defaultValue={logedInUser.name} />
                {errors.firstName && <span className='error'>Name is required</span>}

                <input className='form-input' {...register("lastName", { required: true })} placeholder='Last Name' />
                {errors.lastName && <span className='error'>Name is required</span>}


                <input className='form-input' {...register("email", { required: true })} placeholder='Your Email' defaultValue={logedInUser.email} />
                {errors.email && <span className='error'>Email is required</span>}

                <select {...register("Distric")}>

                    <option value="Dhaka"> Dhaka </option>
                    <option value="Chittagong"> Chittagong </option>
                    <option value="Shylet"> Shylet </option>
                    <option value="Rangpur"> Rangpur </option>
                    <option value="Cox's Bazar "> Cox's Bazar </option>
                    <option value="Khulna"> Khulna </option>
                    <option value="Dinajpur"> Dinajpur </option>
                </select>
                <input className='form-input' {...register("phone", { required: true })} placeholder=' +880' />
                {errors.phone && <span className='error'>Phone is required</span>}

                <input className='form-input' {...register("Address", { required: true })} placeholder='Address here' />
                {errors.Address && <span className='error'>Address is required</span>}

                <input className='form-input' {...register("OptionalInfo")}  placeholder='Additional information... (optional)' />


                <p>{result}</p>
                <input className='submit-button' type="submit" />
            </form>

        </>
    );
};

export default Shipment;