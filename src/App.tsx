import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import PerformanceChart from './components/PerformanceChart';
import VideoAnalysis from './components/VideoAnalysis';
import PlayerOverview from './components/PlayerOverview';
import SkillsDevelopmentAnalysis from './components/SkillsDevelopmentAnalysis';
import PhysicalPerformance from './components/PhysicalPerformance';
import SkillDevelopment from './components/SkillDevelopment';
import SkillChart from './components/SkillChart';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <PlayerOverview />
        <SkillsDevelopmentAnalysis />
        <PhysicalPerformance />
        <SkillDevelopment />
        <PerformanceChart />
        <SkillChart />
        <VideoAnalysis />

      </main>
    </div>
  );
}

export default App;
