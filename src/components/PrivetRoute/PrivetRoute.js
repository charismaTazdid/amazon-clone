import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = (children, ...rest) => {
    const [logedInUser, setLogedInUser] = useContext(UserContext)
   const location = useLocation()
    return (
      
        logedInUser.email  ? <Outlet/> : 
        <Navigate to="/login" replace state={{from: location}}/> 
  
         
     
    );
};

export default PrivetRoute;