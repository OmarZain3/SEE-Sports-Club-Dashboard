import React from "react";
import {
  LogOut,
  User,
  Trophy,
  LayoutDashboard,
  Users,
  User as UserIcon,
  Settings,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const cx = (...c: (string | false)[]) => c.filter(Boolean).join(" ");

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Logo & Heading */}
      <div className="logo">
        <div className="logo-icon">
          <Trophy size={24} />
        </div>
        <div className="logo-text">
          <div className="club-name">Sports Club</div>
          <div className="info-logo">Management System</div>
        </div>
        <button className="collapse-btn">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        {/* MAIN Section */}
        <div className="nav-section">
          <h3 className="nav-section-title">MAIN</h3>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => cx("nav-item", isActive && "active")}
              >
                <div className="nav-icon">
                  <LayoutDashboard size={20} />
                </div>
                <div className="nav-content">
                  <div className="nav-title">Dashboard</div>
                  <div className="nav-subtitle">Overview and key metrics</div>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/teams"
                className={({ isActive }) => cx("nav-item", isActive && "active")}
              >
                <div className="nav-icon">
                  <Users size={20} />
                </div>
                <div className="nav-content">
                  <div className="nav-title">Teams</div>
                  <div className="nav-subtitle">Manage team rosters</div>
                </div>
                <span className="notification-badge">3</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/players"
                className={({ isActive }) => cx("nav-item", isActive && "active")}
              >
                <div className="nav-icon">
                  <UserIcon size={20} />
                </div>
                <div className="nav-content">
                  <div className="nav-title">Players</div>
                  <div className="nav-subtitle">Player profiles and stats</div>
                </div>
                <span className="notification-badge">67</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SYSTEM Section */}
        <div className="nav-section">
          <h3 className="nav-section-title">SYSTEM</h3>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => cx("nav-item", isActive && "active")}
              >
                <div className="nav-icon">
                  <Settings size={20} />
                </div>
                <div className="nav-content">
                  <div className="nav-title">Settings</div>
                  <div className="nav-subtitle">App preferences</div>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/help"
                className={({ isActive }) => cx("nav-item", isActive && "active")}
              >
                <div className="nav-icon">
                  <HelpCircle size={20} />
                </div>
                <div className="nav-content">
                  <div className="nav-title">Help & Support</div>
                  <div className="nav-subtitle">Get assistance</div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* User Profile */}
      <div className="user-profile">
        <div className="user-profile-card">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <div className="user-info" style={{ justifyContent: "left" }}>
            <div className="user-name" style={{ justifyContent: "left" }}>
              Coach Admin
            </div>
            <div className="user-email">admin@sportsclub.com</div>
          </div>
        </div>
        <div className="logout-section">
          <button className="logout-btn">
            <LogOut size={16} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
