import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-black">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-black-soft to-black-deep opacity-90" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-primary mb-8 animate-fade-in animate-glow">
            Entangled Times
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            A student-led physics magazine exploring the quantum realm, theoretical breakthroughs, 
            and the mysteries that shape our universe. Where curiosity meets discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-gold hover:shadow-gold text-lg px-8 py-4 transition-all duration-300"
            >
              <Link to="/magazines">
                Explore Magazines
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              <Link to="/about">
                Meet the Team
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" style={{top: '20%', left: '10%', animationDelay: '0s'}} />
          <div className="absolute w-1 h-1 bg-gold-light rounded-full animate-ping" style={{top: '60%', left: '80%', animationDelay: '2s'}} />
          <div className="absolute w-3 h-3 bg-primary/50 rounded-full animate-ping" style={{top: '80%', left: '20%', animationDelay: '4s'}} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-16">
            What Makes Us <span className="text-primary">Unique</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Interactive Magazines</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dive deep into physics concepts with our beautifully designed magazines, 
                  complete with interactive quizzes and engaging visual content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quantum Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Test your understanding with interactive quizzes and challenges 
                  that make complex physics concepts accessible and fun.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Student-Led</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Created by passionate physics students, for students. 
                  We bring fresh perspectives and relatable explanations to complex topics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-black-deep">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Ready to Explore the <span className="text-primary">Quantum World</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join us on a journey through the fascinating world of physics. 
            From quantum mechanics to cosmology, we make complex concepts accessible and exciting.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold text-lg px-12 py-4"
          >
            <Link to="/magazines">
              Start Reading Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;