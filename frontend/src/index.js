import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Provider} from 'react-redux'
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import HomeScreens from "./screens/HomeScreens";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import store from "./store";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route
        path="/"
        index={true}
        element={<HomeScreens></HomeScreens>}
      ></Route>
      <Route
        path="/product/:id"
        element={<ProductScreen></ProductScreen>}
      ></Route>
       <Route
        path="/cart"
        element={<CartScreen></CartScreen>}
      ></Route>
        <Route
        path="/login"
        element={<LoginScreen></LoginScreen>}
      ></Route>
       <Route
        path="/register"
        element={<RegisterScreen></RegisterScreen>}
      ></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
