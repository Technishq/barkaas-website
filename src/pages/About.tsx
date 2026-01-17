import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";
import img1 from "@/assets/about-1.png";
import img2 from "@/assets/about-2.png";
import img3 from "@/assets/food/SMP_4117.jpg";
import img4 from "@/assets/food/SMP_4249.jpg";
import img5 from "@/assets/food/SMP_4261.jpg";
import img6 from "@/assets/food/SMP_3900.jpg";
import img7 from "@/assets/food/SMP_3896.jpg";
import img9 from "@/assets/food/SMP_4160.jpg";
import img8 from "@/assets/about-3.png";

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description: "Secret recipes replicated across all locations for consistent Indo-Arabic flavors.",
  },
  {
    icon: Leaf,
    title: "Freshness",
    description: "In-house masalas crafted daily with carefully picked herbs and spices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "32 outlets, 20M+ customers yearly, 4.3 rating, awarded by Franchise India.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero with side image */}
      <section className="bg-pattern-arabesque">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left pt-16 animate-[fadeInUp_0.8s_ease-out]">
              <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2 animate-[fadeIn_1s_ease-out_0.2s_both]">
                India's Largest Indo-Arabic Chain
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
                Welcome to Barkaas
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
                Spanning over 32 cities and continuously expanding, Barkaas is a prominent name in authentic Indo-Arabic cuisine, with vibrant establishments in key cities such as Bangalore, Hyderabad, Vishakhapatnam, Kolkata, and Lucknow. Our widespread presence across the nation highlights our dedication to delivering unparalleled culinary experiences, ensuring that every corner of India can savour the true essence of our exquisite flavors. With a secret recipe that is replicated across all restaurants, Barkaas is a legendary story waiting to be experienced.
              </p>
            </div>
            {/* Right: Hero image */}
            <div className="relative group animate-[fadeInRight_1s_ease-out_0.4s_both]">
              <div className="absolute inset-0 -z-10 group-hover:opacity-100 opacity-0 transition-all duration-500" />
              <img
                src={img1}
                alt="Signature Barkaas Mandi Platter"
                className="w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Heritage */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg group animate-[fadeInLeft_0.8s_ease-out]">
              <img
                src={img2}
                alt="Barkaas Mandi Platter"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="animate-[fadeInRight_0.8s_ease-out_0.2s_both]">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Heritage
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="animate-[fadeIn_0.8s_ease-out_0.4s_both]">
                  Get lost in the tingling aroma of our traditional Mandi as you enter a world of blended
                  paradise. Immerse yourself in a dining experience where the rich legacies of Mughal and
                  Afghani cultures converge to craft a truly memorable feast.
                </p>
                <p className="animate-[fadeIn_0.8s_ease-out_0.6s_both]">
                  At Barkaas, our philosophy of "food that unites people" comes alive through an array of over
                  20 exquisite varieties of Mandi and Biryani. We invite you to gather with friends and family
                  around our generous, flavorful platters, celebrating togetherness and creating lasting
                  memories over each delectable bite. Spices dance in your palette as our deeply marinated meat
                  and fish steal the show. A tall glass of our signature falooda and you are in food heaven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Secret Masalas */}
        <section className="py-16 bg-burgundy/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                The Magic Behind the Masala
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto pt-4">
                At Barkaas, we infuse each dish with our signature blend of freshly ground, in-house masalas, crafted daily to preserve peak freshness and deliver unparalleled flavor. Each recipe is a testament to our dedication, offering a unique and exceptional taste experience that sets every bite apart.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="group p-6 rounded-xl border border-gold/75 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm transition-all duration-300 text-center hover:bg-burgundy/20 animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gold transition-colors">Mandi Masala</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">Used in our Mandi rice preparation.</p>
              </div>

              <div className="group p-6 rounded-xl border border-gold/75 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm transition-all duration-300 text-center hover:bg-burgundy/20 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gold transition-colors">Fahm Masala</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">Used in our Al Fahm and Chicken Gravy.</p>
              </div>

              <div className="group p-6 rounded-xl border border-gold/75 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm transition-all duration-300 text-center hover:bg-burgundy/20 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gold transition-colors">Mutton Masala</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">Used in our Mutton Mandi and Mutton Raan.</p>
              </div>

              <div className="group p-6 rounded-xl border border-gold/75 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm transition-all duration-300 text-center hover:bg-burgundy/20 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gold transition-colors">BBQ Masala</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">Used in the marination of all our charcoal-grilled products.</p>
              </div>
            </div>
          </div>
        </section>

    {/* Mandi Varieties */}
     <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl lg:max-w-5xl">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-4 inline-block px-6 py-3 bg-gold/10 rounded-full">
            From Yemen to India
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Authentic Mandi
          </h2>
        </div>
        
        <p className="text-muted-foreground max-w-4xl mx-auto mb-20 text-center leading-relaxed text-lg px-8 animate-[fadeIn_0.8s_ease-out_0.3s_both]">
          The word "Mandi" comes from the Arabic word 'nada', meaning dew or dewy, referring to the moist texture of the meat. The origins of this authentic dish can be traced back to Yemen while being prevalent in most areas of the Arabian Peninsula and also in Egypt and other countries. Now trending in India, this dish is a magical blend of meat, rice and a range of brilliant spices. Moist meat, our secret recipe and a forgotten tale brought back to life – you are in for a timeless treat. 
        </p>
      </div>

      {/* 2-Row Full-Width Chessboard Grid */}
      <div className="w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 max-w-none w-full">
          {/* Row 1 (6 cells) */}
          <div className="group relative h-[180px] overflow-hidden border-r border-b border-border/40 hover:border-gold/60 hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] animate-[fadeIn_0.5s_ease-out_0.1s_both]">
            <img src={img3} alt="Mandi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.15s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Murgh Mussalam Mandi</span>
          </div>
          
          <div className="group relative h-[180px] overflow-hidden border-r border-b border-border/40 hover:border-gold/60 hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] animate-[fadeIn_0.5s_ease-out_0.2s_both]">
            <img src={img4} alt="Mandi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.25s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Mutton Madfoon Mandi</span>
          </div>

          <div className="group relative h-[180px] overflow-hidden border-r border-b border-border/40 hover:border-gold/60 hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] animate-[fadeIn_0.5s_ease-out_0.3s_both]">
            <img src={img5} alt="Mandi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.35s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Raan Mandi</span>
          </div>

          {/* Row 2 (6 cells) */}
          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.4s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Kheema Mandi</span>
          </div>

          <div className="group relative h-[180px] overflow-hidden border-r border-b border-border/40 hover:border-gold/60 hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] animate-[fadeIn_0.5s_ease-out_0.45s_both]">
            <img src={img6} alt="Mandi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Fahm Mandi</span>
          </div>

          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-b border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-6 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.55s_both]">
            <span className="font-bold text-lg text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">Patyala Mandi</span>
          </div>

          <div className="group relative h-[180px] bg-card/90 backdrop-blur-sm border-r border-border/40 hover:shadow-2xl transition-all duration-400 flex items-center justify-center p-8 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out_0.6s_both]">
            <span className="font-bold text-xl text-foreground group-hover:text-gold transition-colors text-center leading-tight tracking-wide">BBQ Mandi</span>
          </div>

          <div className="group relative h-[180px] overflow-hidden border-border/40 hover:border-gold/60 hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] animate-[fadeIn_0.5s_ease-out_0.65s_both]">
            <img src={img7} alt="Mandi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>

        {/* Desserts */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeInLeft_0.8s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Desserts & Faloodas
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
             <p className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">Imagine the creaminess of an authentic falooda and the popping colours of the many textures and flavours that surround it. And now envision this rich decadent dessert but with even more exotic ingredients like tender coconut pudding, rabdi, kulfi, condensed milk, topped with the taste of tropic like like kiwi, dragon fruit, pomegranate and roasted almonds, cashews, and raisins.</p>
              <p className="animate-[fadeIn_0.8s_ease-out_0.3s_both]"><strong>Kunafa:</strong> Golden crisp shredded pastry embracing luscious creamy filling, drizzled with aromatic syrup and sprinkled with chopped nuts.</p>
              <p className="animate-[fadeIn_0.8s_ease-out_0.4s_both]"><strong>Kaddu ka Kheer:</strong> Fragrant spiced pumpkin pudding simmered to perfection with rich milk, aromatic cardamom, and a hint of saffron.</p>
              <p className="animate-[fadeIn_0.8s_ease-out_0.5s_both]"><strong>Qubani ka Meetha:</strong> Sumptuous slow-cooked apricot delight topped with slivers of nuts and a generous dollop of fresh cream.</p>
              <p className="animate-[fadeIn_0.8s_ease-out_0.6s_both]"><strong>Shahi Tukda:</strong> Royal bread pudding fried golden, bathed in creamy saffron-cardamom milk sauce, garnished with nuts and raisins.</p>
            </div>
          </div>
          <div className="relative animate-[fadeInRight_0.8s_ease-out_0.3s_both]">
            <img
              src={img8}
              alt="Barkaas Falooda and Desserts"
              className="w-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Dining Experience */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src={img9}
            alt="Barkaas Majlis-Style Dining"
            className="rounded-lg shadow-2xl w-full transition-transform duration-500 hover:scale-105 animate-[fadeInLeft_0.8s_ease-out]"
          />
          <div className="animate-[fadeInRight_0.8s_ease-out_0.2s_both]">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Dining Experience
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="animate-[fadeIn_0.8s_ease-out_0.3s_both]">Together we dine, embracing our ethos — "food that unites people." Inspired by the traditional Arab hospitality of private guest areas, our Majlis-style seating invites you to relax on low tables and cushions, offering a cosy and engaging dining experience. This style reflects the essence of Middle Eastern warmth and generosity, where every guest is treated with the utmost respect and kindness.</p>
              <p className="animate-[fadeIn_0.8s_ease-out_0.5s_both]">Immerse yourself in our delectable cuisine while enjoying the comfort and camaraderie that come with sharing a meal in such a welcoming setting. Comfortable seating with a touch of the authenticity and cultural heritage of the Arabian Peninsula for an elegant and immersive fine dining experience. </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* History & Achievements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
            <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
              Since 2016
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-center">
            <p className="animate-[fadeIn_0.8s_ease-out_0.3s_both]">
              Founded in 2016 by visionaries Gowtham Kudapa, Sandeep Palavalasa, Nagarjuna Gannamani, and Vamsi Maddineni, our brand began its culinary journey in Vijayawada. Since launching our expansion phase in 2018, we have steadily grown into a leading name in the industry, driven by a commitment to excellence, authenticity, and innovation. Every milestone reflects our passion for delivering exceptional dining experiences that bring people together through food.
            </p>
            <p className="animate-[fadeIn_0.8s_ease-out_0.6s_both]">
              Today, we proudly operate 32 outlets across the country, serving over 20 million customers annually with an average rating of 4.3. Supported by a dedicated team of 1,000+ employees, our efforts were recognized when we were awarded "Promising Arabic Restaurant Chain of the Year 2022" by Franchise India, underscoring our continued pursuit of quality and innovation.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;