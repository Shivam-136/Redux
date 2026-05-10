import React from "react";
import {
  Search,
  Plus,
  ArrowRight,
  List,
} from "lucide-react";

const Library = () => {
  const playlists = [
    {
      title: "Playlist",
      owner: "Shivam_KCc",
      img: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
    },
    {
      title: "My playlist #2",
      owner: "Shivam_KCc",
      img: "https://i.scdn.co/image/ab67616d00001e02d5f4378b30c7d3e4f4c7c3f",
    },
    {
      title: "Liked Songs",
      owner: "86 songs",
      img: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    },
  ];

  return (
    <div className="w-full h-full bg-[#121212] text-white rounded-xl flex flex-col">
      
      {/* TOP */}
      <div className="p-4 border-b border-[#232323]">
        
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-2xl">
            Your Library
          </h1>

          <div className="flex items-center gap-3">
            
            <button className="p-2 hover:bg-[#1f1f1f] rounded-full transition">
              <Plus size={20} />
            </button>

            <button className="p-2 hover:bg-[#1f1f1f] rounded-full transition">
              <ArrowRight size={18} />
            </button>

          </div>
        </div>

        <div className="flex gap-3">
          
          <button className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm font-medium">
            Playlists
          </button>

          <button className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm font-medium">
            Artists
          </button>

        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center justify-between px-4 py-3 text-gray-400">
        
        <button className="hover:text-white transition">
          <Search size={20} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
          <span className="text-sm">Recents</span>
          <List size={18} />
        </div>

      </div>

      {/* PLAYLISTS */}
      <div className="flex-1 overflow-y-auto px-2">

        {playlists.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#1f1f1f] cursor-pointer transition"
          >
            
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 rounded-md object-cover"
            />

            <div>
              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm">
                Playlist • {item.owner}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Library;