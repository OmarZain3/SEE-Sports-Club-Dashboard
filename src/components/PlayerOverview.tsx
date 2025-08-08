import React, { useState } from 'react';
import { Share2, Filter, ChevronRight, User, TrendingUp } from 'lucide-react';
import PlayerCard from './PlayerCard';
import SkillsDevelopmentAnalysis from './SkillsDevelopmentAnalysis';
import PhysicalPerformance from './PhysicalPerformance';
import PerformanceChart from './PerformanceChart';
import SkillChart from './SkillChart';

const PlayerOverview: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState('3 Months');
  const [activeTest, setActiveTest] = useState('Vertical Jump');

  const periods = ['Last Month', '3 Months', '6 Months', 'This Year'];
  const physicalTests = ['Vertical Jump', 'Broad Jump', '10m Run', '5-10-5', 'T-Agility'];

  // Player data for the dynamic card
  // const playerData = {
  //   rating: 94,
  //   name: "Ahmed Mohamed",
  //   position: "CAM",
  //   role: "Central Attacking Midfielder",
  //   imageUrl: "/src/assets/Player_Pic.png",
  //   stats: { phy: 74, skl: 92 },
  //   sport: "football",
  //   profilePicture: "/src/assets/Player_Pic.png",
  //   totalScore: 94,
  //   physical: 74,
  //   skills: 92,
  //   shortPosition: "CAM",
  //   traits: [
  //     'Perfect Link',
  //     'Great Header',
  //     'Football Player'
  //   ],
  // };

  return (
    <div className="player-overview">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="breadcrumbs">
          <span>Club</span>
          <ChevronRight size={16} />
          <span>Teams</span>
          <ChevronRight size={16} />
          <span>Team A</span>
          <ChevronRight size={16} />
          <span>Ahmed Mohamed</span>
        </div>
        <div className="top-actions">
          <button className="share-btn">
            <Share2 size={16} />
            Share Profile
          </button>
          <div className="user-info">
            <User size={20} />
            <span>Abdelrahman Ghareeb Administrator</span>
          </div>
        </div>
      </div>

      {/* Player Header */}
      <div className="player-header">
        <div className="player-info">
          <h1 className="player-name">Ahmed Mohamed</h1>
          <p className="player-description">
            Detailed player profile with performance metrics, statistics, and development progress.
          </p>
        </div>
      </div>

      {/* Period Selector */}
      <div className="period-selector">
        <div className="period-label">Period:</div>
        <div className="period-buttons">
          {periods.map((period) => (
            <button
              key={period}
              className={`period-btn ${activePeriod === period ? 'active' : ''}`}
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
        <div className="date-range">
          <span>Jun 2025 - Aug 2025</span>
          <button className="custom-btn">Custom</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>

      {/* Two-Column Layout: Player Card and Physical Progress */}
      <div className="player-content-layout">
        {/* Left Column: Player Card */}
        <div className="player-card-column">
          <div className="player-card-section">
            <h2 className="section-title">Player Card <span className="active-dot">• Active</span></h2>
            <div className="player-card-container">
              {/* Unified Background Container */}
              <div className="player-card-background">
                {/* Player Card Component */}
                <div className="player-card-wrapper">
                  <PlayerCard />
                </div>
                
                {/* Player Card Footer */}
                <div className="player-card-footer">
                  <div className="player-info-footer">
                    <div className="left-info">
                      <div className="player-name-card">Ahmed Mohamed</div>
                      <div className="team-name-card">Team A</div>
                    </div>
                    <div className="live-status">
                      <span className="live-dot" />
                      <span className="live-text">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Physical Progress */}
        <div className="physical-progress-column">
          <div className="physical-progress">
            <div className="section-header">
              <h2 className="section-title physical-progress-title">
                Physical Progress
              </h2>
            </div>
            <div className="sub-sec" >
              <div className="test-tabs">
                {physicalTests.map((test) => (
                  <button
                    key={test}
                    className={`test-tab ${activeTest === test ? 'active' : ''}`}
                    onClick={() => setActiveTest(test)}
                  >
                    {test}
                  </button>
                ))}
              </div>

              <div className="progress-cards">
                <div className="progress-card">
                  <h3 className="card-title">Vertical Jump</h3>
                  <div className="progress-circle-container">
                    <div className="progress-circle">
                      <svg className="progress-svg" viewBox="0 0 120 120">
                        <circle
                          className="progress-background"
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#333"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          className="progress-fill"
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#6728f5"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="31.4"
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />

                        <circle
                          className="progress-background"
                          cx="60"
                          cy="60"
                          r="38"
                          stroke="#333"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          className="progress-fill"
                          cx="60"
                          cy="60"
                          r="38"
                          stroke="#6728f5"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="268"
                          strokeDashoffset="55.4"
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="progress-text">
                        <div className="progress-label">Current</div>
                        <div className="progress-value">8.4</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-details">
                    <div className="detail-item">
                      <span className="detail-dot">•</span>
                      <span>Current 8.4</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-dot">•</span>
                      <span>Best 7.7</span>
                    </div>
                  </div>
                </div>

                <div className="progress-card">
                  <h3 className="card-title">Consistency</h3>
                  <div className="progress-circle-container">
                    <div className="progress-circle">
                      <svg className="progress-svg" viewBox="0 0 120 120">
                        <circle
                          className="progress-background"
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#333"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          className="progress-fill"
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#6728f5"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="78.5"
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="progress-text">
                        <div className="progress-label">Rate</div>
                        <div className="progress-value">7.8</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-details">
                    <div className="improvement-item">
                      <TrendingUp size={16} />
                      <span>Improving</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary-card">
                <h3 className="card-title">PHYSICAL PERFORMANCE SUMMARY</h3>
                <div className="summary-items">
                  <div className="summary-item">
                    <span className="improvement-dot">• Improved:</span>
                    <span> Overall Physical Performance</span>
                  </div>
                  <div className="summary-item">
                    <span className="consistency-dot">• Consistent:</span>
                    <span> Training Attendance</span>
                  </div>
                </div>
                <div className="period-info">Period: Jun 2025 - Aug 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Development Analysis */}
      
    </div>
  );
};

export default PlayerOverview; 