import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import DasboardRoot from "./components/DashboardRoot";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <DasboardRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "products",
        element: <Products />
      },
    ]
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider
      router={router}
    // fallbackElement={<BigSpinner />}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
