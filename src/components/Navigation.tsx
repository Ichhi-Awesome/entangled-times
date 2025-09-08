import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent text-center sm:text-left">
            Entangled Times
          </Link>
          
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-6 flex-wrap">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300 hover:shadow-gold text-xs sm:text-sm"
              >
                Home
              </Button>
            </Link>
            <Link to="/magazines">
              <Button 
                variant={isActive("/magazines") ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300 hover:shadow-gold text-xs sm:text-sm"
              >
                Magazines
              </Button>
            </Link>
            <Link to="/experiments">
              <Button 
                variant={isActive("/experiments") ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300 hover:shadow-gold text-xs sm:text-sm"
              >
                Experiments
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
                className="transition-all duration-300 hover:shadow-gold text-xs sm:text-sm"
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
