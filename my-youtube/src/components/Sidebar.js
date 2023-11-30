import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null; //Early return pattern

  return (
    <div className="p-8 font-semibold shadow-lg border-2">
      <div className="">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="py-4">
        <h1>You</h1>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch later</li>
          <li>Liked Videos</li>
        </ul>
      </div>

      <div className="py-2">
        <h1>Interest</h1>
        <ul>
          <li>Subscriptions</li>
        </ul>
      </div>

      <div className="py-2">
        <h1>Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
