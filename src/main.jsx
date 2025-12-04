import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./layout/RootLayout";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Menu from "./website/pages/Menu";
import Contact from "./website/pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      {path: "contact", element: <Contact />},
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
