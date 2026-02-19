import DashboardLayout from "@/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <DashboardLayout>

      <div className="grid gap-4 md:grid-cols-3 mb-6">

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$45,231</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2,350</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,220</p>
          </CardContent>
        </Card>

      </div>

    </DashboardLayout>
  )
}
