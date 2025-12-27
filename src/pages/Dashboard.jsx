import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevenueChart from "../components/dashboard/RevenueChart";

const productsData = [
  {
    id: 1,
    name: "Nike Air",
    category: "Sports",
    price: "$120",
    status: "Running",
  },
  {
    id: 2,
    name: "Adidas Classic",
    category: "Casual",
    price: "$90",
    status: "Available",
  },
  {
    id: 3,
    name: "Formal Shoes",
    category: "Formal",
    price: "$150",
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Puma Runner",
    category: "Sports",
    price: "$110",
    status: "Available",
  },
];

export default function Dashboard() {
  const [selected, setSelected] = useState("All");

  const filtered = productsData.filter((p) =>
    selected === "All" ? true : p.status === selected
  );

  return (
    <div className="space-y-6 bg-black p-3 text-white">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">1,240</CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">$12,430</CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">320</CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Growth</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-green-600">
            +18%
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1"></div>
      </div>

      {/* Products Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl border border-gray-100 shadow-sm overflow-auto">
          <h4 className="text-xl font-bold text-white">Products</h4>

          <div className="mt-4 mb-2 flex items-center gap-3">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="text-sm rounded-md border px-3 py-2 bg-gray-900 text-white"
            >
              <option value="All">All</option>
              <option value="Running">Running</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <div className="text-xs text-gray-400">
              Showing {filtered.length} results
            </div>
          </div>

          <table className="min-w-full mt-2 text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b">
                <th className="py-2 px-2">Product</th>
                <th className="py-2 px-2">Category</th>
                <th className="py-2 px-2">Price</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-600">
                  <td className="py-3 px-2">{r.name}</td>
                  <td className="py-3 px-2">{r.category}</td>
                  <td className="py-3 px-2">{r.price}</td>
                  <td className="py-3 px-2">{r.status}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <button className="text-xs px-2 py-1 rounded bg-green-500 text-black">
                        Edit
                      </button>
                      <button className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h4 className="text-lg font-semibold">Activity</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-2.5" />
              <div>
                <div className="font-medium">Order #2334 completed</div>
                <div className="text-xs text-gray-200">2 hours ago</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mt-2.5" />
              <div>
                <div className="font-medium">Stock low: Luna Sneakers</div>
                <div className="text-xs text-gray-200">4 hours ago</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400 mt-2.5" />
              <div>
                <div className="font-medium">New user signup: Zara</div>
                <div className="text-xs text-gray-200">1 day ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
