import { Award, Code, Globe, Database } from "lucide-react";
    import { Card, CardContent } from "./ui/card";
    import { Progress } from "./ui/progress";
    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
    import { cn } from "@/lib/utils";
    import * as React from "react";

    const About = () => {
      const skills = [
        {
          icon: Code,
          title: "Web Development",
          description: "Creating responsive and performant web applications",
        },
        {
          icon: Database,
          title: "SaaS Solutions",
          description: "Building scalable software as a service platforms",
        },
        {
          icon: Award,
          title: "SEO Consulting",
          description: "Optimizing websites for search engine visibility",
        },
        {
          icon: Globe,
          title: "Translation Services",
          description: "Professional language translation and localization",
        },
      ];

      const skillChartData = {
        "Front-End": [
          { name: "HTML", level: 80, color: "green", icon: "html" },
          { name: "CSS", level: 75, color: "green", icon: "css" },
          { name: "JavaScript", level: 70, color: "yellow", icon: "js" },
          { name: "React", level: 65, color: "yellow", icon: "react" },
          { name: "Tailwind CSS", level: 85, color: "green", icon: "tailwind" },
          { name: "Bootstrap", level: 60, color: "yellow", icon: "bootstrap" },
          { name: "jQuery", level: 40, color: "red", icon: "jquery" },
        ],
        "Back-End": [
          { name: "Node.js", level: 60, color: "yellow", icon: "node" },
          { name: "Express.js", level: 50, color: "yellow", icon: "express" },
          { name: "MongoDB", level: 65, color: "yellow", icon: "mongodb" },
          { name: "MySQL", level: 45, color: "red", icon: "mysql" },
        ],
        "Version Control": [
          { name: "Git", level: 90, color: "green", icon: "git" },
          { name: "GitHub", level: 85, color: "green", icon: "github" },
        ],
        "Design Tools": [
          { name: "Figma", level: 70, color: "yellow", icon: "figma" },
          { name: "Adobe XD", level: 60, color: "yellow", icon: "adobexd" },
          { name: "Photoshop", level: 50, color: "red", icon: "photoshop" },
        ],
        "Other Skills": [
          { name: "SEO", level: 70, color: "yellow", icon: "seo" },
          { name: "Web Performance Optimization", level: 65, color: "yellow", icon: "performance" },
          { name: "Cross-browser compatibility", level: 75, color: "green", icon: "browser" },
          { name: "Responsive Web Design", level: 85, color: "green", icon: "responsive" },
        ],
      };

      const getIcon = (iconName: string) => {
        switch (iconName) {
          case "html": return <span className="text-orange-500">HTML</span>;
          case "css": return <span className="text-blue-500">CSS</span>;
          case "js": return <span className="text-yellow-500">JS</span>;
          case "react": return <span className="text-blue-400">React</span>;
          case "tailwind": return <span className="text-sky-400">TW</span>;
          case "bootstrap": return <span className="text-purple-500">BS</span>;
          case "jquery": return <span className="text-blue-600">jQuery</span>;
          case "node": return <span className="text-green-500">Node</span>;
          case "express": return <span className="text-gray-500">Express</span>;
          case "mongodb": return <span className="text-green-600">MongoDB</span>;
          case "mysql": return <span className="text-blue-700">MySQL</span>;
          case "git": return <span className="text-orange-600">Git</span>;
          case "github": return <span className="text-gray-700">GitHub</span>;
          case "figma": return <span className="text-pink-500">Figma</span>;
          case "adobexd": return <span className="text-purple-600">XD</span>;
          case "photoshop": return <span className="text-blue-500">Ps</span>;
          case "seo": return <span className="text-green-800">SEO</span>;
          case "performance": return <span className="text-purple-800">Perf</span>;
          case "browser": return <span className="text-blue-900">Browser</span>;
          case "responsive": return <span className="text-sky-900">Resp</span>;
          default: return null;
        }
      };

      return (
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.title}
                  className="fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <skill.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 space-y-8">
              {Object.entries(skillChartData).map(([category, skills]) => (
                <div key={category} className="fade-up">
                  <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getIcon(skill.icon)}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="relative w-3/4 md:w-1/2 flex items-center gap-2">
                              <Progress
                                value={skill.level}
                                className="h-2 flex-1"
                                style={{
                                  "--progress-color":
                                    skill.color === "green"
                                      ? "green"
                                      : skill.color === "yellow"
                                      ? "yellow"
                                      : "red",
                                } as React.CSSProperties}
                              />
                              <span className="font-medium text-sm tabular-nums">{skill.level}%</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            Proficiency: {skill.level}%
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default About;
