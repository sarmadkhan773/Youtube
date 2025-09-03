import { useState, useRef, useEffect } from "react";
import { FaYoutube, FaUserCircle, FaMicrophone, FaVideo } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaBroadcastTower, FaEdit } from "react-icons/fa";

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="flex font-sans items-center justify-between px-4 py-2.5 bg-white text-black sticky top-0 z-50">
        {/* Left - Logo */}
        <div className="flex items-center gap-4 ">
          {/* Hamburger Button */}
          <button
            className="h-10 w-10 rounded-full hover:bg-gray-200 flex items-center justify-center text-3xl text-gray-700 hover:text-black transition"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiOutlineBars3 className="stroke-[1.2] text-gray-700" />
          </button>

          <div className="flex items-center cursor-pointer">
            <FaYoutube className="text-red-600 text-3xl" />
            <h1 className="h-10 pt-1 text-xl font-sans font-bold hidden sm:block">
              YouTube
            </h1>
          </div>
        </div>

        {/* Middle - Search */}
        <div className="hidden md:flex flex-1 items-center max-w-2xl mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-400 bg-white font-light rounded-l-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-gray-200 border border-gray-400 px-4 py-2 rounded-r-full hover:bg-gray-300 cursor-pointer">
            <FiSearch className="text-black font-light text-2xl" />
          </button>
          <div className="h-10 w-12 bg-gray-300 hover:bg-gray-400 ml-3 rounded-full flex items-center justify-center cursor-pointer">
            <FaMicrophone className="text-black text-lg" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 relative">
          {/* Search icon for mobile */}
          <button className="md:hidden">
            <FiSearch className="text-xl text-gray-500 hover:text-gray-700 transition" />
          </button>

          {isSignedIn ? (
            <>
              {/* Create Button with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="hidden md:flex h-10 w-26 pl-3 bg-gray-300 items-center rounded-full hover:bg-gray-400 transition duration-200 cursor-pointer"
                >
                  <button className="text-zinc-800 font-medium flex items-center gap-2 rounded-full w-full h-full">
                    <span className="text-4xl font-extralight relative bottom-1">
                      +
                    </span>
                    Create
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                    <ul className="py-2">
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaVideo className="text-gray-600 " /> Upload Video
                      </li>
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaBroadcastTower className="text-gray-600 " /> Go Live
                      </li>
                      <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaEdit className="text-gray-600" /> Create Post
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Notification Icon with badge */}
              <div className="relative h-10 w-10 rounded-full hover:bg-gray-400 flex justify-center items-center cursor-pointer">
                <MdNotificationsNone className="text-3xl font-thin" />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                  5
                </span>
              </div>

              {/* User Icon */}
              <FaUserCircle className="text-3xl text-gray-600 cursor-pointer hover:text-gray-800 transition" />
            </>
          ) : (
            <div
              onClick={() => setIsSignedIn(true)}
              className="hidden md:flex h-10 px-4 bg-white items-center rounded-full border border-gray-200 hover:bg-blue-200 transition duration-200 text-blue-500"
            >
              <button className="font-medium flex items-center gap-2 rounded-full w-full h-full cursor-pointer">
                <FaUserCircle className="text-xl font-thin" /> Sign In
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 font-bold text-lg border-b flex justify-between items-center">
          Menu
        </div>
        <ul className="p-4 space-y-3">
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Home</li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Trending
          </li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Subscriptions
          </li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Library
          </li>
        </ul>
      </div>

    </>
  );
}
