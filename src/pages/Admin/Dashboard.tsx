import { useEffect, useState } from "react";
    import { useNavigate, useLocation, Link } from "react-router-dom";
    import { Button } from "@/components/ui/button";
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion";
    import { Input } from "@/components/ui/input";
    import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger, SidebarInset, SidebarSeparator, SidebarHeader, SidebarFooter, SidebarInput, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarMenuSkeleton, SidebarProvider } from "@/components/ui/sidebar";
    import { useSidebar } from "@/components/ui/sidebar";
    import { cn } from "@/lib/utils";
    import { Badge } from "@/components/ui/badge";
    import { ScrollArea } from "@/components/ui/scroll-area";
    import { ArrowLeft } from "lucide-react";

    const AdminDashboard = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const isLoggedIn = localStorage.getItem("adminLoggedIn");
        if (!isLoggedIn) {
          navigate("/admin/login");
        } else {
          setLoading(false);
        }
      }, [navigate]);

      if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
      }

      const handleNavigation = (path: string) => {
        navigate(`/admin${path}`);
      };

      return (
        <SidebarProvider defaultOpen={true}>
          <div className="flex font-sans">
            <Sidebar variant="inset" collapsible="icon">
              <SidebarHeader>
                <h2 className="text-2xl font-bold">Admin Panel</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Overview</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={location.pathname === "/admin"}>
                        <Link to="/admin">Dashboard</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>Management</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/projects">Projects</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/clients">Clients</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/services">Services</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/content">Content</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>Settings</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/profile">Profile</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/admin/settings">Settings</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <Button onClick={() => {
                  localStorage.removeItem("adminLoggedIn");
                  navigate("/admin/login");
                }} variant="outline" className="w-full">Logout</Button>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              <div className="container mx-auto p-4">
                <div className="flex items-center mb-4">
                  <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-3xl font-bold ml-2">Overview</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-md">
                    <h3 className="font-semibold">Total Projects</h3>
                    <p>10</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-md">
                    <h3 className="font-semibold">New Inquiries</h3>
                    <p>5</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-md">
                    <h3 className="font-semibold">Services Booked</h3>
                    <p>3</p>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Projects</h2>
                <div className="flex justify-end mb-4">
                  <Button>Add Project</Button>
                </div>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Project 1</p>
                  <p>Project 2</p>
                  <p>Project 3</p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Clients</h2>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Client 1</p>
                  <p>Client 2</p>
                  <p>Client 3</p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Service 1</p>
                  <p>Service 2</p>
                  <p>Service 3</p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Content</h2>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Content 1</p>
                  <p>Content 2</p>
                  <p>Content 3</p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Notifications</h2>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Notification 1</p>
                  <p>Notification 2</p>
                  <p>Notification 3</p>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4">Admin Profile</h2>
                <div className="bg-secondary/50 p-4 rounded-md">
                  <p>Name: Admin</p>
                  <p>Email: admin@example.com</p>
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      );
    };

    export default AdminDashboard;
