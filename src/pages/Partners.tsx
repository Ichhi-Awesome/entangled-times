import partnerThinkSharp from "@/assets/partner-thinksharp.png";
import partnerKshamata from "@/assets/partner-kshamata.png";

const partners = [
  {
    name: "ThinkSharp Foundation",
    logo: partnerThinkSharp,
  },
  {
    name: "Kshamata",
    logo: partnerKshamata,
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to collaborate with these amazing organizations who share our vision for advancing physics education and research.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-32 w-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-foreground text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Interested in Partnering With Us?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking for organizations that share our passion for physics and education. Get in touch to explore collaboration opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
