import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye } from "lucide-react";
import { Subscribe } from "@/components/Subscribe";
import cover1 from "@/assets/magazine-cover-1.jpg";
import cover2 from "@/assets/magazine-cover-2.jpg";
import cover3 from "@/assets/magazine-cover-3.jpg";
import cover4 from "@/assets/magazine-cover-4.jpg";

const magazines = [
  {
    id: 1,
    title: "Amazing Electricity",
    issue: "Issue 1",
    date: "January 2025",
    description: "Discover how electricity works! Learn about circuits, batteries, and lightning in fun and easy ways.",
    cover: cover1,
    featured: true
  },
  {
    id: 2,
    title: "Magnificent Magnetism",
    issue: "Issue 2", 
    date: "February 2025",
    description: "Explore the magical world of magnets! Find out how magnetic fields work and why opposites attract.",
    cover: cover2,
    featured: false
  },
  {
    id: 3,
    title: "Wonderful Light",
    issue: "Issue 3",
    date: "March 2025", 
    description: "Uncover the secrets of light! Learn about colors, shadows, reflection, and how we see the world around us.",
    cover: cover3,
    featured: false
  },
  {
    id: 4,
    title: "Motion & Mechanics",
    issue: "Issue 4",
    date: "April 2025",
    description: "Get moving with forces and motion! Discover how things push, pull, and roll in our everyday world.",
    cover: cover4,
    featured: false
  }
];

const Magazines = () => {
  const handleMagazineClick = (magazine: typeof magazines[0]) => {
    // Open the PDF in a new tab
    window.open(`/issue-${magazine.id}.pdf`, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Magazine Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of physics magazines, each crafted to make complex concepts accessible and engaging.
          </p>
          <Subscribe size="lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((magazine, index) => (
            <Card 
              key={magazine.id} 
              className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              onClick={() => handleMagazineClick(magazine)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={magazine.cover} 
                  alt={magazine.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-white font-medium">Click to Read</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{magazine.date}</span>
                  <Badge variant="outline" className="ml-auto">
                    {magazine.issue}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {magazine.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {magazine.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-md mx-auto bg-gradient-subtle border-dashed border-2 border-primary/30">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Issues Coming Soon</h3>
              <p className="text-muted-foreground text-sm">
                We're working on new exciting issues covering relativity, particle physics, and more!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Magazines;
