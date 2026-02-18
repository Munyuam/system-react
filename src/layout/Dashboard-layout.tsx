import { ReactNode } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  LayoutDashboard,
  Search,
  Building2,
  CreditCard,
  LogOut
} from "lucide-react"

interface Props {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")

    navigate("/login")
  }

  return (
    <div className="flex min-h-screen">

      <aside className="w-64 border-r bg-background p-4 flex flex-col">

        <div className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Tenant Dashboard
          </h2>

          <nav className="space-y-1 text-sm">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-colors 
                ${isActive 
                  ? "bg-muted font-medium" 
                  : "hover:bg-muted/60"}`
              }
            >
              <LayoutDashboard size={18} />
              Overview
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-colors 
                ${isActive 
                  ? "bg-muted font-medium" 
                  : "hover:bg-muted/60"}`
              }
            >
              <Search size={18} />
              Search
            </NavLink>

            <NavLink
              to="/hostels"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-colors 
                ${isActive 
                  ? "bg-muted font-medium" 
                  : "hover:bg-muted/60"}`
              }
            >
              <Building2 size={18} />
              Hostels
            </NavLink>

            <NavLink
              to="/payments"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-colors 
                ${isActive 
                  ? "bg-muted font-medium" 
                  : "hover:bg-muted/60"}`
              }
            >
              <CreditCard size={18} />
              Payments
            </NavLink>

          </nav>
        </div>

        <div className="mt-auto pt-6">
          <Separator className="mb-4" />

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 p-2 rounded-md text-sm bg-destructive/10 text-destructive
                       hover:bg-destructive/10 hover:text-destructive 
                       transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button> 
        </div>

      </aside>

      <div className="flex-1 flex flex-col">

        <header className="h-16 border-b flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Tenant Panel</h1>

          <Avatar>
            <AvatarFallback>TN</AvatarFallback>
          </Avatar>
        </header>

        <Separator />

        <main className="flex-1 p-6 bg-muted/40">
          {children}
        </main>

      </div>
    </div>
  )
}
