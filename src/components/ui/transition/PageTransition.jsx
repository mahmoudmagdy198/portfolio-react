import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const path = useLocation();
  return (
    <div key={path.pathname}>
      <motion.div
        intial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </div>
  );
}

export default PageTransition;
