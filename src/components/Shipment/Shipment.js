import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));
    const [logedInUser, setLogedInUser] = useContext(UserContext)

    return (
<>
        <h4 className='shipping'> Provide Shipping and Billing Information... </h4>

        <form className='form' onSubmit={handleSubmit(onSubmit)}>

            <input className='form-input' {...register("firstName", { required: true })} placeholder='First Name' defaultValue={logedInUser.name} />
            {errors.firstName && <span className='error'>Name is required</span>}

            <input className='form-input' {...register("lastName", { required: true })} placeholder='Last Name' />
            {errors.lastName && <span className='error'>Name is required</span>}


            <input className='form-input' {...register("email", { required: true })} placeholder='Your Email'  defaultValue={logedInUser.email}/>
            {errors.email && <span className='error'>Email is required</span>}

            <select {...register("category")}>
                
                <option value="A"> Dhaka </option>
                <option value="B"> Chittagong </option>
                <option value="C"> Shylet </option>
                <option value="D"> Rangpur </option>
                <option value="E"> Cox's Bazar </option>
                <option value="F"> Khulna </option>
                <option value="G"> Dinajpur </option>
            </select>
            <input className='form-input' {...register("phone", { required: true })} placeholder=' +880'/>
            {errors.phone && <span className='error'>Phone is required</span>}

            <input className='form-input' {...register("Address", { required: true })} placeholder='Address here'  />
            {errors.Address && <span className='error'>Address is required</span>}

            <input className='form-input'  placeholder='Additional information... (optional)' />


            <p>{result}</p>
            <input className='submit-button' type="submit" />
        </form>

        </>
    );
};

export default Shipment;