import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Modern e-commerce solution with integrated payment processing",
    },
    {
      title: "SaaS Dashboard",
      category: "saas",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Analytics dashboard for SaaS application",
    },
    {
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      description: "Responsive corporate website with CMS integration",
    },
    {
      title: "Language Learning App",
      category: "translation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Interactive language learning platform",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
          Portfolio
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 fade-up">
          {["all", "web", "saas", "translation"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
