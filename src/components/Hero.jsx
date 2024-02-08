import React, { useContext } from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import { UserContext } from '../context/UserContext';

const Hero = () => {
  const isMobile = window.innerWidth < 768;

  const user = useContext(UserContext);

  return (
    <section className={`w-[100vw] h-[100vh] mb-32 ${isMobile ? 'hero-bg-mobile' : 'hero-bg-desktop'}`}>
      <Navbar user={user} />
      <section className={`flex flex-col items-center justify-center w-[100vw] h-[100vh] ${isMobile ? 'hero-bg-mobile' : 'hero-bg-desktop'}`}>
        <section className='absolute flex md:flex-row flex-col py-10 relative z-0'>
          <div className={`flex-1 ${styles.flexStart} flex-col justify-center items-center`}>
            <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
              <h1 className="flex text-center justify-center font-poppins font-semibold lg:text-[40px] text-[30px] text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]">
                AIKTC's
              </h1>
            </motion.div>
            <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
              <h1 className="flex text-center justify-center px-1 font-poppins font-semibold lg:text-[40px] text-[30px] text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]">
                Department of Computer Engineering Presents
              </h1>
            </motion.div>
            <div className="flex flex-col justify-center items-center w-full p-0 my-5">
              <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
                <h1 className="text-stroke leading-none m-0 flex text-center font-bold lg:text-[150px] text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-orange-600 to-indigo-800 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1.0)] p-0">
                  ALGORITHM
                </h1>
              </motion.div>
              <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
                <h1 className="text-stroke leading-none m-0 flex text-center font-bold lg:text-[150px] text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-orange-600 to-indigo-800 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1.0)] p-0">
                  8.0
                </h1>
              </motion.div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Link
                to="/register"
                className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200">
                Register
              </Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");