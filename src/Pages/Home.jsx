import { useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid";
import Selector from "../components/Selector";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Homepage Content */}
      <main
        className={`flex-1 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-64" : "translate-x-0"
        }`}
      >
        <Selector />
        <VideoGrid />
      </main>
    </div>
  );
}
