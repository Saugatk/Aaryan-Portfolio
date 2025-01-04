import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

    const AdminLogin = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
          localStorage.setItem("adminLoggedIn", "true");
          navigate("/admin");
        } else {
          alert("Invalid credentials");
        }
      };

      return (
        <div className="flex items-center justify-center h-screen">
          <Card className="w-96">
            <CardHeader>
              <CardTitle className="text-center">Admin Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      );
    };

    export default AdminLogin;
