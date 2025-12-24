import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueData } from "./chartData";

export default function RevenueChart() {
  return (
    <div className="bg-black text-white px-4">
      <Card className="w-screen max-w-6xl bg-gray-800 text-white h-[600px]">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>

        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <XAxis stroke="#9ca3af" dataKey="name" />
              <YAxis stroke="#9ca3af" />

              <Tooltip
                cursor={{ stroke: "#6b7280", strokeDasharray: "3 3" }}
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  color: "#e5e7eb",
                }}
                labelStyle={{ color: "#9ca3af" }}
                itemStyle={{ color: "#fff" }}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
