import React, { useState } from 'react';
import { Filter, TrendingUp } from 'lucide-react';

const SkillsDevelopmentAnalysis: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('Ball Control');

  const skills = ['Ball Control', 'Passing', '1v1', 'Running w/ Ball', 'Shooting'];

  return (
    <div className="skills-development-analysis">
      <div className="section-header">
        <h2 className="section-title">Skills Development Analysis</h2>
        <div className="analysis-filter">
          <Filter size={16} />
          <span>Skills Analysis Period</span>
        </div>
      </div>

      <div className="skills-content">
        <div className="skills-header">
          <div className="skills-title-container">
            <div className="skills-vertical-line"></div>
            <div className="skills-title-text">
              <div className="skills-main-title">Skills Development</div>
              <div className="skills-subtitle">Skills Progress Analysis</div>
            </div>
          </div>
        </div>

        <div className="skills-tabs">
          {skills.map((skill) => (
            <button
              key={skill}
              className={`skill-tab ${activeSkill === skill ? 'active' : ''}`}
              onClick={() => setActiveSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="skills-progress-cards">
          <div className="skill-progress-card">
            <h3 className="card-title">Ball Control</h3>
            <div className="progress-circle-container">
              <div className="dual-progress-circle">
                <svg 
                  className="progress-svg" 
                  viewBox="0 0 120 120" 
                  width="120" 
                  height="120"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  {/* Background circle */}
                  <circle
                    className="progress-background"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#333"
                    strokeWidth="5"
                    fill="none"
                  />

                  {/* Background circle */}
                  <circle
                    className="progress-background-1"
                    cx="60"
                    cy="60"
                    r="38"
                    stroke="#333"
                    strokeWidth="6"
                    fill="none"
                  />

                  <circle
                    className="progress-background-2"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#333"
                    strokeWidth="6"
                    fill="none"
                  />

                  {/* Purple arc - Outer circle (Last Best) */}
                  <circle
                    className="progress-fill-last-best"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#6728f5"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="314"
                    strokeDashoffset="52.8"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  
                  {/* Green arc - Inner circle (Current) */}
                  <circle
                    className="progress-fill-current"
                    cx="60"
                    cy="60"
                    r="38"
                    stroke="#00ff88"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="264"
                    strokeDashoffset="52.4"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  
                </svg>
                <div className="progress-text">
                  <div className="progress-label">Current</div>
                  <div className="progress-value">8.3/10</div>
                </div>
              </div>
            </div>
            <div className="skill-progress-details">
              <div className="skill-detail-item">
                <span className="skill-detail-dot current">•</span>
                <span>Current: 8.3/10</span>
              </div>
              <div className="skill-detail-item">
                <span className="skill-detail-dot last-best">•</span>
                <span>Last Best: 7.4/10</span>
              </div>
            </div>
            <div className="improvement-indicator">
              <TrendingUp size={16} />
              <span>+12.2% improvement</span>
            </div>
          </div>

          <div className="skill-progress-card">
            <h3 className="card-title">Ball Control Consistency</h3>
            <div className="progress-circle-container">
              <div className="progress-circle">
                <svg 
                  className="progress-svg" 
                  viewBox="0 0 120 120"
                  width="120" 
                  height="120"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <circle
                    className="progress-background"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#333"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    className="progress-fill-current"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#00ff88"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray="314"
                    strokeDashoffset="78.5"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="progress-text">
                  <div className="progress-label">Rate</div>
                  <div className="progress-value">7.7</div>
                </div>
              </div>
            </div>
            <div className="improvement-indicator">
              <TrendingUp size={16} />
              <span>Improving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDevelopmentAnalysis; 