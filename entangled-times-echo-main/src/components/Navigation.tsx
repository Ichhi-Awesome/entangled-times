import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Magazines", path: "/magazines" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-bold text-primary hover:text-gold-light transition-colors duration-300"
          >
            Entangled Times
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 font-medium transition-all duration-300",
                  "hover:text-primary",
                  "after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0",
                  "after:bg-primary after:origin-bottom-right after:scale-x-0",
                  "after:transition-transform after:duration-300",
                  "hover:after:scale-x-100 hover:after:origin-bottom-left",
                  location.pathname === item.path
                    ? "text-primary after:scale-x-100"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;