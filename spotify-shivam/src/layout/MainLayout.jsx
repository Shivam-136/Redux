import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col gap-4">
      <Navbar />
      <div className="h-[80%] p-2 grid gap-4 grid-cols-[1fr_3fr_1fr]">
        <div className="border shadow-md rounded"></div>
        <div className="border overflow-auto shadow-md rounded p-4">
          <Outlet />
        </div>
        <div className="border shadow-md rounded"></div>
      </div>
      <Player />
    </div>
  );
};

export default MainLayout;