import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/homepage";
import Login from "./components/login";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
