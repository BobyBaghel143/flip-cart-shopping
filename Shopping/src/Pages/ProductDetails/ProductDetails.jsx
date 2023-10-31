// CSS import
import "./ProductDetails.css";

// use librarys
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { addProductToUserCart, getProduct } from "../../apis/fakeStoreApis";
import userContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(userContext);
  const { setCart } = useContext(CartContext);
  const navigate = useNavigate();

  async function downloadProduct(id) {
    const response = await axios.get(getProduct(id));
    setProduct(response.data);
    console.log(response.data)
  }

  async function addProductToCart() {
    if (!user) return;
    const response = await axios.put(addProductToUserCart(), {
      userId: user.id,
      productId: id,
    });
    setCart({ ...response.data });
    navigate(`/cart/${user.Id}`);
  }

  useEffect(() => {
    downloadProduct(id);
  }, []);

  return (
    product && (
      <div className="container">
        <div className="row">
          <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
            <div className="product-img d-flex">
              <img src={product.image} alt="product image" id="product-img" />
            </div>
            <div className="product-details-box d-flex flex-column">
              <div id="productDetails">
                {/* <!-- ProductDetails --> */}
                <div className="product-name" id="product-name"> {product.title} </div>
                <div className="product-price fw-bold" id="product-price"> {product.price} </div>
                <div className="product-description">
                  <div className="product-description-title fw-bold"> Description </div>
                  <div className="product-description-data" id="product-description-data"> {product.description} </div>
                </div>
              </div>
              <div onClick={addProductToCart} className="product-details-action btn btn-primary text-decoration-none">
                Add to cart
              </div>
              <a href="../5_Cart/1_index.html" id="goToCartBtn"
                className="product-details-action btn btn-warning text-decoration-none" >
                <Link to="/cart/:userId">Go to cart</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default ProductDetails;
