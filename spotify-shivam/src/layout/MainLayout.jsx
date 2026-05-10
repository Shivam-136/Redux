import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-[1fr_3fr_1fr] gap-2 p-2 overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="bg-[#121212] rounded-xl overflow-hidden">
          <div className="p-4">
            <h1 className="text-lg font-bold">
              Your Library
            </h1>
          </div>
        </div>

        {/* Center Content */}
        <div className="bg-[#121212] rounded-xl overflow-y-auto scrollbar-hide">
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-[#121212] rounded-xl overflow-hidden">
          <div className="p-4">
            <h1 className="text-lg font-bold">
              Now Playing
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      <Player />
    </div>
  );
};

export default MainLayout;