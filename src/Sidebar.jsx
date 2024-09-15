import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
      <h2 className="text-3xl font-bold px-6 py-10">
        <Link to="/"> Health Orbit </Link>
        </h2>
      <ul className="px-4 text-lg">
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
