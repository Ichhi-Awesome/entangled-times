import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black-deep border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Entangled Times
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A student-led physics magazine exploring the fascinating world of quantum mechanics, 
              theoretical physics, and cutting-edge scientific discoveries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/magazines" className="text-muted-foreground hover:text-primary transition-colors">
                  Latest Magazines
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <p className="text-muted-foreground">
              Have questions or want to contribute? We'd love to hear from you!
            </p>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-border hover:border-primary hover:bg-primary/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-border hover:border-primary hover:bg-primary/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Entangled Times. All rights reserved. | Student Physics Magazine Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;