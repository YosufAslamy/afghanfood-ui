import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Menu from "./website/pages/Menu";
import Contact from "./website/pages/Contact";
import SidebarPanel from "./admin_panel/pages/SidebarPanel";
import MenuFoods from "./admin_panel/pages/MenuFood";
import MenuCategory from "./admin_panel/pages/MenuCategory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <SidebarPanel />,
  },
  {
    path: "/admin/menu",
    element: <MenuFoods />,
  },
  {
    path: "/admin/menu/category",
    element: <MenuCategory />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
