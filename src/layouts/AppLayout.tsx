import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div className="app">
      <TopHeader userName="Abdelrahman Ghareeb" userRole="Administrator" />
      <div className="app-content">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
