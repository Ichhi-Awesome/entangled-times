import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, X, Download } from "lucide-react";
import { Subscribe } from "@/components/Subscribe";
import { Button } from "@/components/ui/button";
import cover1 from "@/assets/magazine-cover-1.jpg";
import cover2 from "@/assets/magazine-cover-2.jpg";
import cover3 from "@/assets/magazine-cover-3.jpg";
import cover4 from "@/assets/magazine-cover-4.jpg";
import cover5 from "@/assets/magazine-cover-5.jpg";
import cover6 from "@/assets/magazine-cover-6.jpg";
import cover7 from "@/assets/magazine-cover-7.jpg";

const magazines = [
  {
    id: 1,
    title: "Electricity",
    issue: "Issue 1",
    date: "March 2025",
    description: "Discover how electricity works!",
    cover: cover1,
    featured: true,
    pdfUrl: "/issue-1.pdf"
  },
  {
    id: 2,
    title: "Magnetism",
    issue: "Issue 2", 
    date: "April 2025",
    description: "Explore the magical world of magnets! Find out how magnetic fields work and why opposites attract.",
    cover: cover2,
    featured: false,
    pdfUrl: "/issue-2.pdf"
  },
  {
    id: 3,
    title: "Light",
    issue: "Issue 3",
    date: "June 2025", 
    description: "Uncover the secrets of light! Learn about colors, shadows, reflection, and how we see the world around us.",
    cover: cover3,
    featured: false,
    pdfUrl: "/issue-3.pdf"
  },
  {
    id: 4,
    title: "Motion & Mechanics",
    issue: "Issue 4",
    date: "August 2025",
    description: "Discover how things push, pull, and roll in our everyday world.",
    cover: cover4,
    featured: false,
    pdfUrl: "/issue-4.pdf"
  },
  {
    id: 5,
    title: "Sound",
    issue: "Issue 5",
    date: "September 2025",
    description: "Listen up! Explore the science of sound waves, vibrations, music, and how our ears perceive the world around us.",
    cover: cover5,
    featured: false,
    pdfUrl: "/issue-5.pdf"
  },
  {
    id: 6,
    title: "Astrophysics",
    issue: "Issue 6",
    date: "December 2025",
    description: "Journey through the cosmos! Discover stars, galaxies, black holes, and the mysteries of our vast universe.",
    cover: cover6,
    featured: false,
    pdfUrl: "/issue-6.pdf"
  },
  {
    id: 7,
    title: "Fluids",
    issue: "December 7",
    date: "Jan 2026",
    description: "Learn how liquids and gases flow, from ocean currents to airplane wings.",
    cover: cover7,
    featured: false,
    pdfUrl: "/issue-7.pdf"
  }
];

const Magazines = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<typeof magazines[0] | null>(null);

  const handleMagazineClick = (magazine: typeof magazines[0]) => {
    setSelectedMagazine(magazine);
  };

  const closePdfViewer = () => {
    setSelectedMagazine(null);
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

      {/* PDF Viewer Modal */}
      {selectedMagazine && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h2 className="text-xl font-bold text-primary">{selectedMagazine.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedMagazine.issue} • {selectedMagazine.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(selectedMagazine.pdfUrl, '_blank')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closePdfViewer}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* PDF Embed */}
            <div className="flex-1 bg-muted">
              <iframe
                src={selectedMagazine.pdfUrl}
                className="w-full h-full"
                title={selectedMagazine.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magazines;
