import React from "react";
import "./Sidebar.css";
import { FaHome, FaClock, FaThumbsUp, FaHistory, FaUser } from "react-icons/fa";
import { MdOutlineVideoLibrary, MdOutlineMusicNote, MdOutlineNewspaper } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdFlag, MdHelpOutline, MdFeedback } from "react-icons/md";
import { PiYoutubeLogoFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome className="sidebar-icon" />
        <span>Home</span>
      </div>

      <div className="sidebar-item">
        <PiYoutubeLogoFill className="sidebar-icon" style={{ color: "red" }} />
        <span>Shorts</span>
      </div>

      <div className="sidebar-item">
        <MdOutlineVideoLibrary className="sidebar-icon" />
        <span>Library</span>
      </div><div className="sidebar-item">
        <FaClock className="sidebar-icon" />
        <span>Watch later</span>
      </div>

      <div className="sidebar-item">
        <FaThumbsUp className="sidebar-icon" />
        <span>Liked videos</span>
      </div>

      <div className="sidebar-item">
        <FaUser className="sidebar-icon" />
        <span>Subscriptions</span>
      </div>

      {/* Explore Section */}
      <div className="sidebar-section">
        <h4 className="section-title">Explore</h4>

        <div className="sidebar-item">
          <MdOutlineMusicNote className="sidebar-icon" />
          <span>Music</span>
        </div>

        <div className="sidebar-item">
          <SiYoutubegaming className="sidebar-icon" />
          <span>Gaming</span>
        </div>
        <div className="sidebar-item">
          <MdOutlineNewspaper className="sidebar-icon" />
          <span>News</span>
        </div>

        <div className="sidebar-item">
          <GiTrophyCup className="sidebar-icon" />
          <span>Sports</span>
        </div>
      </div>

      <hr />

      <div className="sidebar-item">
        <IoMdSettings className="sidebar-icon" />
        <span>Settings</span>
      </div>

      <div className="sidebar-item"><MdFlag className="sidebar-icon" />
        <span>Report history</span>
      </div>

      <div className="sidebar-item">
        <MdHelpOutline className="sidebar-icon" />
        <span>Help</span>
      </div>

      <div className="sidebar-item">
        <MdFeedback className="sidebar-icon" />
        <span>Send feedback</span>
      </div>
      <div className="sidebar-footer">
  <div className="footer-links">
    <span>About</span>
    <span>Press</span>
    <span>Copyright</span>
    <span>Contact us</span>
    <span>Creators</span>
    <span>Advertise</span>
    <span>Developers</span>
  </div>
  <div className="footer-links">
    <span>Terms</span>
    <span>Privacy</span>
    <span>Policy & Safety</span>
    <span>How YouTube works</span>
    <span>Test new features</span>
  </div>
  <div className="footer-note">
    © 2025 Google LLC
  </div>
</div>

    </div>
  );
};

export default Sidebar;
