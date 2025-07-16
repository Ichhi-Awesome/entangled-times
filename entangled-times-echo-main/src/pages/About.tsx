import { Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Placeholder team members - you can easily update these
  const teamMembers = [
    {
      id: 1,
      name: "Ishaan Kapoor",
      role: "Co-Founder & Physics Editor",
      bio: "Add your bio here. Passionate about quantum mechanics and theoretical physics. Currently studying [your field] at [your university].",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      github: "https://github.com/yourusername",
      linkedin: "https://www.linkedin.com/in/ishaan-p-kapoor/",
      email: "your.email@example.com"
    },
    {
      id: 2,
      name: "Co-Founder Name",
      role: "Co-Founder & Content Director",
      bio: "Add co-founder bio here. Dedicated to making complex physics concepts accessible to all students. Specializes in [area of expertise].",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      github: "https://github.com/cofounder",
      linkedin: "https://linkedin.com/in/cofounder",
      email: "cofounder.email@example.com"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-black">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
            We are passionate physics students dedicated to making complex scientific concepts 
            accessible and engaging for fellow students around the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Entangled Times, we believe that physics shouldn't be intimidating. Our mission is to bridge 
              the gap between complex scientific theories and student understanding through interactive content, 
              engaging narratives, and hands-on learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Student-Centered</h3>
                <p className="text-muted-foreground">
                  Created by students, for students. We understand the challenges of learning physics 
                  and design our content to address them directly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  We combine visual storytelling with interactive quizzes and challenges 
                  to make learning physics an engaging experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Accessible Science</h3>
                <p className="text-muted-foreground">
                  Complex doesn't have to mean complicated. We break down advanced topics 
                  into digestible, understandable pieces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-black-deep">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Entangled Times, working to make physics 
              education more engaging and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                    />
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Want to Contribute?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate physics students to join our team. 
              Whether you're interested in writing, design, or interactive content creation, 
              we'd love to hear from you.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-gold hover:shadow-gold text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
