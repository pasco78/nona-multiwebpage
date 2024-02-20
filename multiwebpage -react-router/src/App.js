import "./App.css";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Routes, Route, Navigate } from "react-router-dom";
import PrdouctPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage.js";
import UserPage from "./page/UserPage.js";
import { useState } from "react";

function App() {
  const [authenticate, setauthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<PrdouctPage />} />
        <Route path="/products/:id/" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
