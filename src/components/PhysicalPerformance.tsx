import React from 'react';
import { Filter, Zap, Target, Clock, Users } from 'lucide-react';

const PhysicalPerformance: React.FC = () => {
  const performanceMetrics = [
    {
      title: 'Vertical Jump',
      icon: <Zap size={16} />,
      value: '70 cm',
      subtitle: 'Best in period'
    },
    {
      title: 'Broad Jump',
      icon: <Target size={16} />,
      value: '274 cm',
      subtitle: 'Best in period'
    },
    {
      title: '10 Meter Run',
      icon: <Clock size={16} />,
      value: '1.70 sec',
      subtitle: 'Best in period'
    },
    {
      title: 'Five Ten Five',
      icon: <Clock size={16} />,
      value: '4.30 sec',
      subtitle: 'Best in period'
    },
    {
      title: 'T-Agility',
      icon: <Users size={16} />,
      value: '9.70 sec',
      subtitle: 'Best in period'
    }
  ];

  return (
    <div className="physical-performance">
      <div className="section-header">
        <h2 className="physical-performance-title">Physical Performance</h2>
        <div className="performance-filter">
          <Filter size={16} />
          <span>Sep 2024 - Aug 2025</span>
        </div>
      </div>

      <div className="performance-cards">
        {performanceMetrics.map((metric, index) => (
          <div key={index} className="performance-card">
            <div className="performance-card-header">
              <div className="performance-card-title">{metric.title}</div>
              <div className="performance-card-icon">
                {metric.icon}
              </div>
            </div>
            <div className="performance-card-value">{metric.value}</div>
            <div className="performance-card-subtitle">{metric.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicalPerformance; 