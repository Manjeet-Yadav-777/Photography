import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import women from "../img/home/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../Transition";

const Home = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    photos: 0,
    years: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          clients: Math.floor(50 * progress),
          photos: Math.floor(1000 * progress),
          years: Math.floor(5 * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts({
            clients: 50,
            photos: 1000,
            years: 5,
          });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      description:
        "Capture your special day with our comprehensive wedding photography packages. From pre-wedding shoots to the grand celebration.",
      icon: "💒",
      features: [
        "Pre-wedding shoots",
        "Full day coverage",
        "Candid moments",
        "Traditional ceremonies",
      ],
    },
    {
      id: 2,
      title: "Portrait Sessions",
      description:
        "Professional portrait photography for individuals, families, and corporate headshots with studio and outdoor options.",
      icon: "📸",
      features: [
        "Individual portraits",
        "Family sessions",
        "Corporate headshots",
        "Creative concepts",
      ],
    },
    {
      id: 3,
      title: "Event Coverage",
      description:
        "Comprehensive coverage for corporate events, parties, and special celebrations with professional editing.",
      icon: "🎉",
      features: [
        "Corporate events",
        "Birthday parties",
        "Anniversary celebrations",
        "Product launches",
      ],
    },
    {
      id: 4,
      title: "Videography Services",
      description:
        "Cinematic wedding films, event videos, and promotional content with professional editing and music.",
      icon: "🎬",
      features: [
        "Wedding films",
        "Event videos",
        "Promotional content",
        "Music videos",
      ],
    },
    {
      id: 5,
      title: "Commercial Photography",
      description:
        "Professional product photography, real estate shoots, and commercial campaigns with high-end equipment and lighting.",
      icon: "🏢",
      features: [
        "Product photography",
        "Real estate shoots",
        "Food photography",
        "Fashion shoots",
      ],
    },
    {
      id: 6,
      title: "Drone Photography",
      description:
        "Aerial photography and videography services for weddings, events, and commercial projects with cinematic views.",
      icon: "🚁",
      features: [
        "Aerial wedding shots",
        "Event coverage",
        "Real estate videos",
        "Commercial projects",
      ],
    },
    {
      id: 7,
      title: "Photo Editing",
      description:
        "Professional photo editing, retouching, and color correction services to enhance your images to perfection.",
      icon: "🎨",
      features: [
        "Color correction",
        "Skin retouching",
        "Background removal",
        "Creative effects",
      ],
    },
    {
      id: 8,
      title: "Video Production",
      description:
        "Complete video production services including scripting, filming, editing, and post-production for all types of content.",
      icon: "🎥",
      features: [
        "Corporate videos",
        "Documentary films",
        "Music videos",
        "Social media content",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="section min-h-screen lg:h-screen"
      >
        <div className="container mx-auto lg:overflow-hidden h-full">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full lg:mt-48 pt-52 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start lg:ml-20"
            >
              <h1 className="text-[54px] lg:text-[66px] font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
                Photographer <br /> & Film Maker
              </h1>

              <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">
                Jaipur Rajasthan, India
              </p>

              <a
                href="tel:+919928150744"
                className="py-[18px] px-[50px] h-[66px] flex items-center justify-center text-base uppercase font-semibold bg-gray-900 text-white mb-36 hover:bg-gray-800 transition-colors"
              >
                Hire Me
              </a>
            </motion.div>

            <div className="flex justify-end max-h-20 lg:max-h-200">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-40"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  src={women}
                  alt="Professional photographer portrait"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col justify-center items-center h-full px-4 pt-32 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl font-bold capitalize leading-tight tracking-tight mb-4">
                Photographer <br /> & Film Maker
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Jaipur Rajasthan, India
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                src={women}
                alt="Professional photographer portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Mobile Stats */}
            <motion.div
              id="stats-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-8 w-full max-w-xs"
            >
              <div className="text-center">
                <motion.div
                  className="text-xl font-bold text-gray-900"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {counts.clients}+
                </motion.div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-xl font-bold text-gray-900"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {counts.photos}+
                </motion.div>
                <div className="text-xs text-gray-600">Photos</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-xl font-bold text-gray-900"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {counts.years}+
                </motion.div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </motion.div>

            {/* Mobile Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
                <span className="text-base mr-2">📸</span>
                <span className="text-xs font-medium text-gray-700">
                  Professional
                </span>
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
                <span className="text-base mr-2">⚡</span>
                <span className="text-xs font-medium text-gray-700">Fast</span>
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
                <span className="text-base mr-2">💎</span>
                <span className="text-xs font-medium text-gray-700">
                  Premium
                </span>
              </div>
            </motion.div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center w-full"
            >
              <p className="text-gray-600 mb-4 text-sm">
                Let's create beautiful memories together
              </p>
              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:photographer@example.com"
                  className="py-3 px-6 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm"
                >
                  Get Quote
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919876543210"
                  className="py-3 px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm"
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-12 lg:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional photography and videography services tailored to
              capture your precious moments with creativity and excellence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="text-3xl lg:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700 text-sm lg:text-base"
                    >
                      <span className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 cursor-pointer px-6 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-sm lg:text-base mt-auto"
                >
                  Call Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 lg:mt-16"
          >
            <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Capture Your Moments?
              </h3>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 px-4">
                Let's discuss your vision and create something extraordinary
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:bhargavajay67@gmail.com"
                  className="py-3 lg:py-4 px-6 lg:px-8 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm lg:text-base"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919928150744"
                  className="py-3 lg:py-4 px-6 lg:px-8 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-sm lg:text-base"
                >
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
