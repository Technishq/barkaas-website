import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every dish is crafted with love and dedication to preserve authentic Arabian traditions.",
  },
  {
    icon: Leaf,
    title: "Quality",
    description: "We source only the finest ingredients, from premium spices to fresh local produce.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our commitment to exceptional service and culinary mastery defines every experience.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-pattern-arabesque">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4">
            About Barkaas
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of Arabian hospitality and culinary excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Al Qasr Restaurant Interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Journey Through <span className="text-gradient-gold">Generations</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Al Qasr began as a vision to bring the authentic flavors
                  of Arabian cuisine to discerning diners. Our founder, Chef Ahmed Al-Rashid,
                  drew inspiration from the grand palaces of the Middle East, where hospitality
                  and culinary artistry were celebrated as sacred traditions.
                </p>
                <p>
                  Today, Al Qasr stands as a testament to that vision—a place where ancient
                  recipes meet modern elegance. Our kitchen is led by a team of passionate
                  chefs who have trained across the Arabian Peninsula, each bringing their
                  unique expertise to create dishes that honor our heritage.
                </p>
                <p>
                  From the intricate geometric patterns adorning our walls to the aromatic
                  spices that fill our kitchen, every detail at Al Qasr tells a story of
                  Arabia's rich culinary history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-gold/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-burgundy/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-gold/30 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl font-heading italic text-foreground mb-6">
              We don't just serve food; we serve memories. Every meal at Al Qasr
              is a celebration of Arabian heritage and hospitality.
            </blockquote>
            <cite className="text-gold font-medium not-italic">
              — Chef Ahmed Al-Rashid, Founder
            </cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Experience Al Qasr
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us for an unforgettable dining experience and discover why
            Al Qasr has become a beloved destination for lovers of Arabian cuisine.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/book">
              Reserve Your Table
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
