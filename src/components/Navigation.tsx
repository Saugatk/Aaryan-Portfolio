import { useState, useEffect } from "react";
    import { Link, useLocation, useNavigate } from "react-router-dom";
    import { Menu, X } from "lucide-react";
    import { Button } from "./ui/button";

    const Navigation = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const location = useLocation();
      const navigate = useNavigate();

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Shop", path: "/shop" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
      ];

      const handleHireMeClick = () => {
        navigate("/contact");
      };

      return (
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "glass py-4" : "py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              Saugat Karki
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={handleHireMeClick}>Hire Me</Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 glass p-6 md:hidden">
                <div className="flex flex-col space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`transition-colors hover:text-primary ${
                        location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button onClick={handleHireMeClick} className="w-full">Hire Me</Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };

    export default Navigation;
