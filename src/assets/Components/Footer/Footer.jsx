export default function Footer() {
  return (
    <footer className="bg-primary text-cream-100 py-8">
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold text-heading mb-3">About Us</h2>
          <p className="text-sm text-cream-100 leading-relaxed">
            Afghan Food brings the rich culinary heritage of Afghanistan to Denver,
            specializing in authentic Afghan cuisine.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>

          <div className="flex items-center space-x-3 mb-2">
            <span className="text-lg">✉️</span>
            <p className="text-cream-100 text-sm">info@afghanfood.net</p>
          </div>

          <div className="flex items-center space-x-3 mb-2">
            <span className="text-lg">📞</span>
            <p className="text-cream-100 text-sm">+1 (720) 938 4414</p>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <span className="hover:text-gray-200 cursor-pointer">Facebook</span>
            <span className="hover:text-gray-200 cursor-pointer">Instagram</span>
            <span className="hover:text-gray-200 cursor-pointer">X</span>
          </div>
        </div>

      </div>

      {/* White horizontal separator */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <hr className="border-red-300" />
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-cream-100 mt-6">
        © 2025 Afghan Food. All rights reserved.
      </p>
    </footer>
  );
}
