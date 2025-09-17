import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs with Node.js and database integration"
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description: "End-to-end web development from concept to deployment with seamless integration"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and exceptional user experience"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love turning complex problems into simple, beautiful, and intuitive solutions. 
            My goal is to create digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group p-6 text-center hover:shadow-accent transition-all duration-300 animate-slide-up border-0 bg-card/50 backdrop-blur-sm hover:bg-accent/10"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-gradient-accent">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;