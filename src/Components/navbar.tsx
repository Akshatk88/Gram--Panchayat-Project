// src/Components/Navbar.tsx
// src/Components/Navbar.tsx
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Titles */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
            GP
          </div>
          <div className="leading-tight">
            <div className="text-xl font-extrabold text-green-800">Gram Panchayat</div>
            <div className="text-lg font-semibold text-green-800 -mt-0.5">Longwala</div>
            <div className="text-sm text-green-700 font-medium">ग्राम पंचायत लॉंगवाला</div>
          </div>
        </div>

        {/* Right: Menu */}
        <div className="flex items-center gap-10 text-green-800 font-medium">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#gallery" className="hover:text-green-600">Gallery</a>
          <a href="#news" className="hover:text-green-600">News</a>
          <a href="#members" className="hover:text-green-600">Members</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
