import React, { useState } from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { Filter, TrendingUp, Heart, Zap, Clock, Activity } from 'lucide-react';

const data = [
  { month: 'Jan', ahmed: 7.5, team: 6.2, league: 5.8 },
  { month: 'Feb', ahmed: 4.8, team: 5.9, league: 5.9 },
  { month: 'Mar', ahmed: 4.2, team: 6.1, league: 6.0 },
  { month: 'Apr', ahmed: 8.8, team: 6.5, league: 6.1 },
  { month: 'May', ahmed: 7.2, team: 6.8, league: 6.2 },
  { month: 'Jun', ahmed: 7.8, team: 7.1, league: 6.3 },
  { month: 'Jul', ahmed: 8.2, team: 7.4, league: 6.4 },
];

const PerformanceChart: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('Vertical Jump');

  const physicalMetrics = [
    { name: 'Vertical Jump', icon: <TrendingUp size={16} /> },
    { name: 'Broad Jump', icon: <Heart size={16} /> },
    { name: '10m Run', icon: <Zap size={16} /> },
    { name: '5-10-5', icon: <Clock size={16} /> },
    { name: 'T-Agility', icon: <Activity size={16} /> },
  ];

  return (
    <div className="performance-analytics">
      {/* Performance Analytics Section */}
      <div className="performance-analytics-section">
        <div className="analytics-header">
          <div className="analytics-title-section">
            <div className="analytics-subtitle">Performance Charts</div>
            <h2 className="analytics-title">Performance Analytics</h2>
            <p className="analytics-description">
              Comprehensive tracking across skills and physical performance categories.
            </p>
          </div>
          <div className="analytics-filter">
            <Filter size={16} />
            <span>Filtered Data</span>
          </div>
        </div>

        {/* Physical Assessment Section */}
        <div className="physical-assessment-section">
          <div className="assessment-header">
            <div className="assessment-title-section">
              <h3 className="assessment-title">Physical Assessment</h3>
              <p className="assessment-description">
                Track progress across physical assessment performance indicators.
              </p>
            </div>
            <div className="selected-metric">
              <TrendingUp size={16} />
              <span>Vertical Jump Height</span>
            </div>
          </div>

          {/* Physical Assessment Metrics */}
          <div className="assessment-metrics">
            {physicalMetrics.map((metric, index) => (
              <button
                key={index}
                className={`assessment-metric-btn ${selectedMetric === metric.name ? 'active' : ''}`}
                onClick={() => setSelectedMetric(metric.name)}
              >
                {metric.icon}
                <span>{metric.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart Section */}
      <div className="performance-chart">
        <div className="chart-header">
          <div className="chart-title-container">
            <div className="chart-icon">
              <TrendingUp size={20} />
            </div>
            <div className="chart-title-content">
              <div className="chart-title-text">Vertical Jump Height</div>
              <div className="chart-subtitle">Explosive leg power and jumping ability</div>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color ahmed"></div>
              <span>Ahmed Mohamed</span>
            </div>
            <div className="legend-item">
              <div className="legend-color team"></div>
              <span>Team</span>
            </div>
            <div className="legend-item">
              <div className="legend-color league"></div>
              <span>League</span>
            </div>
          </div>
        </div>
        
        <div className="metrics-summary">
          <div className="metric-card">
            <div className="metric-value">7.83</div>
            <div className="metric-label">Your Average</div>
            <div className="progress-bar">
              <div className="progress-fill your-average" style={{ width: '83%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-value">7.51</div>
            <div className="metric-label">Team Average</div>
            <div className="progress-bar">
              <div className="progress-fill team-average" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-value">7</div>
            <div className="metric-label">League Average</div>
            <div className="progress-bar">
              <div className="progress-fill league-average" style={{ width: '70%' }}></div>
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
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a4035" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2a4035" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="ahmed"
                stroke="none"
                fill="url(#areaGradient)"
                stackId="1"
              />
              <Line 
                type="monotone" 
                dataKey="ahmed" 
                stroke="#00ff88" 
                strokeWidth={2}
                dot={{ fill: '#00ff88', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="team" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="league" 
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

export default PerformanceChart; 