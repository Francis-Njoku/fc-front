import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Register from "../pages/auth/signup";
import PrivateRoute from "./privateRoute";

const AllPages = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="/" element={<Landing />}></Route>
     
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
       </Routes>
    </BrowserRouter>
  </>
);

export default AllPages;
