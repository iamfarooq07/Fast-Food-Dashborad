import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Simple Label component
function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block font-medium text-gray-700">
      {children}
    </label>
  );
}

// Simple Switch component
function Switch({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 rounded-full p-1 transition-colors ${
        checked ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`block w-4 h-4 bg-white rounded-full transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>

      {/* Account Settings Card */}
      <Card className="max-w-3xl mx-auto mb-6 shadow-lg rounded-xl">
        <CardHeader className="bg-blue-600 rounded-t-xl">
          <CardTitle className="text-white text-lg">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Label htmlFor="username" className="w-32">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Muhammad Farooq"
              className="flex-1"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Label htmlFor="email" className="w-32">
              Email
            </Label>
            <Input
              id="email"
              placeholder="farooq@example.com"
              className="flex-1"
            />
          </div>
          <div className="flex justify-end">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preferences Card */}
      <Card className="max-w-3xl mx-auto shadow-lg rounded-xl">
        <CardHeader className="bg-green-600 rounded-t-xl">
          <CardTitle className="text-white text-lg">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">
              Enable Notifications
            </span>
            <Switch checked={notifications} onChange={setNotifications} />
          </div>

          <div className="flex justify-end">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
