import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const users = [
  {
    id: 1,
    name: "Muhammad Farooq",
    email: "farooq@example.com",
    role: "Admin",
  },
  { id: 2, name: "Ali Khan", email: "ali@example.com", role: "Editor" },
  { id: 3, name: "Ayesha", email: "ayesha@example.com", role: "User" },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <Card className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-xl">
        <CardHeader className=" rounded-t-xl">
          <CardTitle className="text-white text-xl">All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="px-4 py-3">Avatar</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-blue-50">
                  <td className="px-4 py-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </td>
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-gray-600">{user.email}</td>
                  <td className="px-4 py-3 font-semibold">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
