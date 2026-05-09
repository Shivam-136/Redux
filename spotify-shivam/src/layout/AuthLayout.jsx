import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      {/* Parent layout ke andar child page dikhane ke liye <Outlet /> use karte hain. */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;