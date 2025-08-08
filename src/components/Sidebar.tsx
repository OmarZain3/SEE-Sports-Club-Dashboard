import React from 'react';
import { 
  LogOut, 
  User, 
  Trophy, 
  LayoutDashboard, 
  Users, 
  User as UserIcon,
  Settings, 
  HelpCircle,
  ChevronLeft
} from 'lucide-react';

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
            <li className="nav-item">
              <div className="nav-icon">
                <LayoutDashboard size={20} />
              </div>
              <div className="nav-content">
                <div className="nav-title">Dashboard</div>
                <div className="nav-subtitle">Overview and key metrics</div>
              </div>
            </li>
            
            <li className="nav-item">
              <div className="nav-icon">
                <Users size={20} />
              </div>
              <div className="nav-content">
                <div className="nav-title">Teams</div>
                <div className="nav-subtitle">Manage team rosters</div>
              </div>
              <div className="notification-badge">3</div>
            </li>
            
            <li className="nav-item active">
              <div className="nav-icon">
                <UserIcon size={20} />
              </div>
              <div className="nav-content">
                <div className="nav-title">Players</div>
                <div className="nav-subtitle">Player profiles and stats</div>
              </div>
              <div className="notification-badge">67</div>
            </li>
          </ul>
        </div>
        
        {/* SYSTEM Section */}
        <div className="nav-section">
          <h3 className="nav-section-title">SYSTEM</h3>
          <ul className="nav-list">
            <li className="nav-item">
              <div className="nav-icon">
                <Settings size={20} />
              </div>
              <div className="nav-content">
                <div className="nav-title">Settings</div>
                <div className="nav-subtitle">App preferences</div>
              </div>
            </li>
            
            <li className="nav-item">
              <div className="nav-icon">
                <HelpCircle size={20} />
              </div>
              <div className="nav-content">
                <div className="nav-title">Help & Support</div>
                <div className="nav-subtitle">Get assistance</div>
              </div>
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
        <div className="user-info" style={{justifyContent: 'left'}}>
          <div className="user-name" style={{justifyContent: 'left'}}>Coach Admin</div>
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