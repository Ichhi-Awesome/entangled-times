import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Lightbulb, Globe, Mail, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ishaan Kapoor",
    role: "Co-Editor",
    specialty: "Physics",
    initials: "IK",
    bio: "Leading quantum researcher with 15+ years in theoretical physics.",
    email: "sarah.chen@entangledtimes.com",
    linkedin: "https://linkedin.com/in/sarah-chen-physics"
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "Science Director",
    specialty: "Cosmology",
    initials: "MR", 
    bio: "Astrophysicist specializing in black holes and cosmic phenomena.",
    email: "michael.rodriguez@entangledtimes.com",
    linkedin: "https://linkedin.com/in/michael-rodriguez-cosmology"
  }
];

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Clarity over Complexity",
    description: "We value simplicity without oversimplifying — making tough concepts digestible without losing depth."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion-Driven",
    description: "Fueled by love for science and learning, we're a student-led project built on enthusiasm, not credentials."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Creative Learning",
    description: "We use storytelling, visuals, and real-world applications to make physics more than just numbers on a page."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Equity Through Access",
    description: "We believe quality science education shouldn't depend on where you live — we work to reach underrepresented learners."
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            About Entangled Times
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of physicists, researchers, and science communicators dedicated to making 
            the fascinating world of physics accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Mission</h2>
              <div className="max-w-4xl mx-auto text-lg text-muted-foreground text-center leading-relaxed space-y-4">
                <p>
                  At Entangled Times, we believe physics isn't just for labs and textbooks — it's for anyone who's curious about the world around them. From motion and energy to light and electricity, we break down complex ideas into clear, engaging content that's easy to relate to.
                </p>
                <p>
                  We aim to be a bridge between students and scientists, between groundbreaking research and everyday understanding — all while nurturing a passion for discovery in classrooms, communities, and beyond.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-gold text-black text-lg font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-primary mb-3">{member.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      title={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
