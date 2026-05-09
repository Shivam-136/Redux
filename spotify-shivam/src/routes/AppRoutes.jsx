import React from "react";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layout/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Parent layout ke andar child page dikhane ke liye <Outlet /> use karte hain. */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      
        <Route path="/home" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;