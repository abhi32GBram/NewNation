import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/Science"
            element={
              <News
                key="science"
                PageSize={6}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                key="business"
                PageSize={6}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key="entertainment"
                PageSize={6}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                key="science"
                PageSize={6}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                key="technology"
                PageSize={6}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                key="general"
                PageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News key="health" PageSize={6} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News key="sports" PageSize={6} country="in" category="sports" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
