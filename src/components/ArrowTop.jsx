import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export const ArrowTop = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "circIn" }}
        className="arrow-container"
      >
        <a href="#" className="arrow-top">
          <FaArrowUp className="arrow-img" />
        </a>
        <div className="animation-arrow-top"></div>
      </motion.div>
    </>
  );
};
