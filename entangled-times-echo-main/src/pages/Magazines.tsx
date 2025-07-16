import { useState } from "react";
import { ArrowRight, FileText, PlayCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Sample magazine data - you can easily add more here
const magazines = [
  {
    id: 1,
    title: "Quantum Entanglement Explained",
    description: "Explore the mysterious world of quantum entanglement and its implications for our understanding of reality.",
    issue: "Issue #1",
    date: "March 2024",
    pdfUrl: "/sample-magazine-1.pdf", // You'll replace with actual PDF URLs
    quizUrl: "/quiz/quantum-entanglement", // You'll replace with actual quiz URLs
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "The Standard Model Simplified",
    description: "A comprehensive yet accessible guide to particle physics and the fundamental forces of nature.",
    issue: "Issue #2",
    date: "February 2024",
    pdfUrl: "/sample-magazine-2.pdf",
    quizUrl: "/quiz/standard-model",
    coverImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Black Holes and Spacetime",
    description: "Journey into the cosmic giants that bend spacetime and challenge our understanding of physics.",
    issue: "Issue #3",
    date: "January 2024",
    pdfUrl: "/sample-magazine-3.pdf",
    quizUrl: "/quiz/black-holes",
    coverImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop"
  }
];

const Magazines = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<typeof magazines[0] | null>(null);
  const [showViewer, setShowViewer] = useState(false);

  const openMagazine = (magazine: typeof magazines[0]) => {
    setSelectedMagazine(magazine);
    setShowViewer(true);
  };

  const closeViewer = () => {
    setShowViewer(false);
    setSelectedMagazine(null);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 animate-fade-in">
            Our Magazines
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover our collection of physics magazines, each featuring deep dives into fascinating topics 
            with interactive quizzes to test your understanding.
          </p>
        </div>
      </section>

      {/* Magazines Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazines.map((magazine) => (
              <Card 
                key={magazine.id} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group cursor-pointer overflow-hidden"
                onClick={() => openMagazine(magazine)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={magazine.coverImage}
                    alt={magazine.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-primary font-medium">{magazine.issue}</span>
                    <span className="text-sm text-muted-foreground">{magazine.date}</span>
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {magazine.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {magazine.description}
                  </p>
                  <div className="flex items-center text-primary group-hover:text-gold-light transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Click to read</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add More Magazines Placeholder */}
          <Card className="mt-8 bg-card/50 border-dashed border-2 border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">More Issues Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're working on exciting new content covering topics like string theory, 
                cosmology, and experimental physics. Stay tuned!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Magazine Viewer Dialog */}
      <Dialog open={showViewer} onOpenChange={setShowViewer}>
        <DialogContent className="max-w-7xl h-[90vh] bg-background border-border">
          <DialogHeader className="flex-row items-center justify-between space-y-0 pb-4">
            <DialogTitle className="text-2xl font-serif text-foreground">
              {selectedMagazine?.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeViewer}
              className="hover:bg-secondary"
            >
              <X className="w-4 h-4" />
            </Button>
          </DialogHeader>
          
          <div className="flex-1 flex gap-6">
            {/* PDF Viewer Area */}
            <div className="flex-1 bg-black-soft rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">PDF Viewer</h3>
                <p className="text-muted-foreground mb-6">
                  PDF viewer will be embedded here. For now, this is a placeholder.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Sidebar with Quiz */}
            <div className="w-80 space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <PlayCircle className="w-5 h-5 mr-2 text-primary" />
                    Interactive Quiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Test your understanding of the concepts covered in this magazine with our interactive quiz.
                  </p>
                  <Button 
                    className="w-full bg-gradient-gold hover:shadow-gold"
                    onClick={() => {
                      // Here you'll add logic to navigate to the quiz
                      console.log(`Opening quiz: ${selectedMagazine?.quizUrl}`);
                    }}
                  >
                    Start Quiz
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Magazine Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">Issue:</span>
                    <p className="text-foreground font-medium">{selectedMagazine?.issue}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Published:</span>
                    <p className="text-foreground font-medium">{selectedMagazine?.date}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Topic:</span>
                    <p className="text-foreground font-medium">{selectedMagazine?.title}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Magazines;