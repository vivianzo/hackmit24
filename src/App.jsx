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
              <div className="flex h-full bg-purple-100">
                <Sidebar />
                <div className="flex-grow ml-64 flex flex-col items-center pt-10 p-6 relative">
                  <div className="w-full max-w-4xl">
                    <div className="ml-[200px] flex items-center">
                        <SearchBar />
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center items-start">
                      <Post
                        title="Crutches for sale"
                        text="I have crutches, and I am looking to sell them at a discounted price! Please contact me for more info!"
                      />
          
                      <Post
                        title="I need help!"
                        text="I need help! I'm not sure where my nearest hospital is, and I'm looking for advice!"
                      />
                      
                      <Post
                        title="Wheelchair for sale"
                        text="I am selling a wheelchair at discount! Please contact me for more details!"
                        imgURL={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88LsIi8VN9SrUe7Xx9nS-xaRRS_P5gofpKw&s"
                        }
                      />
                      <Post
                        title="I need crutches!"
                        text="Hi everyone I am going through a tough time right now and I need these crutches to walk, is there anyway someone can sell an old version for me. Much appreciated"
                        imgURL={
                          "https://www.breg.com/wp-content/uploads/product_images/Crutches_045.png"
                        }
                      />
                    </div>
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
          <Route
            path="/response-page"
            element={
              <div className="flex">
                <Sidebar />
                <div className="ml-64 w-full">
                  <ChatPage />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
