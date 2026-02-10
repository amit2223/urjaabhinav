import { motion } from "framer-motion";
import { Home, Tractor, Building2, ArrowRight } from "lucide-react";
import solarResidential from "@/assets/solar-residential.jpg";
import solarAgricultural from "@/assets/solar-agricultural.jpg";
import solarCommercial from "@/assets/solar-commercial.jpg";

const services = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Power your home with clean energy. Our rooftop solutions are designed for Indian households — save up to 90% on electricity bills with net metering.",
    image: solarResidential,
    features: ["Net Metering", "Subsidy Assistance", "Low Maintenance"],
  },
  {
    icon: Tractor,
    title: "Agricultural",
    description:
      "Solar pumps and farm solutions that reduce dependency on diesel and grid power. Ideal for Rajasthan's agricultural needs with PM-KUSUM scheme benefits.",
    image: solarAgricultural,
    features: ["Solar Pumps", "PM-KUSUM", "Ground Mount"],
  },
  {
    icon: Building2,
    title: "Commercial & Industrial",
    description:
      "Large-scale solar installations for factories, warehouses, and commercial buildings. Maximize ROI with significant operational cost savings.",
    image: solarCommercial,
    features: ["High Capacity", "Quick ROI", "OPEX/CAPEX Models"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Solar for Every{" "}
            <span className="text-gradient-solar">Sector</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tailored solar energy solutions designed for diverse needs — from
            homes to farms to industries.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 border border-border"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} solar installation`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-solar">
                  <service.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:gap-3 gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
