
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Headphones, 
  Clock, 
  Calendar, 
  RefreshCcw, 
  Check,
  Edit,
  FileText,
  CalendarDays
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { Badge } from "@/components/ui/badge";

// Sample data for chart
const callData = [
  { day: 'Mon', calls: 28, bookings: 12 },
  { day: 'Tue', calls: 35, bookings: 15 },
  { day: 'Wed', calls: 42, bookings: 18 },
  { day: 'Thu', calls: 38, bookings: 16 },
  { day: 'Fri', calls: 32, bookings: 14 },
  { day: 'Sat', calls: 18, bookings: 8 },
  { day: 'Sun', calls: 15, bookings: 5 },
];

// Sample data for activities
const activities = [
  { 
    action: "John booked an appointment", 
    time: "Apr 20, 2:15 PM", 
    icon: <Calendar className="w-4 h-4 text-[#1A237E]" /> 
  },
  { 
    action: "Missed call recovered", 
    time: "Apr 20, 10:04 AM", 
    icon: <RefreshCcw className="w-4 h-4 text-[#00B8D4]" /> 
  },
  { 
    action: "New voicemail received", 
    time: "Apr 19, 4:30 PM", 
    icon: <Headphones className="w-4 h-4 text-gray-600" /> 
  },
  { 
    action: "Susan booked an appointment", 
    time: "Apr 19, 11:47 AM", 
    icon: <Calendar className="w-4 h-4 text-[#1A237E]" /> 
  },
  { 
    action: "AI assistant updated", 
    time: "Apr 18, 9:15 AM", 
    icon: <RefreshCcw className="w-4 h-4 text-[#00B8D4]" /> 
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Date filter */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
        <div className="bg-white rounded-lg border border-gray-200 py-1 px-2 flex space-x-2">
          <button className="px-3 py-1.5 rounded-md bg-[#1A237E] text-white text-sm font-medium">
            This Month
          </button>
          <button className="px-3 py-1.5 rounded-md text-gray-600 text-sm font-medium hover:bg-gray-100">
            This Week
          </button>
          <button className="px-3 py-1.5 rounded-md text-gray-600 text-sm font-medium hover:bg-gray-100">
            Custom Range
          </button>
        </div>
      </div>

      {/* Live status bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm font-medium">1 Call in Progress</span>
          </div>
          <div className="flex items-center">
            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
            <span className="text-sm font-medium">2 Voicemails Waiting</span>
          </div>
          <div className="flex items-center">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm font-medium">All systems operational</span>
          </div>
        </div>
        <div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <Check className="w-3 h-3 mr-1" /> AI Assistant Active
          </Badge>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Calls This Month</p>
                <p className="text-3xl font-bold mt-2">128</p>
                <p className="text-sm text-green-600 font-medium mt-1">+12% from last month</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <Headphones className="w-6 h-6 text-[#1A237E]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Call Duration</p>
                <p className="text-3xl font-bold mt-2">2m 43s</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Across all calls this month</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <Clock className="w-6 h-6 text-[#1A237E]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Bookings Made</p>
                <p className="text-3xl font-bold mt-2">38</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Booked by your AI assistant</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <CalendarDays className="w-6 h-6 text-[#1A237E]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Missed Calls Recovered</p>
                <p className="text-3xl font-bold mt-2">15</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Handled via voicemail-to-booking</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <RefreshCcw className="w-6 h-6 text-[#1A237E]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Assistant Uptime</p>
                <p className="text-3xl font-bold mt-2">99.9%</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Your assistant is always on</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <Check className="w-6 h-6 text-[#1A237E]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Call Trend</h3>
              <div className="text-sm text-teal-600">
                ↑ Bookings peak on Mondays
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={callData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#1A237E" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="bookings" 
                    stroke="#00B8D4" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Recent Activity</h3>
              <button className="text-sm text-[#00B8D4]">View All</button>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="rounded-full bg-gray-100 p-2 mt-0.5">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1A237E] bg-white border border-gray-200 rounded-md px-4 py-2">
          <Edit className="w-4 h-4 mr-2" />
          Edit Greeting
        </button>
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1A237E] bg-white border border-gray-200 rounded-md px-4 py-2">
          <Headphones className="w-4 h-4 mr-2" />
          View Today's Calls
        </button>
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1A237E] bg-white border border-gray-200 rounded-md px-4 py-2">
          <CalendarDays className="w-4 h-4 mr-2" />
          View Booking Calendar
        </button>
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1A237E] bg-white border border-gray-200 rounded-md px-4 py-2">
          <FileText className="w-4 h-4 mr-2" />
          Download Report
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-right">Updated 5 minutes ago</p>
    </DashboardLayout>
  );
};

export default Dashboard;
