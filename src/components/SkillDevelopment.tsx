import React from 'react';
import { Filter, Zap, Target, Circle, Send } from 'lucide-react';

const SkillDevelopment: React.FC = () => {
  const SkillMetrics = [
    {
      title: 'Ball Control',
      icon: <Circle size={16} />,
      value: '6/10',
      subtitle: 'Average Rating'
    },
    {
      title: 'Passing',
      icon: <Send size={16} />,
      value: '6/10',
      subtitle: 'Average Rating'
    },
    {
      title: '1v1',
      icon: <Target size={16} />,
      value: '6/10',
      subtitle: 'Average Rating'
    },
    {
      title: 'Running w/ Ball',
      icon: <Zap size={16} />,
      value: '6/10',
      subtitle: 'Average Rating'
    },
    {
      title: 'Shooting',
      icon: <Target size={16} />,
      value: '6/10',
      subtitle: 'Average Rating'
    }
  ];

  return (
    <div className="skill-development">
      <div className="section-header">
        <h2 className="section-title skill-development-title">Skill Development</h2>
        <div className="performance-filter">
          <Filter size={16} />
          <span>Sep 2024 - Aug 2025</span>
        </div>
      </div>

      <div className="skill-development-cards">
        {SkillMetrics.map((metric, index) => (
          <div key={index} className="skill-development-card">
            <div className="skill-development-card-header">
              <div className="skill-development-card-title">{metric.title}</div>
              <div className="skill-development-card-icon">
                {metric.icon}
              </div>
            </div>
            <div className="skill-development-card-value">{metric.value}</div>
            <div className="skill-development-card-subtitle">{metric.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDevelopment; 