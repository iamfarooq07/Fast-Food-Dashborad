import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevenueChart from "../components/dashboard/RevenueChart";

export default function Dashboard() {
  return (
    <div className="space-y-6 bg-black p-3">
      <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

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

        {/* --------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>

          <div className="lg:col-span-1">
            {/* future: recent activity / pie chart */}
          </div>
        </div>
      </div>
    </div>
  );
}
