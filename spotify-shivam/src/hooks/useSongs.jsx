import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../features/songReducer";
import { useEffect, useRef } from "react";

export let useSongs = () => {
  let { currentSong, isPlaying } = useSelector((store) => store.music);

  let dispatch = useDispatch();
  let audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  let handlePlay = (song) => {
    dispatch(addSong(song));
  };

  return {
    dispatch,
    audioRef,
    handlePlay,
  };
};