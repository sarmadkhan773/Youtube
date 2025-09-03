import { FaHome, FaHistory, FaRegClock } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="bg-white h-screen p-4 hidden md:block">
      <ul className="space-y-4">
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <FaHome className="text-2xl" />
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <SiYoutubeshorts className="text-2xl " />
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <MdSubscriptions className="text-2xl" />
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <FaRegClock className="text-2xl" />
        </li>
      </ul>
    </aside>
  );
}
