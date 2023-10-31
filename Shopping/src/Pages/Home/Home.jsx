// CSS import
import "./Home.css";

// use library
import { useContext, useEffect } from "react";

// Components import
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import UserContext from '../../context/UserContext'

// import hook
import useCategory from "../../hooks/useCategory";
import useCart from '../../hooks/useCart'

function Home() {
  const [categories] = useCategory();
  const { user } = useContext(UserContext);
  const [cart] = useCart(user ? user.id : undefined);

  useEffect(() => {

  }, [user]);

  return (
    <div className="container">
      {/* <div className="row"> */}
      <h2 className="home-title text-center ">Welcome to Shop Cart</h2>
      <div
        className="category-list d-flex flex-row justify-content-between align-items-center"
        id="categoryList"
      >
        <CategoryItem itemName="All Products" />

        {categories && categories.map((category) => (
          <CategoryItem
            itemName={category}
            key={category}
            filter={category}
          />
        ))}
      </div>
      <div className="category-title text-center">
        Select a category to start Shopping
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
