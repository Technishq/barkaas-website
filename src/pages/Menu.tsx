import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import mezzeImage from "@/assets/food-mezze.jpg";
import lambImage from "@/assets/food-lamb.jpg";
import riceImage from "@/assets/food-rice.jpg";
import dessertImage from "@/assets/food-dessert.jpg";

const categories = ["All", "Appetizers", "Main Courses", "Rice & Grains", "Desserts", "Beverages"];

const menuItems = [
  {
    id: 1,
    name: "Mezze Platter",
    description: "Traditional hummus, baba ganoush, falafel, and fresh pita bread",
    price: 45,
    category: "Appetizers",
    image: mezzeImage,
  },
  {
    id: 2,
    name: "Lamb Shish Kebab",
    description: "Tender lamb cubes marinated in aromatic spices, grilled to perfection",
    price: 85,
    category: "Main Courses",
    image: lambImage,
  },
  {
    id: 3,
    name: "Chicken Shawarma",
    description: "Slow-roasted chicken with garlic sauce and pickled vegetables",
    price: 65,
    category: "Main Courses",
    image: lambImage,
  },
  {
    id: 4,
    name: "Saffron Rice",
    description: "Aromatic basmati rice with saffron, almonds, and raisins",
    price: 35,
    category: "Rice & Grains",
    image: riceImage,
  },
  {
    id: 5,
    name: "Lamb Ouzi",
    description: "Slow-cooked lamb shoulder over spiced rice with nuts",
    price: 120,
    category: "Main Courses",
    image: lambImage,
  },
  {
    id: 6,
    name: "Kunafa",
    description: "Sweet cheese pastry with rose water syrup and pistachios",
    price: 40,
    category: "Desserts",
    image: dessertImage,
  },
  {
    id: 7,
    name: "Fattoush Salad",
    description: "Fresh garden vegetables with sumac and crispy pita",
    price: 32,
    category: "Appetizers",
    image: mezzeImage,
  },
  {
    id: 8,
    name: "Arabic Coffee",
    description: "Traditional cardamom-spiced coffee served with dates",
    price: 18,
    category: "Beverages",
  },
  {
    id: 9,
    name: "Baklava Selection",
    description: "Assortment of layered phyllo pastries with nuts and honey",
    price: 35,
    category: "Desserts",
    image: dessertImage,
  },
  {
    id: 10,
    name: "Mansaf",
    description: "Traditional Jordanian lamb dish with jameed yogurt sauce",
    price: 95,
    category: "Main Courses",
    image: lambImage,
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-pattern-arabesque">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Discover
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully curated selection of authentic Arabian dishes, prepared with
            the finest ingredients and traditional cooking methods.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-gold/20 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-card border border-border rounded-lg p-4 hover:border-gold/50 transition-all duration-300"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-gold font-semibold shrink-0">
                      AED {item.price}
                    </span>
                  </div>
                  <span className="inline-block mt-2 text-xs text-gold/70 bg-gold/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
