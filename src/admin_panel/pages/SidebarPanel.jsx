import { ChevronUp, Home, Menu, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataTables from "/src/admin_panel/pages/DataTable.jsx";
import { Link } from "react-router-dom";
const items = [
  { title: "Home", url: "/admin", icon: Home },
  { title: "Menu", url: "/admin/menu", icon: Menu },
];

export default function AppSidebar() {
  return (
    <SidebarProvider defaultOpen>
      {/* Sidebar */}
      <Sidebar>
        <SidebarContent>
          {/* Admin Panel with Plus button */}
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <div className="flex items-center justify-between">
                <span>Admin Panel</span>

                {/*  Plus button / action */}
                <SidebarGroupAction title="Add Admin Panel Item">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Add Admin Panel Item</span>
                </SidebarGroupAction>
              </div>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="font-semibold">Dashboard</h1>
        </header>

        <main className="p-4">
          Your page content goes here
          <DataTables />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
