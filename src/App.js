import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const location = "us";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color="#f51616"
          height={3}
          waitingTime={700}
          progress={100}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                PageSize={6}
                country={location}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                PageSize={6}
                country={location}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                PageSize={6}
                country={location}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                PageSize={6}
                country={location}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/Home"
            element={
              <News
                setProgress={setProgress}
                key="general"
                PageSize={6}
                country={location}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                PageSize={6}
                country={location}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                PageSize={6}
                country={location}
                category="sports"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
