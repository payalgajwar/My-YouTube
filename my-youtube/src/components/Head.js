import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="border-b-grey border-b-2 shadow-xl">
      <div className="flex justify-between mx-8 my-2">
        <div className="flex">
          <img
            onClick={() => toggleMenuHandler()}
            className="w-8 h-10 my-4 cursor-pointer"
            src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-17.jpg"
            alt="humburger"
          />
          <a href="/">
            <img
              className="w-16"
              src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png"
              alt="youtube"
            />
          </a>
        </div>
        <div className="flex justify-center my-2">
          <input
            type="search"
            placeholder="Search"
            className="border-2 rounded-l-full border-gray-200 py-3 px-36"
          />
          <button className="border-2 rounded-r-full border-gray-200 px-4 bg-gray-100">
            search
          </button>
        </div>
        <div>
          <img
            className="h-8 mt-4"
            src="data:image/jpeg;base64,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"
            alt="User Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
