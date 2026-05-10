import React from "react";
import {
  Search,
  Home,
  Bell,
  Download,
  Menu,
  Library,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-black px-4 flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        
        {/* MOBILE MENU */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>

        {/* SPOTIFY LOGO */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-black font-bold text-lg">
            S
          </span>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-3 flex-1 justify-center px-3">
        
        {/* HOME */}
        <button className="hidden sm:flex w-12 h-12 bg-[#1f1f1f] hover:bg-[#2a2a2a] rounded-full items-center justify-center transition">
          <Home
            size={22}
            className="text-white"
            fill="white"
          />
        </button>

        {/* SEARCH */}
        <div
          className="
            flex
            items-center
            bg-[#1f1f1f]
            hover:bg-[#2a2a2a]
            focus-within:ring-2
            focus-within:ring-white
            transition
            rounded-full
            h-12
            w-full
            max-w-[520px]
            px-4
          "
        >
          <Search
            size={22}
            className="text-gray-400 mr-3"
          />

          <input
            type="text"
            placeholder="What do you want to play?"
            className="
              bg-transparent
              outline-none
              border-none
              w-full
              text-white
              placeholder:text-gray-400
              text-sm
            "
          />

          {/* RIGHT ICON */}
          <div className="h-6 w-[1px] bg-gray-600 mx-3 hidden sm:block"></div>

          <Library
            size={22}
            className="hidden sm:block text-gray-400 hover:text-white cursor-pointer"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* PREMIUM */}
        <button
          className="
            hidden
            lg:block
            bg-white
            text-black
            font-bold
            text-sm
            px-5
            py-3
            rounded-full
            hover:scale-105
            transition
          "
        >
          Explore Premium
        </button>

        {/* INSTALL */}
        <button className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition">
          <Download size={18} />

          <span className="text-sm font-semibold">
            Install App
          </span>
        </button>

        {/* BELL */}
        <button className="text-gray-300 hover:text-white">
          <Bell size={20} />
        </button>

        {/* PROFILE */}
        <div className="w-10 h-10 bg-[#1f1f1f] rounded-full p-[3px] cursor-pointer">
          <div className="w-full h-full bg-[#535353] rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;