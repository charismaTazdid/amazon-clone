import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import AmazonPrime from './components/AmazonPrime/AmazonPrime';

export const UserContext = createContext()

function App() {
  const [logedInUser, setLogedInUser] = useState({});
  const [cart, setCart] = useState([])

  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
      
        <Header> </Header>
        <Routes>
          <Route path="/shop" element={ <Shop />} />
          <Route path="/order-review" element={<Review />} />

         
            <Route path="/inventory" element={<Inventory />} />
        

          <Route path="/login" element={<Login />} />

          {/* <Route path="/shipment" element={<Shipment />} /> we made this protect later */}
          <Route element={<PrivetRoute />}>
            <Route path="/shipment" element={<Shipment />} />

          </Route>



          <Route exact path="/" element={<Shop />} />
          <Route path="/prime" element={<AmazonPrime/>} />
          <Route path="/product/:productKey" element={<ProductDetails />} />
          {/* here :productkey is a dynamic parameter. passed from our Product.js file. and we use /product for getting sure this is actually our product key. */}

          {/* we can access the productkey in our ProductDetails componenet by using Useparams() */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>





    </UserContext.Provider>
  );
}

export default App;
