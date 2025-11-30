import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS","Sass", "Redux",
      ]
    },
    {
      title: "Backend", 
      skills: [
        "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL",
        "REST APIs", "GraphQL", "JWT", "Mongoose","Prisma","Figma"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "GitHub", "Docker", "VSCode", "Linux", "npm"
      ]
    },
    {
      title: "Other Skills",
      skills: [
        "Responsive Design", "SEO", "Performance Optimization", 
        "Testing","Problem Solving", "Team Collaboration","System Design"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 hover:shadow-glow transition-all duration-300 animate-slide-up border-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
