import { motion } from "framer-motion";
import { BadgeIndianRupee, FileText, Landmark, ArrowRight, HandCoins } from "lucide-react";

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: "Government Subsidy",
    description:
      "Get up to 40% subsidy under PM Surya Ghar Yojana for residential rooftop solar. We handle the complete paperwork and application process for you.",
    highlight: "Up to ₹78,000 subsidy",
  },
  {
    icon: Landmark,
    title: "Low Interest Loans",
    description:
      "Avail solar loans at interest rates as low as 7-8% from leading banks. EMIs often lower than your current electricity bill — start saving from day one.",
    highlight: "EMI < Your Bill",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description:
      "From DISCOM approvals to net metering applications and subsidy claims — our team manages all paperwork so you can focus on savings.",
    highlight: "Hassle-Free Process",
  },
  {
    icon: HandCoins,
    title: "Payback in 3-4 Years",
    description:
      "With subsidies and savings combined, most residential systems pay for themselves within 3-4 years. Enjoy 20+ years of virtually free electricity.",
    highlight: "20+ Years Free Power",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SubsidySection = () => {
  return (
    <section id="subsidy" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Save More With Solar
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mt-3 mb-4">
            Subsidies & <span className="text-gradient-solar">Easy Financing</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We guide you through every step — from government subsidies to low-interest bank loans — making solar affordable for everyone across Rajasthan.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mb-4 group-hover:bg-secondary/25 transition-colors">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-xs font-heading font-bold text-secondary mb-2 uppercase tracking-wider">
                {item.highlight}
              </div>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-heading font-semibold shadow-solar hover:bg-secondary/90 transition-colors"
          >
            Check Your Subsidy Eligibility
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidySection;
