  // useSongs.js

import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../features/songReducer";
import { useEffect, useRef } from "react";

export const useSongs = () => {
  const { currentSong, isPlaying } = useSelector(
    (store) => store.music
  );

  const dispatch = useDispatch();

  const audioRef = useRef(new Audio());

  // Change Song
  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  // Play Pause
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlay = (song) => {
    dispatch(addSong(song));
  };

  return {
    audioRef,
    handlePlay,
  };
};