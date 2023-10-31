// CSS import
import './ProductList.css'

// use library
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import api
import {getAllProducts, getAllProductsByCategory } from '../../apis/fakeStoreApis';

// Components  import
import ProductBox from "../../Components/ProductBox/ProductBox";
import FilterProducts from "../../Components/FilterProducts/FilterProducts";


function ProductList() {

  const [productList, setProductList] = useState(null)
  const [query] = useSearchParams();

  async function downloadProducts(category) {
    const downloadUrl = category ? getAllProductsByCategory(category) : getAllProducts();
    const response = await axios.get(downloadUrl)
    setProductList(response.data)
    // console.log(response.data)

  }

  useEffect(() => {
    downloadProducts(query.get("category"));
  }, [query.get("category")])


  return (
    <div className="container">
      <div className="row">
        <h2 className="product-list-title text-center">All Products</h2>

        <div className="product-list-wrapper d-flex flex-row">   
          <FilterProducts/>

          {/* list of products */}
          <div className="product-list-box" id="productList">

            {/* <ProductBox
              productImage={ProductImage}
              name={"dummy"}
              price={1000}
            /> */}

            {productList && productList.map((product) => <ProductBox
              productId={product.id}
              key={product.id}
              name={product.title}
              price={product.price}
              productImage={product.image}
            />)}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductList;
