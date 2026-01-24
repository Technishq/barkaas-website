import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string; category: string; subcategory?: string } | null>(null);
  const [galleryImages, setGalleryImages] = useState<{ id: number; src: string; alt: string; category: string; subcategory?: string }[]>([]);

  // Define your food images with categories
  const foodImageConfig: { fileName: string; name: string; subcategory: string }[] = [
    // Mandi
    { fileName: "0X4A9932", name: "", subcategory: "Mandi" },
    { fileName: "SMP_3896", name: "", subcategory: "Mandi" },
    { fileName: "SMP_3900", name: "", subcategory: "Mandi" },
    { fileName: "SMP_3955", name: "", subcategory: "Mandi" },
    { fileName: "SMP_4117", name: "", subcategory: "Mandi" },
    { fileName: "SMP_4249", name: "", subcategory: "Mandi" },
    { fileName: "SMP_4261", name: "", subcategory: "Mandi" },
    // Biryanis
    { fileName: "SMP_3530", name: "", subcategory: "Biryani" },
    { fileName: "SMP_3994", name: "", subcategory: "Biryani" },
    // Starters
    { fileName: "010A1851", name: "", subcategory: "Starter" },
    { fileName: "010A1858", name: "", subcategory: "Starter" },
    { fileName: "SMP_3392", name: "", subcategory: "Starter" },
    { fileName: "SMP_3613", name: "", subcategory: "Starter" },
    { fileName: "SMP_3738", name: "", subcategory: "Starter" },
    { fileName: "SMP_3778", name: "", subcategory: "Starter" },
    { fileName: "SMP_4008", name: "", subcategory: "Starter" },
    { fileName: "SMP_4021", name: "", subcategory: "Starter" },
    { fileName: "SMP_4239", name: "", subcategory: "Starter" },
    { fileName: "SMP_4288", name: "", subcategory: "Starter" },
    // Desserts
    { fileName: "010A1765", name: "", subcategory: "Dessert" },
    { fileName: "010A1828", name: "", subcategory: "Dessert" },
    { fileName: "SMP_3558", name: "", subcategory: "Dessert" },
    { fileName: "SMP_3658", name: "", subcategory: "Dessert" },
    { fileName: "SMP_3687", name: "", subcategory: "Dessert" },
    { fileName: "SMP_4283", name: "", subcategory: "Dessert" },
    // Drinks
    { fileName: "010A1576", name: "", subcategory: "Drink" },
    { fileName: "010A1647", name: "", subcategory: "Drink" },
    { fileName: "010A1682", name: "", subcategory: "Drink" },
  ];

  useEffect(() => {
    const ambienceModules = import.meta.glob<{ default: string }>('/src/assets/ambience/*.{jpg,jpeg,png,webp}', { eager: true });
    const foodModules = import.meta.glob<{ default: string }>('/src/assets/food/*.{jpg,jpeg,png,webp}', { eager: true });

    const ambienceImages = Object.entries(ambienceModules).map(([path, mod], index) => {
      const fileName = path.split('/').pop()?.split('.')[0] || `ambience-${index}`;
      return {
        id: index + 1,
        src: mod.default, 
        alt: `${fileName.charAt(0).toUpperCase() + fileName.slice(1)} - Restaurant Interior`,
        category: "Ambiance" as const
      };
    });

    const foodImages = Object.entries(foodModules).map(([path, mod], index) => {
      const fileName = path.split('/').pop()?.split('.')[0] || `food-${index}`;
      const config = foodImageConfig.find(item => item.fileName === fileName);
      
      return {
        id: ambienceImages.length + index + 1,
        src: mod.default, 
        alt: config?.name || `${fileName.charAt(0).toUpperCase() + fileName.slice(1)} Dish`,
        category: "Food" as const,
        subcategory: config?.subcategory,
        fileName // Store filename for sorting
      };
    });

    // Sort food images based on foodImageConfig order
    const sortedFoodImages = foodImages.sort((a, b) => {
      const aIndex = foodImageConfig.findIndex(item => item.fileName === a.fileName);
      const bIndex = foodImageConfig.findIndex(item => item.fileName === b.fileName);
      
      // If not in config list, put at end
      const aOrder = aIndex === -1 ? 9999 : aIndex;
      const bOrder = bIndex === -1 ? 9999 : bIndex;
      
      return aOrder - bOrder;
    });

    setGalleryImages([...ambienceImages, ...sortedFoodImages]);
  }, []);

  const categories = ["All", "Food", "Ambiance"];

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-pattern-arabesque">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Visual Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4">
            Our Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of our restaurant, from our elegant interiors
            to our exquisite culinary creations.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "group relative overflow-hidden rounded-lg cursor-pointer",
                  index === 0 && "sm:col-span-2 sm:row-span-2"
                )}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-110",
                    index === 0 ? "h-full min-h-[400px]" : "aspect-square"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-medium">{image.alt}</p>
                  <p className="text-gold text-sm">{image.subcategory || image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
