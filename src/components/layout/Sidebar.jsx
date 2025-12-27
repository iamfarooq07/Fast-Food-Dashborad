import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-toastify";

export default function Sidebar() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  const navigate = useNavigate();
  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message, {
        autoClose: 1000,
      });
    }
    toast.success("Logged out successfully", {
      autoClose: 800,
    });
    navigate("/login");
  };
  return (
    <aside className="relative w-64 h-screen border-r bg-gray-800 px-4 py-6 text-white">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
        <hr className="border-gray-700" />
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <img
          className="border-white border-4 rounded-full w-40 h-40 mb-3 object-cover"
          src="https://images-platform.99static.com/VSzI5cIWiWn_n6KvAzzSY48ifhc=/104x104:938x938/500x500/top/smart/99designs-contests-attachments/120/120934/attachment_120934317"
          alt="Admin Logo"
        />
        <div className="text-center">
          <h1 className="text-gray-400 text-2xl">Muhammad Farooq</h1>
          <p className="text-gray-400">farooq@company.com</p>
        </div>
      </div>

      <hr className="border-gray-700" />
      <nav className="space-y-2 my-2">
        <Link
          to="/dashboard"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <LayoutDashboard size={20} className="mr-2" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/dashboard/users"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <Users size={20} className="mr-2" />
          <span>Users</span>
        </Link>

        <Link
          to="/dashboard/settings"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <Settings size={20} className="mr-2" />
          <span>Settings</span>
        </Link>

        {/* Uncomment for Logout */}
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-2 hover:bg-gray-700 rounded text-left"
        >
          <LogOut size={20} className="mr-2" />
          Logout
        </button>
      </nav>
      <hr className="border-gray-700" />
    </aside>
  );
}
