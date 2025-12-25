import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Sign from "./Auth/Sign";
import DashboardData from "./DashboardData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardData />} />
      </Routes>
    </div>
  );
}

export default App;
