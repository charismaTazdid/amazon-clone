import React from 'react';
import img from '../../images/amazon-2.jpg'
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <img src={img} alt="" />
        </div>
    );
};

export default HomeBanner;