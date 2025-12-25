import DashboardLayout from "@/components/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Users from "@/pages/Users";
import Settings from "@/pages/Settings";
import { Routes, Route } from "react-router-dom";

function DashboardData() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />        {/* /dashboard */}
        <Route path="users" element={<Users />} />       {/* /dashboard/users */}
        <Route path="settings" element={<Settings />} /> {/* /dashboard/settings */}
      </Routes>
    </DashboardLayout>
  );
}

export default DashboardData;
