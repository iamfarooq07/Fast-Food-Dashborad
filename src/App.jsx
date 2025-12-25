import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Sign from "./Auth/Sign";
import DashboardData from "./DashboardData";

function App() {
  return (
    <div>
      {/* <DashboardData />
      <Login />
      <Sign /> */}
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashborad" element={<DashboardData />} />
      </Routes>
    </div>
  );
}

export default App;
