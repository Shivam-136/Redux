import { Play } from "lucide-react";

const SongCard = ({ song, handlePlay }) => {
  return (
    <div
      onClick={() => handlePlay(song)}
      className="group relative w-56 bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <img  
          src={song.thumbnail}
          alt={song.title}
          className="w-full h-full object-cover"
        />

        {/* Play Button */}
        <button
          className="absolute bottom-3 right-3 bg-[#1db954] p-3 rounded-full 
          opacity-0 group-hover:opacity-100 
          translate-y-3 group-hover:translate-y-0
          transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Play size={20} fill="black" color="black" />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-white font-semibold text-base truncate">
        {song.title}
      </h2>

      {/* Artist */}
      <p className="text-gray-400 text-sm mt-1 truncate">
        {song.artist}
      </p>
    </div>
  );
};

export default SongCard;