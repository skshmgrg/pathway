import React from "react";
import { SiChatbot } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-black text-white flex items-center justify-between px-4">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
      <SiChatbot />
        <h1 className="text-xl font-semibold">ChatApp</h1>
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="Settings"
          className="p-2 hover:bg-blue-700 rounded-full"
        >
          <span role="img" aria-label="Settings" className="text-2xl">
            ⚙️
          </span>
        </button>
        <button
          aria-label="Profile"
          className="p-2 hover:bg-blue-700 rounded-full"
        >
          <span role="img" aria-label="Profile" className="text-2xl">
            👤
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
