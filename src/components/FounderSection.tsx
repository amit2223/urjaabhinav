import { motion } from "framer-motion";
import { Award, Briefcase, Sun } from "lucide-react";
import founderImage from "@/assets/deepak-jain.jpg";

const FounderSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            Meet the Founder
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            The Vision Behind <span className="text-secondary">Abhinav Urja</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-solar border-4 border-secondary/20">
                <img
                  src={founderImage}
                  alt="Deepak Jain - Founder of Abhinav Urja"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-5 py-2 rounded-xl font-heading font-bold text-sm shadow-lg">
                9+ Years Experience
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Deepak Jain
            </h3>
            <p className="text-secondary font-heading font-semibold mb-4">
              Founder & Director
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over <strong className="text-foreground">9 years of experience</strong> in the solar energy industry, Deepak Jain has been at the forefront of Rajasthan's renewable energy transformation. Having served as an <strong className="text-foreground">Operations Manager</strong> across multiple leading solar companies, he brings deep expertise in project execution, system design, and client management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Driven by a passion for clean energy and a vision to make solar accessible to every household and business in Rajasthan, Deepak founded <strong className="text-foreground">Abhinav Urja</strong> — delivering trusted, end-to-end solar solutions with a personal touch.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Briefcase, text: "Ex-Operations Manager" },
                { icon: Award, text: "100+ Projects Delivered" },
                { icon: Sun, text: "1500+ kW Installed" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-secondary/10 text-foreground px-4 py-2 rounded-lg border border-secondary/20"
                >
                  <item.icon className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
