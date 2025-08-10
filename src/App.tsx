import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./components/Dashboard";            // the one you just added
import PlayerOverview from "./components/PlayerOverview";  // your existing page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="./components/dashboard" replace />} />
          <Route path="./components/dashboard" element={<Dashboard />} />
          <Route path="./components/players/:id" element={<PlayerOverview />} />
          {/* add more pages as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

