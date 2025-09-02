import React from "react";

import { ImInstagram, ImWhatsapp } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.instagram.com/theajphotography98?igsh=aWFqbWFqMDVld3B3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-600 transition-colors focus:outline-none"
            aria-label="Follow us on Instagram"
          >
            <ImInstagram />
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-green-600 transition-colors focus:outline-none"
            aria-label="Contact us on WhatsApp"
          >
            <ImWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
