interface FilterBarProps {
  niches: string[];
  activeNiche: string;
  onNicheChange: (niche: string) => void;
}

const FilterBar = ({ niches, activeNiche, onNicheChange }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-2">
      {niches.map((niche) => (
        <button
          key={niche}
          onClick={() => onNicheChange(niche)}
          className={`px-3 py-1.5 rounded-md text-body theater-transition ${
            activeNiche === niche
              ? "bg-accent text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          }`}
        >
          {niche}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
