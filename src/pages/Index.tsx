import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, niches } from "@/data/projects";
import type { ThumbnailProject } from "@/data/projects";
import ThumbnailCard from "@/components/ThumbnailCard";
import TheaterView from "@/components/TheaterView";
import FilterBar from "@/components/FilterBar";
import { ClockWidget, ContactWidget, ThemeToggle } from "@/components/Widgets";
import YouTubeLoader from "@/components/YouTubeLoader";

const INITIAL_COUNT = 9;

const Index = () => {
  const [activeNiche, setActiveNiche] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ThumbnailProject | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [loaderKey, setLoaderKey] = useState(0);

  // Show the loader on initial load
  useEffect(() => {
    setLoaderKey((prev) => prev + 1);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeNiche === "All") return projects;
    return projects.filter((p) => p.niche === activeNiche);
  }, [activeNiche]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  const handleNicheChange = (n: string) => {
    setLoaderKey((prev) => prev + 1);
    setActiveNiche(n);
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <YouTubeLoader triggerKey={loaderKey} duration={loaderKey === 1 ? 2500 : 1200} />
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h1 className="text-foreground font-semibold tracking-tight text-lg font-sans">
                YT Portfolio
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <ClockWidget />
              <ContactWidget />
              <ThemeToggle />
            </div>
          </div>
          <div className="mt-3 overflow-x-auto pb-1 -mb-1">
            <FilterBar
              niches={niches}
              activeNiche={activeNiche}
              onNicheChange={handleNicheChange}
            />
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNiche}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ThumbnailCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!showAll && filteredProjects.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-body font-medium hover:bg-muted theater-transition"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-metric text-muted-foreground">
            © 2026 Surya Prakash · Thumbnail Designer
          </p>
          <a
            href="mailto:suryaprakash120103@gmail.com"
            className="text-metric text-muted-foreground hover:text-primary theater-transition"
          >
            suryaprakash120103@gmail.com
          </a>
        </div>
      </footer>

      {/* Theater overlay */}
      {selectedProject && (
        <TheaterView
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Index;
