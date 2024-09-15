import React from "react";
import Sidebar from "./Sidebar";
import Post from "./components/post";
import AboutUsPage from "./AboutUsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex">
                <Sidebar />
                <Post />
              </div>
            }
          ></Route>
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
