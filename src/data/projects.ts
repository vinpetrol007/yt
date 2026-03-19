import thumb2a from "@/assets/thumb-2a.jpg";
import thumb2b from "@/assets/thumb-2b.jpg";
import thumb2c from "@/assets/thumb-2c.jpg";
import thumb4a from "@/assets/thumb-4a.jpg";
import thumb4b from "@/assets/thumb-4b.jpg";
import thumb4c from "@/assets/thumb-4c.jpg";
import thumb5a from "@/assets/thumb-5a.jpg";
import thumb5b from "@/assets/thumb-5b.jpg";
import thumb5c from "@/assets/thumb-5c.jpg";
import thumb10a from "@/assets/thumb-10a.jpg";
import thumb10b from "@/assets/thumb-10b.jpg";
import thumb10c from "@/assets/thumb-10c.jpg";
import artboard1 from "@/assets/Artboard 1.png";
import artboard2 from "@/assets/Artboard 2.png";
import artboard3 from "@/assets/Artboard 3.png";
import cathie1 from "@/assets/cathie-1.png";
import cathie2 from "@/assets/cathie -2.png";
import cathie3 from "@/assets/cathie-3.png";
import robot1 from "@/assets/ROBOT 1.png";
import robot2 from "@/assets/ROBOT 2.png";
import robot3 from "@/assets/ROBOT 3.png";
import olsen1 from "@/assets/Olsen 1.png";
import olsen2 from "@/assets/Olsen 2.png";
import olsen3 from "@/assets/Olsen 3.png";
import jal1 from "@/assets/JAL 1.png";
import jal2 from "@/assets/JAL 2.png";
import jal3 from "@/assets/JAL 3.png";
import loco1 from "@/assets/loco1.png";
import loco2 from "@/assets/loco 2.png";
import loco3 from "@/assets/loco 3.png";

export interface ThumbnailProject {
  id: string;
  title: string;
  client: string;
  niche: string;
  winner: string;
  variants: { id: string; label: string; image: string }[];
  iterations: number;
  notes?: string;
}

export const projects: ThumbnailProject[] = [
  {
    id: "1",
    title: "The easiest setup I've ever used",
    client: "SetupMaster",
    niche: "Finance",
    winner: artboard1,
    variants: [
      { id: "1a", label: "Variant A", image: artboard1 },
      { id: "1b", label: "Variant B", image: artboard2 },
      { id: "1c", label: "Variant C", image: artboard3 },
    ],
    iterations: 3,
    notes: "Clear money figure + strong contrast instantly grabs attention and builds credibility.\nSimple expression + upward cue triggers curiosity about \"how\" it happened.",
  },
  {
    id: "2",
    title: "You're learning design wrong",
    client: "DesignMastery",
    niche: "Design",
    winner: olsen1,
    variants: [
      { id: "2a", label: "Variant A", image: olsen1 },
      { id: "2b", label: "Variant B", image: olsen2 },
      { id: "2c", label: "Variant C", image: olsen3 },
    ],
    iterations: 3,
    notes: "Authority face + bold claims (\"mistake\", \"wrong\", \"replacing\") instantly trigger curiosity and tension.\nMinimal design with strong keywords highlighted makes it easy to scan and click.",
  },
  {
    id: "3",
    title: "Cathie Wood: Who Is She?",
    client: "ARK Insights",
    niche: "Finance",
    winner: cathie1,
    variants: [
      { id: "3a", label: "Variant A", image: cathie1 },
      { id: "3b", label: "Variant B", image: cathie2 },
      { id: "3c", label: "Variant C", image: cathie3 },
    ],
    iterations: 4,
    notes: "Recognizable face + bold statements builds instant authority and curiosity.\nHigh contrast colors and strong text hooks make each card scroll-stopping and clickable.",
  },
  {
    id: "6",
    title: "AI vs Humans: Who Wins?",
    client: "Synapse Labs",
    niche: "Tech",
    winner: robot1,
    variants: [
      { id: "6a", label: "Variant A", image: robot1 },
      { id: "6b", label: "Variant B", image: robot2 },
      { id: "6c", label: "Variant C", image: robot3 },
    ],
    iterations: 5,
    notes: "Close-up faces, bold text, and strong contrast create emotional tension that drives clicks.",
  },
  {
    id: "7",
    title: "How bad is Helvetica… really?",
    client: "DesignDebate",
    niche: "Design",
    winner: jal1,
    variants: [
      { id: "7a", label: "Variant A", image: jal1 },
      { id: "7b", label: "Variant B", image: jal2 },
      { id: "7c", label: "Variant C", image: jal3 },
    ],
    iterations: 3,
    notes: "Strong emotions (laughing, shock) instantly grab attention and make it relatable.\nBold, playful text + controversial design takes trigger curiosity and shares.",
  },
  {
    id: "16",
    title: "Tech Takes You Can't Ignore",
    client: "Tech Insider",
    niche: "Tech",
    winner: loco1,
    variants: [
      { id: "16a", label: "Variant A", image: loco1 },
      { id: "16b", label: "Variant B", image: loco2 },
      { id: "16c", label: "Variant C", image: loco3 },
    ],
    iterations: 3,
    notes: "Bold claims + strong opinions create instant curiosity and emotional pull.\nClean contrast with highlighted keywords makes the message clear in seconds.",
  },
];

export const niches = ["All", "Finance", "Design", "Tech"];
