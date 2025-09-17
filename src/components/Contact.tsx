import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities and interesting projects. 
                Whether you need a full-stack solution or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="p-4 hover:shadow-glow transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gmail</h4>
                    <p className="text-muted-foreground">rajnayek2005@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 hover:shadow-glow transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-accent">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">AGARPARA,KOLKATA,INDIA</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-4 hover:shadow-glow transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 hover:shadow-accent transition-all duration-300 animate-slide-up border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    required 
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;