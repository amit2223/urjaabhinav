import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "G-18, Ground Floor, Crown Plaza, Amrapali Marg, Vaishali Nagar, Jaipur (Raj.)",
  },
  { icon: Phone, label: "Call Us", value: "+91 82333 83788" },
  { icon: Mail, label: "Email Us", value: "abhinavurjarajasthan@gmail.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9 AM - 6 PM" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${formData.name}.%0A📧 Email: ${formData.email || "N/A"}%0A📱 Phone: ${formData.phone}%0A📝 Message: ${formData.message}`;
    window.open(`https://wa.me/918233383788?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-solar-surface">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Start Your Solar{" "}
            <span className="text-gradient-solar">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get a free site assessment and custom solar proposal for your
            property.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Your Requirements
                </label>
                <Textarea
                  placeholder="Tell us about your project — type of property, electricity bill, rooftop area, etc."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-solar font-heading font-semibold text-base h-14"
              >
                <Send className="w-5 h-5 mr-2" />
                Request Free Consultation
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2!2d75.72!3d26.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmFpc2hhbGkgTmFnYXIsIEphaXB1cg!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abhinav Urja Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
