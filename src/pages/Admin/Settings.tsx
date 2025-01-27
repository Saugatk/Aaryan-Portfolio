import { useNavigate } from "react-router-dom";
    import { Button } from "@/components/ui/button";
    import { ArrowLeft } from "lucide-react";

    const AdminSettings = () => {
      const navigate = useNavigate();
      return (
        <div className="container mx-auto p-4">
          <div className="flex items-center mb-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-3xl font-bold ml-2">Settings</h2>
          </div>
          <p>Manage your settings here.</p>
        </div>
      );
    };

    export default AdminSettings;
