import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="relative  w-64 h-screen border-r bg-background px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <Link
          to="/"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/users"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 rounded"
        >
          Users
        </Link>

        <Link
          to="/settings"
          className="w-full flex justify-start px-4 py-2 hover:bg-gray-100 rounded"
        >
          Setting
        </Link>
      </nav>

      <Separator className="my-6" />
      <div>
        <p className="absolute bottom-0 mb-10 text-sm">
          © 2025 Muhammad Farooq
        </p>
      </div>
    </aside>
  );
}
