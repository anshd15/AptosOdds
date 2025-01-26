import React, { useState } from "react";
import { FaHeart, FaChevronUp, FaShare, FaArrowDown } from "react-icons/fa";

const Reel = ({ videoSrc, title, description, likes, views, shares }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [viralStatus, setViralStatus] = useState(null);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Set Viral Status
  const handleViralClick = (status) => {
    setViralStatus(status);
  };

  return (
    <div className="relative flex flex-col h-screen w-[30vw] max-sm:w-[100vw] bg-gray-900">
      {/* Video Section */}
      <div className="flex flex-col w-full h-[100%]">
        <video
          className="object-cover w-full h-full"
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Description Drawer Section */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          drawerOpen ? "h-[50%]" : "h-[8%]"
        } bg-[#000000b5] text-white p-4 absolute bottom-0 left-0 w-full rounded-t-2xl`}
      >
        {/* Title */}
        <h1
          className={`text-xl font-semibold text-white mb-2 ${
            drawerOpen ? "absolute top-2" : "relative w-[70%] truncate"
          }`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`text-base text-gray-300 transition-all duration-300 ease-in-out ${
            drawerOpen ? "h-[80%] mt-7 overflow-auto" : "h-0 overflow-hidden"
          }`}
        >
          {description}
        </p>

        {/* Arrow to toggle drawer */}
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleDrawer}
            className="bg-transparent text-white p-2 rounded-full"
          >
            <FaChevronUp
              size={20}
              className={`transform ${drawerOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Viral/Not Viral Buttons */}
      <div className="absolute top-0  left-1/2 transform -translate-x-1/2 flex gap-4 mt-3 w-full px-4">
        <button
          onClick={() => handleViralClick("viral")}
          className="bg-[#000000b0] text-white p-2 rounded-full flex-1"
        >
          Viral
        </button>
        <button
          onClick={() => handleViralClick("notViral")}
          className="bg-[#000000b0] text-white p-2 rounded-full flex-1"
        >
          Not Viral
        </button>
      </div>

      {/* Icons (Like, Comment, Share) */}
      <div className="absolute bottom-16 right-4 flex flex-col items-center gap-4">
        {/* Like Button with Likes Count */}
        <div className="flex flex-col items-center">
          <button className="p-2 rounded-full text-[#e82687] bg-gray-800 hover:bg-gray-700">
            <FaHeart size={24} />
          </button>
          <span className="text-sm text-white mt-2">{likes} Likes</span>
        </div>

        {/* Share Button with Shares Count */}
        <div className="flex flex-col items-center">
          <button className="p-2 rounded-full text-white bg-gray-800 hover:bg-gray-700">
            <FaShare size={24} />
          </button>
          <span className="text-sm text-white mt-2">{shares} Shares</span>
        </div>
      </div>
    </div>
  );
};

export default Reel;
