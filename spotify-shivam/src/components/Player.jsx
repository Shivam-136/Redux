import React from "react";
import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
} from "lucide-react";

const Player = () => {
  return (
    <div className="h-24 bg-black border-t border-gray-800 px-6 flex items-center justify-between text-white">
      
      {/* Left - Song Info */}
      <div className="flex items-center gap-4 w-[25%]">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400"
          alt="song"
          className="w-14 h-14 rounded-md object-cover"
        />

        <div>
          <h2 className="text-sm font-semibold">Blinding Lights</h2>
          <p className="text-xs text-gray-400">The Weeknd</p>
        </div>
      </div>

      {/* Center - Controls */}
      <div className="flex flex-col items-center gap-2 w-[50%]">
        
        <div className="flex items-center gap-5">
          <Shuffle
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />

          <SkipBack
            size={22}
            className="hover:scale-110 transition cursor-pointer"
          />

          <button className="bg-white text-black p-3 rounded-full hover:scale-105 transition">
            <Play size={20} fill="black" />
          </button>

          <SkipForward
            size={22}
            className="hover:scale-110 transition cursor-pointer"
          />

          <Repeat
            size={18}
            className="text-gray-400 hover:text-white cursor-pointer"
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-gray-400">1:12</span>

          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-[35%] h-full bg-white rounded-full"></div>
          </div>

          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Right - Volume */}
      <div className="flex items-center gap-3 w-[25%] justify-end">
        <Volume2 size={20} />

        <div className="w-28 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="w-[70%] h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;