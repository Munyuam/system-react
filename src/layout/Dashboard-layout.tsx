import { ReactNode, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  LayoutDashboard,
  Search,
  Building2,
  CreditCard,
  LogOut,
  Menu,
  User,
  Settings,
  HelpCircle
} from "lucide-react"

interface Props {
  children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Overview" },
    { to: "/search", icon: Search, label: "Search" },
    { to: "/hostels", icon: Building2, label: "Hostels" },
    { to: "/payments", icon: CreditCard, label: "Payments" }
  ]

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onClick}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 
            ${isActive 
              ? "bg-primary/10 text-primary font-medium" 
              : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`
          }
        >
          <item.icon size={20} className="shrink-0" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </>
  )

  return (
    <div className="flex min-h-screen bg-background">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 lg:w-72 border-r bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-col p-4 sticky top-0 h-screen">
        <div className="space-y-6">
          <div className="px-3 py-2">
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tenant Dashboard
            </h2>
          </div>

          <nav className="space-y-1 px-2">
            <NavLinks />
          </nav>
        </div>
      </aside>

      {/* Mobile Header with Menu */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Menu size={20} />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex flex-col h-full py-6">
                    <div className="px-4 pb-6">
                      <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Tenant Dashboard
                      </h2>
                    </div>
                    <nav className="flex-1 px-2">
                      <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
              
              <h1 className="text-base font-semibold md:hidden">Dashboard</h1>
            </div>

            {/* Desktop Title */}
            <h1 className="hidden md:block text-lg font-semibold">Welcome back, User</h1>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      TN
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Tenant User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      tenant@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <Separator />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}