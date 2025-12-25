import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="relative w-64 h-screen border-r bg-black px-4 py-6 text-white">
      <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
      <hr className="border-gray-700" />
      <nav className="space-y-2 my-2">
        <Link
          to="/"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <LayoutDashboard size={20} className="mr-2" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/users"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <Users size={20} className="mr-2" />
          <span>Users</span>
        </Link>

        <Link
          to="/settings"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <Settings size={20} className="mr-2" />
          <span>Settings</span>
        </Link>

        {/* Uncomment for Logout */}
        {/* <Link
          to="/logout"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-700 rounded hover:text-white"
        >
          <LogOut size={20} className="mr-2" />
          <span>Logout</span>
        </Link> */}
      </nav>
      <Separator className="my-6 border-gray-700" />
      <p className="absolute bottom-0 mb-10 text-sm w-full text-center">
        © 2025 Muhammad Farooq
      </p>
    </aside>
  );
}
