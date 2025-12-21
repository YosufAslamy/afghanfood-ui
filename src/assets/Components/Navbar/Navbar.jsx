import logo from "../../images/logos/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-cream-100 shadow-2xl fixed z-50 top-0 left-0 right-0">
      <div className="flex justify-between items-center max-w-7x mx-auto px-20 py-1">
        {/* logo */}
        <div className="">
          <img
            src={logo}
            alt="Afghan Food Logo"
            className="h-22 w-auto"
          />
          </div>

          {/* pages */}

          <ul className="flex gap-10 text-md font-semibold text-gray-900">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Menu</li>
            <li className="hover:text-primary cursor-pointer">Contact us</li>
          </ul>

          {/* Button */}
          <button className="flex items-center gap-2 px-7 py-2 rounded-full border-4  border-primary text-primary font-semibold hover:bg-red-100 hover:text-primary-darker transition">
          GET A QUOTE
          </button>
      </div>
    </nav>
  )
} 