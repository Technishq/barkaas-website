import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import { toast } from "sonner";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request submitted! We'll confirm shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      notes: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-pattern-arabesque">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-[0.2em] uppercase mb-2">
            Reservations
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient-gold mb-4">
            Book a Table
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience. We recommend
            booking in advance, especially for weekends and special occasions.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User size={16} className="text-gold" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border focus:border-gold"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                    <Mail size={16} className="text-gold" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border focus:border-gold"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                    <Phone size={16} className="text-gold" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    required
                    className="bg-card border-border focus:border-gold"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2 text-foreground">
                    <Users size={16} className="text-gold" />
                    Number of Guests
                  </Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">Select guests</option>
                    {guestOptions.map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="9+">9+ Guests (Private Event)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-foreground">
                    <Calendar size={16} className="text-gold" />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-card border-border focus:border-gold"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2 text-foreground">
                    <Clock size={16} className="text-gold" />
                    Preferred Time
                  </Label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div className="space-y-2">
                <Label htmlFor="occasion" className="text-foreground">
                  Special Occasion (Optional)
                </Label>
                <Input
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  placeholder="Birthday, Anniversary, Business Dinner, etc."
                  className="bg-card border-border focus:border-gold"
                />
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Dietary restrictions, seating preferences, etc."
                  rows={4}
                  className="bg-card border-border focus:border-gold resize-none"
                />
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full">
                Request Reservation
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                Our team will contact you to confirm your reservation within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
