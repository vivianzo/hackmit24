import React from 'react';
import Sidebar from "./Sidebar"
import Post from './components/post';

function App() {
    return (
      <div className="flex">
        <Sidebar />
        <Post />
      </div>
    );
  }
  
  export default App;