import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Entangled Times
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-all duration-300 hover:shadow-gold"
              >
                Home
              </Button>
            </Link>
            <Link to="/magazines">
              <Button 
                variant={isActive("/magazines") ? "default" : "ghost"}
                className="transition-all duration-300 hover:shadow-gold"
              >
                Magazines
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "default" : "ghost"}
                className="transition-all duration-300 hover:shadow-gold"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;