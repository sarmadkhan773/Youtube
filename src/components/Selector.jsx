import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Selector({
  items = [
    { id: "all", label: "All" },
    { id: "music", label: "Music" },
    { id: "gaming", label: "Gaming" },
    { id: "news", label: "News" },
    { id: "sports", label: "Sports" },
    { id: "learning", label: "Learning" },
    { id: "fashion", label: "Fashion" },
    { id: "Arjit Singh", label: "Arijit Singh" },
    { id: "Lo-fi", label: "Lo-fi" },
    { id: "News", label: "News" },
    { id: "Atif Aslam", label: "Atif Aslam" },
    { id: "Algorithm", label: "Algorithm" },
  ],
  defaultActiveId = "all",
  onChange = () => {},
}) {
  const [active, setActive] = useState(defaultActiveId);
  const scrollRef = useRef(null);

  useEffect(() => {
    setActive(defaultActiveId);
  }, [defaultActiveId]);

  function handleClick(item) {
    setActive(item.id);
    onChange(item);
  }

  // Scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-white">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden md:flex z-10"
      >
        <FaChevronLeft size={16} />
      </button>

      {/* Scrollable List */}
      <nav
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar px-8 py-3 whitespace-nowrap scroll-smooth"
      >
        <ul className="flex gap-3 mx-auto">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="flex-shrink-0">
                <button
                  onClick={() => handleClick(item)}
                  className={`px-4 py-1 rounded-full text-sm md:text-base font-medium transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden md:flex z-10"
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
}
