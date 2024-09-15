import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUsPage from "./AboutUsPage";
import Sidebar from "./Sidebar";
import ChatPage from "./components/chatComponent";
import Post from "./components/post";
import SearchBar from "./components/searchbar";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex h-screen bg-purple-100">
                <Sidebar />
                <div className="flex-grow ml-64 flex flex-col items-center pt-10 p-6 relative">
                  <div className="w-full max-w-4xl">
                    <SearchBar />
                    <Post
                      title="Wheelchair for sale"
                      text="I am selling a wheelchair at discount! Please contact me for more details!"
                    />
                  </div>
                </div>
              </div>
            }
          />
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
          <Route path="/response-page" element={
            <div className="flex">
            <Sidebar />
            <div className="ml-64 w-full">
               <ChatPage /> 
            </div>
          </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
