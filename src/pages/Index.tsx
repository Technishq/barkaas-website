import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Utensils, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import mezzeImage from "@/assets/food-mezze.jpg";
import lambImage from "@/assets/food-lamb.jpg";
import riceImage from "@/assets/food-rice.jpg";

const features = [
  {
    icon: Utensils,
    title: "Authentic Cuisine",
    description: "Traditional recipes passed down through generations, prepared with the finest ingredients.",
  },
  {
    icon: Star,
    title: "Award Winning",
    description: "Recognized for culinary excellence and exceptional dining experiences.",
  },
  {
    icon: Clock,
    title: "Private Events",
    description: "Host your special occasions in our elegant private dining spaces.",
  },
];

const featuredDishes = [
  { name: "Mezze Platter", description: "A selection of traditional appetizers", image: mezzeImage },
  { name: "Lamb Chops", description: "Grilled to perfection with herbs", image: lambImage },
  { name: "Saffron Rice", description: "Aromatic basmati with almonds", image: riceImage },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <p className="text-gold font-medium tracking-[0.3em] uppercase mb-4">
              Welcome to
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-gradient-gold mb-6">
              Barkaas
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
              A Journey Through Arabian Flavors
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the rich traditions of Middle Eastern cuisine in an atmosphere
              of timeless elegance. Where every dish tells a story of heritage and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/book">
                  Reserve Your Table
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="gold-outline" size="xl" asChild>
                <Link to="/menu">Explore Menu</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-pattern-arabesque">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              The Barkaas Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Our Specialties
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Signature Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-burgundy/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Ready for an Unforgettable Dining Experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join us for a culinary journey through the rich flavors of Arabia.
              Reserve your table today and create memories that last a lifetime.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/book">
                Book Your Table Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
