import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../Transition";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/theajphotography98?igsh=aWFqbWFqMDVld3B3",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
    },

    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/919928150744",
      color: "hover:bg-green-500",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Services", url: "/#services" },
    { name: "Contact", url: "/contact" },
  ];

  const services = [
    "Wedding Photography",
    "Portrait Sessions",
    "Event Coverage",
    "Videography Services",
    "Commercial Photography",
    "Drone Photography",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                Photographer & Film Maker
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Capturing life's precious moments with creativity and
                excellence. Professional photography and videography services in
                Jaipur, Rajasthan.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-lg mr-3">📍</span>
                <div>
                  <p className="font-medium">Jaipur, Rajasthan, India</p>
                  <p className="text-gray-300 text-sm">
                    Available for travel worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-3">📧</span>
                <a
                  href="mailto:bhargavajay67@gmail.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  bhargavajay67@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-3">📞</span>
                <a
                  href="tel:+919928150744"
                  className="hover:text-gray-300 transition-colors"
                >
                  +91 99281 50744
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-3"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Let's Connect</h4>

            {/* CTA Section */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h5 className="font-semibold mb-3">
                Ready to Capture Your Moments?
              </h5>
              <p className="text-gray-300 text-sm mb-4">
                Get in touch for a free consultation and quote.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:bhargavajay67@gmail.com"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Get Free Quote
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:text-white transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Photographer & Film Maker. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
