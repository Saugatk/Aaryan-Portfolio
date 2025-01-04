import { Toaster } from "@/components/ui/toaster";
    import { Toaster as Sonner } from "@/components/ui/sonner";
    import { TooltipProvider } from "@/components/ui/tooltip";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
    import Navigation from "./components/Navigation";
    import Footer from "./components/Footer";
    import Index from "./pages/Index";
    import AboutPage from "./pages/AboutPage";
    import ServicesPage from "./pages/ServicesPage";
    import PortfolioPage from "./pages/PortfolioPage";
    import ContactPage from "./pages/ContactPage";
    import AdminLogin from "./pages/Admin/Login";
    import AdminDashboard from "./pages/Admin/Dashboard";
    import React from "react";
    import AdminProjects from "./pages/Admin/Projects";
    import AdminClients from "./pages/Admin/Clients";
    import AdminServices from "./pages/Admin/Services";
    import AdminContent from "./pages/Admin/Content";
    import AdminProfile from "./pages/Admin/Profile";
    import AdminSettings from "./pages/Admin/Settings";
    import ShopPage from "./pages/ShopPage";
    import { app, analytics } from "./lib/firebase";

    const queryClient = new QueryClient();

    const App = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      );
    };

    const AppContent = () => {
      const location = useLocation();
      const isAdminRoute = location.pathname.startsWith("/admin");

      return (
        <div className="min-h-screen flex flex-col font-sans">
          {!isAdminRoute && <Navigation />}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<AdminProjects />} />
            <Route path="/admin/clients" element={<AdminClients />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/content" element={<AdminContent />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Routes>
          {!isAdminRoute && <Footer />}
        </div>
      );
    };

    export default App;
