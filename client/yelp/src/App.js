import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import RestaurantDetail from './Routes/RestaurantDetail';
import UpdatePage from './Routes/UpdatePage';
import Home from './Routes/Home'
import { RestaurantsContextProvider } from './Context/RestaurantsContext';

const App = () => {
    return <div>
        <RestaurantsContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants/:id"element={<RestaurantDetail />} />
                <Route path="/restaurants/:id/update" element={<UpdatePage />} />
            </Routes>
        </Router>
        </RestaurantsContextProvider>

    </div>
}


 export default App