import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Homepage from "./Componets/homepage";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/x"
          exact
          component={() => {
            return (
              <div className="d-flex flex-column wrapper">
                <Homepage />
              </div>
            );
          }}
        />
      </Routes>
    </BrowserRouter>
  );
}
