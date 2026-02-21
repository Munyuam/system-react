import { Routes, Route } from "react-router-dom"
import DashboardLayout from "@/layout/Dashboard-layout"

import Overview from "@/pages/Overview"
import Payments from "@/pages/Payments"
import Search from "./pages/Search"

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </DashboardLayout>
  )
}

export default App
