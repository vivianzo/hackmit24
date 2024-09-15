import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-3xl font-bold px-6 py-10">Welcome!</h2>
      <ul>
        <li className="p-4">Profile</li>
        <li className="p-4">Help Center</li>
        <li className="p-4">Learn More!</li>
        <li className="p-4">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
