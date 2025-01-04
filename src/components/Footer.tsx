import { Github, Linkedin, Mail, Twitter, Instagram, Facebook,  } from "lucide-react";

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-secondary/50 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © {currentYear} Saugat Karki. All Rights Reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
