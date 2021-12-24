import { Search,  ShoppingBasket } from '@mui/icons-material';
import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import './header.css';

const Header = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext)

    const [cart, setCart] = useContext(UserContext)

    return (

        <div className='navDiv'>
            <nav className='navbar'>
                <Link to="/shop">
                    <img className='header-logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>
                <div className="header-search">
                    <input type="text" className='header-search-input' />
                    <Search className='header-search-icon' />
                </div>
                <div className="header-nav">
                    <Link to="/login" className='header-link'>
                        <div className='header-option'>
                            <span className='heder-option-1'>Hello {logedInUser.name}</span>
                           {
                               logedInUser.name ?  <span className='header-option-2'> Welcome</span> :
                               <span className='header-option-2'> Sign In</span>
                           }
                        </div>
                    </Link>
                    <Link to="/inventory" className='header-link'>
                        <div className='header-option'>
                            <span className='heder-option-1'>Returns</span>
                            <span className='header-option-2'> & Orders </span>
                        </div>
                    </Link>
                    <Link to="/prime" className='header-link'>
                        <div className='header-option'>
                            <span className='heder-option-1'>Your</span>
                            <span className='header-option-2'> Prime </span>
                        </div>
                    </Link>
                <Link to="/order-review" className='header-link' >
                        <div className="header-basket">
                            <ShoppingBasket/>
                            
                            <span className='header-option-2 cart-count' > {cart.length} </span>
                        </div>
                    </Link>
                </div>


            </nav>
        </div>
        // <div className="header">
        //     <img src={logo} alt="" />
        //     <nav>
        //         <Link to="/shop">  Shop </Link>
        //         <Link to="/order-review">Order Review</Link>
        //         <Link to="/inventory">FBA inventory management</Link>
        //         {
        //             logedInUser.email ? <button className='signOut-btn' onClick={() => setLogedInUser({})}>Sign Out</button>  :
        //             <Link to="/login"> Login </Link>
        //         }

        //     </nav>
        // </div>
    );
};



export default Header;