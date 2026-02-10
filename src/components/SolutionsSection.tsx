import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Rooftop Solar",
    subtitle: "On-grid & Off-grid",
    description:
      "Maximize your existing roof space with high-efficiency panels. Ideal for residential and commercial buildings with net metering support.",
    features: [
      "On-grid with net metering",
      "Off-grid with battery backup",
      "Hybrid systems available",
      "Minimal structural changes",
      "Remote monitoring included",
    ],
    accent: true,
  },
  {
    title: "Ground Mount",
    subtitle: "Utility-scale & Farms",
    description:
      "Large-scale ground-mounted installations for open land, farms, and utility projects. Optimal tilt angles for maximum Rajasthan sunlight capture.",
    features: [
      "Fixed & tracker mounts",
      "PM-KUSUM compatible",
      "Large capacity systems",
      "Land utilization planning",
      "Complete EPC service",
    ],
    accent: false,
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-solar-surface">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            Rooftop to{" "}
            <span className="text-gradient-solar">Ground Mount</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete solar infrastructure solutions — we handle everything from
            design to commissioning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`rounded-2xl p-8 md:p-10 border transition-shadow duration-500 ${
                solution.accent
                  ? "bg-primary text-primary-foreground border-primary shadow-solar"
                  : "bg-card text-foreground border-border shadow-card hover:shadow-card-hover"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className={`text-xs font-heading font-semibold uppercase tracking-wider ${
                      solution.accent
                        ? "text-secondary"
                        : "text-secondary"
                    }`}
                  >
                    {solution.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mt-1">
                    {solution.title}
                  </h3>
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    solution.accent
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  solution.accent
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {solution.description}
              </p>

              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 ${
                        solution.accent
                          ? "text-secondary"
                          : "text-secondary"
                      }`}
                    />
                    <span
                      className={
                        solution.accent
                          ? "text-primary-foreground/90"
                          : "text-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
