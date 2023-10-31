// CSS import
import "./PriceDetails.css";


function PriceDetails({price}) {
  return (
    <>
      <div className="price-details d-flex flex-column" id="priceDetails">
        <div className="price-details-box">

          {/* <!-- Price Details --> */}
          <div className="price-details-title fw-bold">Price Details</div>
          <div className="price-details-data">
            <div className="price-details-item d-flex flex-row justify-content-between">
              <div>Price</div>
              <div id="total-price">&#8377; {price}</div>
            </div>
            <div className="price-details-item d-flex flex-row justify-content-between">
              <div>Discount</div>
              <div>10</div>
            </div>
            <div className="price-details-item d-flex flex-row justify-content-between">
              <div>Delivery Charges</div>
              <div>FREE</div>
            </div>
            <div className="price-details-item d-flex flex-row justify-content-between">
              <div>Total</div>
              <div id="net-price">&#8377; 9990</div>
            </div>
          </div>
        </div>
        <div className="price-details-btn-group">
          <a href="../4_ProductList/1_index.html" className="continue-shopping-btn btn btn-info text-decoration-none">
            Continue Shopping
          </a>
          <a href="checkout.html" className="Checkout-btn btn btn-primary text-decoration-none">
            Checkout
          </a>
        </div>
      </div>
    </>
  );
}

export default PriceDetails;
