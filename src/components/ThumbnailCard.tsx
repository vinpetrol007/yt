import { motion } from "framer-motion";
import type { ThumbnailProject } from "@/data/projects";

interface ThumbnailCardProps {
  project: ThumbnailProject;
  onClick: () => void;
}

const ThumbnailCard = ({ project, onClick }: ThumbnailCardProps) => {
  return (
    <motion.div
      className="cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
    >
      <div className="rounded-lg p-1 bg-card border border-border shadow-card group-hover:shadow-card-hover theater-transition">
        <div className="aspect-video rounded-md overflow-hidden">
          <img
            src={project.winner}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {project.variants.map((variant) => (
            <div
              key={variant.id}
              className={`min-w-[5.5rem] h-12 rounded overflow-hidden border flex-shrink-0 ${
                variant.id === project.variants[0].id
                  ? "border-primary"
                  : "border-border"
              }`}
            >
              <img
                src={variant.image}
                alt={variant.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-foreground text-sm font-semibold truncate">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-muted-foreground text-body">{project.client}</span>
          <span className="text-muted-foreground text-body">·</span>
          <span className="text-metric text-muted-foreground">{project.niche}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ThumbnailCard;
