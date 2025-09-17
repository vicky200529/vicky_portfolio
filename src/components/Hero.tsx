import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Rajdeep Nayek
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating beautiful, functional web applications using modern technologies. 
            Specializing in MERN stack development with a focus on user experience and performance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="glow" size="lg" className="animate-float" >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.instagram.com/_vicky905/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <Button variant="social" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
            </a>
            <a 
              href="https://www.linkedin.com/in/rajdeep-nayek-a492b3274/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
            >
              <Button variant="social" size="icon" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-accent rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse-glow" />
    </section>
  );
};

export default Hero;