// CSS import
import "./App.css";

// import library
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

// Components import
import Header from "./Components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./Components/Footer/Footer";

// Context import
import UserContext from "./context/UserContext";
import CartContext from "./context/CartContext";
import { fetchUserCart } from "./helpers/fetchUserCartHelper";

function App() {
  // const [cart, setCart] = useState({ products: [] });
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(['jwt-token']);

  async function accessToken() {
    const res = await axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
    setToken('jwt-token', res.data.token, {httpOnly: true});
    const tokenDetails = jwt_decode(res.data.token);
    setUser({username: tokenDetails.user, id: tokenDetails.id});
  }

  async function load() {
    if(!user) {
      await accessToken();
    }

    if(user) {
      await fetchUserCart(user.id, setCart);
    }
  }

  useEffect(() => {
    load();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="app-wrapper">
          {/* Common header for all pages */}
          <Header color="light" light={true} expand="md" container="md" />
          <MainRoutes />
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
