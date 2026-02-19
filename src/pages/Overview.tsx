import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <Card>
        <CardHeader>
          <CardTitle>Current Rent</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$500</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Due Date</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">March 1</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">2 Open</p>
        </CardContent>
      </Card>

    </div>
  )
}
