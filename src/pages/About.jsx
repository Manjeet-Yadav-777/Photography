import React, { useState, useEffect } from "react";
import manAbout from "../img/about/man.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../Transition";

const About = () => {
  const [counts, setCounts] = useState({
    weddings: 0,
    clients: 0,
    awards: 0,
    experience: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("achievements-section");
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
      const duration = 2500;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          weddings: Math.floor(20 * progress),
          clients: Math.floor(50 * progress),
          awards: Math.floor(5 * progress),
          experience: Math.floor(5 * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts({
            weddings: 20,
            clients: 50,
            awards: 5,
            experience: 5,
          });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const skills = [
    { name: "Wedding Photography", percentage: 95, icon: "💒" },
    { name: "Portrait Photography", percentage: 90, icon: "📸" },
    { name: "Event Coverage", percentage: 88, icon: "🎉" },
    { name: "Video Production", percentage: 85, icon: "🎬" },
    { name: "Photo Editing", percentage: 92, icon: "🎨" },
    { name: "Drone Photography", percentage: 80, icon: "🚁" },
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      type: "Wedding Couple",
      text: "Amazing work! Our wedding photos are absolutely stunning. Every moment was captured beautifully.",
      rating: 5,
    },
    {
      name: "Corporate Events Ltd",
      type: "Business Client",
      text: "Professional, punctual, and exceptional quality. Highly recommended for any corporate event.",
      rating: 5,
    },
    {
      name: "Mona Sinha",
      type: "Portrait Client",
      text: "The best photographer I've worked with. Made me feel so comfortable and the results are incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container lg:mt-12 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl transform rotate-3 aspect-square max-w-sm mx-auto"></div>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={transition1}
                  src={manAbout}
                  alt="Professional photographer"
                  className="relative rounded-3xl shadow-2xl object-cover w-full aspect-square max-w-sm mx-auto"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl lg:mt-0 mt-14 lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Capturing Life's{" "}
                <span className="text-gray-600">Beautiful</span> Moments
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                With over 5 years of experience in professional photography and
                videography, I specialize in creating timeless memories that
                tell your unique story. From intimate weddings to grand
                celebrations, every moment deserves to be captured with artistry
                and passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/portfolio"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  View Portfolio
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:bhargavajay67@gmail.com"
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-center"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              My Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Years of dedication and passion have led to these incredible
              milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: counts.weddings,
                label: "Weddings Captured",
                icon: "💒",
              },
              { number: counts.clients, label: "Happy Clients", icon: "😊" },
              { number: counts.awards, label: "Awards Won", icon: "🏆" },
              {
                number: counts.experience,
                label: "Years Experience",
                icon: "⭐",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {item.number}+
                </div>
                <div className="text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  My journey in photography began with a simple passion for
                  capturing moments. What started as a hobby quickly evolved
                  into a lifelong dedication to the art of visual storytelling.
                </p>
                <p>
                  Over the years, I've had the privilege of documenting
                  countless weddings, events, and special moments. Each click of
                  the shutter represents not just a photograph, but a memory
                  that will be cherished for generations.
                </p>
                <p>
                  Based in the beautiful city of Jaipur, I travel across India
                  and internationally to capture your precious moments. My
                  approach combines technical expertise with artistic vision,
                  ensuring every image tells your unique story.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: "📸",
                  title: "Professional Equipment",
                  desc: "Latest cameras and lenses",
                },
                {
                  icon: "🎨",
                  title: "Creative Vision",
                  desc: "Unique artistic perspective",
                },
                {
                  icon: "⏰",
                  title: "Punctual Service",
                  desc: "Always on time, every time",
                },
                {
                  icon: "💝",
                  title: "Personal Touch",
                  desc: "Tailored to your style",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized skills and techniques honed over years of professional
              experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-semibold text-gray-900">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-gray-600 font-semibold">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-900 to-gray-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it - hear from some of my amazing
              clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your vision and create beautiful memories together.
              Every story is unique, and I'm here to capture yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:bhargavajay67@gmail.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919928150744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
