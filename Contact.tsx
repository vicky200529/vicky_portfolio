import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    data.append("_subject", `Portfolio Contact: ${formData.subject}`);
    data.append("_template", "table");
    data.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rajnayek2005@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="space-y-6">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>rajnayek2005@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>West Bengal, India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}

          <Card>
            <CardContent className="p-8">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>

                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="your@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>

                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>

                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
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