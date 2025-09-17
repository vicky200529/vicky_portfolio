import { Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://www.instagram.com/_vicky905/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajdeep-nayek-a492b3274/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-accent hover:shadow-accent transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-accent-foreground" />
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Rajdeep Nayek
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Rajdeep Nayek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;