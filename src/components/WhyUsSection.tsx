import { motion } from "framer-motion";
import { Award, Clock, Wrench, Headphones, IndianRupee, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Expertise",
    description: "MNRE-certified team with years of experience in solar EPC projects across Rajasthan.",
  },
  {
    icon: IndianRupee,
    title: "Best Price Guarantee",
    description: "Competitive pricing with transparent quotes. We help you get the maximum government subsidies.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "From approval to commissioning, we ensure your project is completed on schedule.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description: "Design, procurement, installation, commissioning, and maintenance — all under one roof.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description: "Dedicated support team with regular maintenance, remote monitoring, and quick response times.",
  },
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Based in Jaipur with deep understanding of local regulations, weather, and energy needs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Your Trusted Solar{" "}
            <span className="text-gradient-solar">Partner</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We go beyond installation — delivering value, reliability, and peace
            of mind.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/40 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
