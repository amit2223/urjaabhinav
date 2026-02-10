import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panels on rooftop in Jaipur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium font-heading">Based in Jaipur · Serving All of Rajasthan</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Smart Solar
            <br />
            Solutions for a{" "}
            <span className="text-gradient-solar">Brighter</span>{" "}
            Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 font-body"
          >
            From rooftop to ground-mount, we deliver end-to-end solar energy
            solutions for residential, agricultural, and commercial & industrial
            sectors across Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-solar font-heading font-semibold text-base px-8 h-14"
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary/60 text-secondary bg-secondary/10 hover:bg-secondary/20 font-heading font-semibold text-base px-8 h-14"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* Floating features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: TrendingDown, text: "Reduce Bills by 90%" },
              { icon: Shield, text: "25 Year Warranty" },
              { icon: Zap, text: "Quick Installation" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
