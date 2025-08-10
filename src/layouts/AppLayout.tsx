import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Sidebar from "../components/Sidebar"; // whatever your sidebar component file is

export default function AppLayout() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <TopHeader userName="Abdelrahman Ghareeb" userRole="Administrator" />
        <Outlet /> {/* pages render here */}
      </main>
    </div>
  );
}
