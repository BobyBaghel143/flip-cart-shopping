// CSS import
import "./FilterProducts.css";

// Use library
import { useNavigate } from "react-router-dom";

// hook import
import useCategory from "../../hooks/useCategory";

function FilterProducts() {
  const minPriceOptions = [0, 10, 20, 50, 100, 200];
  const maxPriceOptions = [0, 10, 20, 50, 100, 200, 500];

  const [categories] = useCategory();

  const navigate = useNavigate();

  function handleCategoryNavigator(category) {
    navigate(`/products?category=${category}`);
  }

  return (
    // <!-- sidebar -->
    <div className="product-list-sidebar d-flex flex-column">
      <div className="sidebar-title">Search Products</div>
      <div className="sidebar-search form-group">
        <input type="text" className="form-control" id="searchInput" placeholder="Search by name"/>
      </div>
      <div className="sidebar-title">Categories</div>
      <div id="categoryList">
        {categories && categories.map((category) => (
            <a onClick={() => handleCategoryNavigator(category)} key={category} className="d-flex text-decoration-none">
              {category}
            </a>
        ))}
      </div>

      <div className="sidebar-title">Filter by price</div>
      <div className="price-filter">
        <div className="price-filter-select d-flex flex-row justify-content-between">
          <div className="form-group">
            <select name="minPrice" id="minPrice" className="form-select">
              {minPriceOptions.map((optionValue) => (
                <option key={optionValue} value={optionValue}> {optionValue}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select name="maxPrice" id="maxPrice" className="form-select">
              {maxPriceOptions.map((optionValue) => (
                <option key={optionValue} value={optionValue}>{optionValue}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="price-filter-title d-flex flex-row justify-content-between">
          <div id="price-filter-label-min">Min Price</div>
          <div id="price-filter-label-max">Max Price</div>
        </div>
      </div>
      <button className="clear-filter btn btn-warning" id="search">Search</button>
      <button className="clear-filter btn btn-danger" id="clear"> Clear Filter</button>
    </div>
  );
}

export default FilterProducts;
