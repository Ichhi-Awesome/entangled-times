import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Subscribe } from "@/components/Subscribe";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-fade-in">
            Entangled Times
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Making science fun and accessible for young minds! Discover amazing scientific concepts 
            through our beautifully illustrated magazine designed just for curious learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/magazines">
              <Button size="lg" className="group shadow-gold hover:shadow-elegant">
                Explore Magazines
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Subscribe variant="outline" size="lg" />
            <Link to="/about">
              <Button variant="ghost" size="lg" className="hover:bg-primary/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Why Entangled Times?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Physics Made Relatable</h3>
                <p className="text-muted-foreground">
                  We simplify complex physics ideas into engaging, visual stories that resonate with curious learners of all backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Student-Led, Impact-Driven</h3>
                <p className="text-muted-foreground">
                  Created and curated by passionate students, Entangled Times empowers youth voices to lead the way in science communication.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">For the Curious, Not Just the Experts</h3>
                <p className="text-muted-foreground">
                  Whether you're a budding scientist or just fascinated by how the universe works, our content is designed to spark and sustain curiosity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Ready to Discover Science?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join young scientists everywhere learning about the amazing world of science through our engaging issues!
          </p>
          <Link to="/magazines">
            <Button size="lg" className="shadow-gold hover:shadow-elegant">
              Start Reading Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;