import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from '../components/user/layout/UserLayout';

// Import các pages
import HomePage from "../pages/user/HomePage/HomePage";
import IntroducePage from "../pages/user/IntroducePage/IntroducePage";
import CategoryPage from "../pages/user/CategoryPage/CategoryPage";
import SubCategoryPage from "../pages/user/CategoryPage/SubCategoryPage";
import BooksBySubCategory from "../pages/user/CategoryPage/BooksBySubCategory";
import ManagePage from "../pages/user/ManagePage/ManagePage";
import LoginEmail from "../pages/user/Login/LoginEmail";
import Signup from "../pages/user/Login/Signup";
import ForgotPassword from "../pages/user/Login/ForgotPassword";

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route 
          path="/category/:bigCategoryName" 
          element={<SubCategoryPage />} 
        />
        <Route
          path="/category/:bigCategoryName/:subCategoryName"
          element={<BooksBySubCategory />}
        />
        <Route path="/shopcart" element={<ManagePage />} />
        <Route path="/loginemail" element={<LoginEmail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </UserLayout>
  );
};

export default UserRoutes;