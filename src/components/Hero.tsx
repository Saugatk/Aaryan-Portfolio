import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up">
            Crafting Digital
            <br />
            Experiences with Purpose
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 fade-up" style={{ animationDelay: "0.2s" }}>
            Web Developer & Digital Consultant specializing in creating innovative solutions
            that drive business growth and user engagement.
          </p>
          <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg">
              <Link to="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
