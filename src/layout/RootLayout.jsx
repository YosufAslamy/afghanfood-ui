import Footer from "../assets/Components/Footer/Footer.jsx";
import Navbar from "../assets/Components/Navbar/Navbar.jsx";

import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      
      <Navbar/>

      <main className="flex-1 pt-32">
        <Outlet />  {/* Your page content goes here */} 
      </main>

      <Footer/>
    </div>
  );
}
