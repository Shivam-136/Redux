import { Search, Home, Bell, Download, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-black px-3 sm:px-5 md:px-6 py-3 flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-2 sm:gap-4">
        
        {/* MENU ICON */}
        <button className="text-white md:hidden">
          <Menu className="w-5 h-5" />
        </button>

        {/* LOGO */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
          <span className="text-black font-bold">S</span>
        </div>

        {/* HOME BUTTON */}
        <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition">
          <Home className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* SEARCH BAR */}
        <div className="flex items-center bg-[#1f1f1f] px-3 py-2 rounded-full w-[140px] sm:w-[220px] md:w-[320px] lg:w-[400px] focus-within:bg-[#2a2a2a] transition">
          
          <Search className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white w-full text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        
        {/* PREMIUM */}
        <button className="hidden sm:block text-white text-sm md:text-base font-semibold hover:scale-105 transition">
          Explore Premium
        </button>

        {/* INSTALL APP */}
        <button className="flex items-center gap-1 md:gap-2 text-gray-300 hover:text-white transition">
          
          <Download className="w-4 h-4" />

          <span className="hidden md:block text-sm">
            Install App
          </span>
        </button>

        {/* BELL */}
        <Bell className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />

        {/* PROFILE */}
        <div className="w-8 h-8 bg-gray-600 rounded-full cursor-pointer shrink-0"></div>
      </div>
    </div>
  );
};

export default Navbar;