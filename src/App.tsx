import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./components/Dashboard";
import PlayerPage from "./components/PlayerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/players" element={<PlayerPage />} />
          <Route path="/players/:id" element={<PlayerPage />} />
          <Route path="/teams" element={<div>Teams Page - Coming Soon</div>} />
          <Route path="/settings" element={<div>Settings Page - Coming Soon</div>} />
          <Route path="/help" element={<div>Help Page - Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

