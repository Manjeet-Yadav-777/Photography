import { motion } from "framer-motion";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-black lg:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>

      {/* Backdrop */}
      {openMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        />
      )}

      <motion.div
        initial="hidden"
        variants={menuVariants}
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-black cursor-pointer hover:text-gray-600 transition-colors"
        >
          <IoMdClose />
        </div>

        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-black font-bold text-3xl">
          <li onClick={() => setOpenMenu(false)}>
            <Link to={"/"} className="focus:outline-none">
              Home
            </Link>
          </li>

          <li onClick={() => setOpenMenu(false)}>
            <Link to={"/about"} className="focus:outline-none">
              About
            </Link>
          </li>

          <li onClick={() => setOpenMenu(false)}>
            <Link to={"/portfolio"} className="focus:outline-none">
              Portfolio
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
