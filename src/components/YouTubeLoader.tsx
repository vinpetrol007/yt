import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface YouTubeLoaderProps {
  triggerKey?: number;
  duration?: number;
}

const YouTubeLoader = ({ triggerKey = 0, duration = 2500 }: YouTubeLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [triggerKey, duration]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      style={{ originX: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default YouTubeLoader;
