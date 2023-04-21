import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./pages/User";
import UserPost from "./pages/UserPost";
import Form from "./pages/Form";
import Main from "./pages/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route exact path="/user-post" element={<UserPost />} />
        <Route exact path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </>
);
