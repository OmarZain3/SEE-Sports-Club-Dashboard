import React, { useState } from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { Filter, TrendingUp, Heart, Zap, Clock, Activity } from 'lucide-react';

const data = [
  { month: 'Jan', ballControl: 9.2, passing: 6.8, shooting: 6.5 },
  { month: 'Feb', ballControl: 8.0, passing: 6.9, shooting: 6.7 },
  { month: 'Mar', ballControl: 6.4, passing: 7.1, shooting: 6.9 },
  { month: 'Apr', ballControl: 5.6, passing: 7.3, shooting: 7.1 },
  { month: 'May', ballControl: 4.8, passing: 7.5, shooting: 7.3 },
  { month: 'Jun', ballControl: 6.0, passing: 7.7, shooting: 7.5 },
  { month: 'Jul', ballControl: 8.2, passing: 7.9, shooting: 7.7 },
];

const SkillChart: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState('Ball Control');

  const skillMetrics = [
    { name: 'Ball Control', icon: <TrendingUp size={16} /> },
    { name: 'Passing', icon: <Heart size={16} /> },
    { name: 'Shooting', icon: <Zap size={16} /> },
    { name: 'Dribbling', icon: <Clock size={16} /> },
    { name: 'Defending', icon: <Activity size={16} /> },
  ];

  return (
    <div className="skill-analytics">
      {/* Skill Analytics Section */}
      <div className="skill-analytics-section">
        

        {/* Skill Assessment Section */}
        <div className="skill-assessment-section">
          <div className="assessment-header">
            <div className="assessment-title-section">
              <h3 className="assessment-title">Skill Assessment</h3>
              <p className="assessment-description">
                Track progress across technical skill performance indicators.
              </p>
            </div>
            <div className="selected-metric">
              <TrendingUp size={16} />
              <span>Ball Control Mastery</span>
            </div>
          </div>

          {/* Skill Assessment Metrics */}
          <div className="assessment-metrics">
            {skillMetrics.map((skill, index) => (
              <button
                key={index}
                className={`assessment-metric-btn ${selectedSkill === skill.name ? 'active' : ''}`}
                onClick={() => setSelectedSkill(skill.name)}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Chart Section */}
      <div className="skill-chart">
        <div className="chart-header">
          <div className="chart-title-container">
            <div className="chart-icon">
              <TrendingUp size={20} />
            </div>
            <div className="chart-title-content">
              <div className="chart-title-text">Ball Control Mastery</div>
              <div className="chart-subtitle">Technical ball handling and control skills</div>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color ball-control"></div>
              <span>Ball Control</span>
            </div>
            <div className="legend-item">
              <div className="legend-color passing"></div>
              <span>Passing</span>
            </div>
            <div className="legend-item">
              <div className="legend-color shooting"></div>
              <span>Shooting</span>
            </div>
          </div>
        </div>
        
        <div className="metrics-summary">
          <div className="metric-card">
            <div className="metric-value">8.15</div>
            <div className="metric-label">Your Average</div>
            <div className="progress-bar">
              <div className="progress-fill your-average" style={{ width: '82%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-value">7.89</div>
            <div className="metric-label">Team Average</div>
            <div className="progress-bar">
              <div className="progress-fill team-average" style={{ width: '79%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-value">7.2</div>
            <div className="metric-label">League Average</div>
            <div className="progress-bar">
              <div className="progress-fill league-average" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="month" 
                stroke="#666"
                tick={{ fill: '#666' }}
              />
              <YAxis 
                stroke="#666"
                tick={{ fill: '#666' }}
                domain={[4, 10]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #333',
                  borderRadius: '8px'
                }}
              />
              <defs>
                <linearGradient id="skillAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a4035" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2a4035" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="ballControl"
                stroke="none"
                fill="url(#skillAreaGradient)"
                stackId="1"
              />
              <Line 
                type="monotone" 
                dataKey="ballControl" 
                stroke="#00ff88" 
                strokeWidth={2}
                dot={{ fill: '#00ff88', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="passing" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="shooting" 
                stroke="#666" 
                strokeWidth={1}
                dot={{ fill: '#666', strokeWidth: 1, r: 3 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillChart;
