    import React from "react";
    import { Outlet } from "react-router";
    import Navbar from "../components/Navbar";

    // mainlayout matlab ki jo screen ke andar ki chiz yane ki songs lybary ya sagation wali chz etc 
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
        </div>
    );
    };

    export default MainLayout;     