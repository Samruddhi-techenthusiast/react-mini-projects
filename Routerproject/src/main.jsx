import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Layout from "./components/Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import User from "./components/User/User"
import Github from "./components/Github/Github"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },     // replaces path: "/"
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user/:id", element: <User /> },
    { path: "github", element: <Github /> }]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
