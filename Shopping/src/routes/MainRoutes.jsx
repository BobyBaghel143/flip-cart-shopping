import { Route, Routes } from "react-router";

// Components import
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ProductList from "../Pages/ProductList/ProductList";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import Cart from '../Pages/Cart/Cart'


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart/:userId"  element= {<Cart />}  />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default MainRoutes;
