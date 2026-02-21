"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, Wrench, Users } from "lucide-react"

export default function Overview() {
  return (
    <div className="min-h-screen p-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">
          Quick summary of your rent and room status
        </p>
      </div>

      {/* ===== Top Statistics Row ===== */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Rent Card */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Current Rent</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">$500</h2>
                <p className="text-xs text-green-600 mt-1">✓ Paid for February</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <DollarSign className="text-blue-600 w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Due Date Card */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Next Due Date</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">March 1</h2>
                <p className="text-xs text-yellow-600 mt-1">Upcoming payment</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-xl">
                <Calendar className="text-yellow-600 w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Card */}
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Maintenance</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">2 Open</h2>
                <p className="text-xs text-red-500 mt-1">Waiting resolution</p>
              </div>
              <div className="bg-red-100 p-3 rounded-xl">
                <Wrench className="text-red-600 w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* ===== Secondary Section ===== */}
      <div className="grid gap-6 mt-8 lg:grid-cols-3">

        {/* Occupancy Section (Large Card Like Inspiration Graph Area) */}
        <Card className="lg:col-span-2 rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Room Occupancy
              </h2>
              <Users className="text-blue-600 w-5 h-5" />
            </div>

            <p className="text-3xl font-bold text-gray-800">75%</p>

            <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: "75%" }}
              />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              3 out of 4 tenants currently occupying
            </p>
          </CardContent>
        </Card>

        {/* Quick Status Card (Like Team Goals Section) */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-6">

            <div>
              <p className="text-sm text-gray-500">Monthly Target</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-green-600 h-2 rounded-full w-4/5" />
              </div>
              <p className="text-xs text-gray-400 mt-1">80% Collected</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Maintenance Progress</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-orange-500 h-2 rounded-full w-2/5" />
              </div>
              <p className="text-xs text-gray-400 mt-1">40% Resolved</p>
            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}