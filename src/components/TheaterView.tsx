import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ThumbnailProject } from "@/data/projects";

interface TheaterViewProps {
  project: ThumbnailProject | null;
  onClose: () => void;
}

const TheaterView = ({ project, onClose }: TheaterViewProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!project) return null;

  const activeVariant = project.variants[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        />

        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-20 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent theater-transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 max-h-screen overflow-y-auto scrollbar-hide">

          <div className="rounded-lg p-1 shadow-theater">
            <div className="aspect-video rounded-md overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeVariant.id}
                  src={activeVariant.image}
                  alt={`${project.title} - ${activeVariant.label}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row gap-6">
            <div className="flex flex-nowrap justify-center gap-3 overflow-x-auto overflow-y-visible scrollbar-hide py-2 px-3">
              {project.variants.map((variant, index) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-md p-1 theater-transition flex-shrink-0 ${
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-36 lg:w-40 aspect-video rounded overflow-hidden shadow-card border-2 ${
                      index === activeIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={variant.image}
                      alt={variant.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1.5 px-0.5">
                    <span className="text-metric text-muted-foreground">
                      {variant.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex-1 min-w-0 lg:pl-6 lg:border-l lg:border-border">
              <h2 className="text-display text-foreground">{project.title}</h2>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-body text-muted-foreground">
                  {project.client}
                </span>
                <span className="text-metric text-muted-foreground bg-accent px-2 py-0.5 rounded">
                  {project.niche}
                </span>
              </div>
              {project.notes && (
                <p className="mt-3 text-body text-muted-foreground leading-relaxed">
                  {project.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TheaterView;
