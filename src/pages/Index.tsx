import Hero from "@/components/Hero";
    import About from "@/components/About";
    import Services from "@/components/Services";
    import Portfolio from "@/components/Portfolio";
    import Contact from "@/components/Contact";
    import { Award, Code, Globe, Database } from "lucide-react";

    const Index = () => {
      return (
        <main className="overflow-hidden">
          <Hero />
          <div className="section-padding bg-secondary/50">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
                About Me
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="fade-up"
                  style={{ animationDelay: `${0 * 0.2}s` }}
                >
                  <div className="p-6">
                    <Award className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Awards</h3>
                    <p className="text-muted-foreground">
                      Recognitions for excellence in web development
                    </p>
                  </div>
                </div>
                <div
                  className="fade-up"
                  style={{ animationDelay: `${1 * 0.2}s` }}
                >
                  <div className="p-6">
                    <Code className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                    <p className="text-muted-foreground">
                      Creating responsive and performant web applications
                    </p>
                  </div>
                </div>
                <div
                  className="fade-up"
                  style={{ animationDelay: `${2 * 0.2}s` }}
                >
                  <div className="p-6">
                    <Database className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">SaaS Solutions</h3>
                    <p className="text-muted-foreground">
                      Building scalable software as a service platforms
                    </p>
                  </div>
                </div>
                <div
                  className="fade-up"
                  style={{ animationDelay: `${3 * 0.2}s` }}
                >
                  <div className="p-6">
                    <Globe className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">
                      Translation Services
                    </h3>
                    <p className="text-muted-foreground">
                      Professional language translation and localization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Services />
          <Portfolio />
          <Contact />
        </main>
      );
    };

    export default Index;
