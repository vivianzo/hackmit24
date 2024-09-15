import React from "react";
import Sidebar from "./Sidebar";
import Post from "./components/post";
import AboutUsPage from "./AboutUsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Response from "./Response";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex bg-purple-100 h-screen">
                <Sidebar />
                <div className="flex-grow ml-64 flex justify-center">
                  <Post />
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <div className="flex">
                <Sidebar />
                <div className="ml-64">
                  <AboutUsPage />
                </div>
              </div>
            }
          />
          <Route
            path="/response-page"
            element={
                <Response />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
