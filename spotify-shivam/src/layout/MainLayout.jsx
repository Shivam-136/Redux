import React from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Player from "../components/Player";
import Library from "../components/Library";

const MainLayout = () => {
  const { currentSong } = useSelector((store) => store.music);

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="flex-1 flex gap-2 p-2 overflow-hidden">
        
        {/* LEFT SIDEBAR */}
        <div className="w-[25%] min-w-[280px] max-w-[420px]">
          <Library />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 bg-[#121212] rounded-xl overflow-y-auto scrollbar-hide">
          <Outlet />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[22%] min-w-[280px] bg-[#121212] rounded-xl hidden xl:block">
          
          <div className="p-4 border-b border-[#232323]">
            <h1 className="font-bold text-lg">
              Now Playing
            </h1>
          </div>

          {currentSong ? (
            <div className="p-4">
              
              <img
                src={currentSong.thumbnail}
                alt={currentSong.title}
                className="w-full rounded-xl mb-4 shadow-lg"
              />

              <h2 className="text-2xl font-bold">
                {currentSong.title}
              </h2>

              <p className="text-gray-400 mt-1">
                {currentSong.artist}
              </p>

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a song
            </div>
          )}

        </div>
      </div>

      {/* PLAYER */}
      <Player />
    </div>
  );
};

export default MainLayout;