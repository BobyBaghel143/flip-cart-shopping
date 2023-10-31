// CSS import
import "./Cart.css";

// use Library
import { useContext, useEffect, useState } from "react";

// Components import
import OrderDetails from '../../Components/OrderDetails/OrderDetails'
import PriceDetails from "../../Components/PriceDetails/PriceDetails";
import CartContext from "../../context/CartContext";
import axios from "axios";
import { getProduct, updateProductInCart } from "../../apis/fakeStoreApis";
import userContext from "../../context/UserContext";

function Cart() {
  const {cart, setCart} = useContext(CartContext);
  const {user} = useContext(userContext);
  const [products, setProducts] = useState([]);

  async function downloadCartProducts(cart) {
      if(!cart || !cart.products) return;

      // object productid->quantity
      const productQuantityMapping = {};      // { 1: 3, 2: 1}
      cart.products.forEach(product => {
          productQuantityMapping[product.productId] = product.quantity;
      })
      const productsPromise = cart.products.map(product => axios.get(getProduct(product.productId)));
      const productPromiseResponse = await axios.all(productsPromise);   
      const downloadedProducts = productPromiseResponse.map(product => ({...product.data, quantity: productQuantityMapping[product.data.id]}));
      setProducts(downloadedProducts);
  }

  async function onProductUpdate(productId, quantity) {
      if(!user) return;
      const response = await axios.put(updateProductInCart(), {userId: user.id, productId, quantity});
      setCart({...response.data});
  }

  useEffect(() => {
      downloadCartProducts(cart);
  }, [cart])

  return (
    <div className="container">
      <div className="row">
        <h2 className="cart-title text-center">Your cart</h2>
        <div className="cart-wrapper d-flex flex-row">
        <div className="order-details d-flex flex-column" id="orderDetails">
          <div className="order-details-title fw-bold">Order Details</div>
            {products.length > 0 && products.map(product =>
              <OrderDetails
                key={product.id} 
                title={product.title}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                onRemove={() => onProductUpdate(product.id, 0)}
              />)}
                               
          </div>
          <PriceDetails price={1000} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
