import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App.jsx";

// CSS import
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // from reactstrap (Google)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider defaultSetCookies={{ path: '/' }}>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);
