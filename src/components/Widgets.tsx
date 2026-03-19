import { useState, useEffect } from "react";
import { Clock, Mail, Sun, Moon } from "lucide-react";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-1.5 text-metric text-muted-foreground">
      <Clock className="w-3.5 h-3.5" />
      <span>{hours}:{minutes}:{seconds}</span>
    </div>
  );
};

const ContactWidget = () => {
  return (
    <a
      href="mailto:suryaprakash120103@gmail.com"
      className="flex items-center gap-1.5 text-metric text-muted-foreground hover:text-primary theater-transition"
    >
      <Mail className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">suryaprakash120103@gmail.com</span>
      <span className="sm:hidden">Contact</span>
    </a>
  );
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent theater-transition"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export { ClockWidget, ContactWidget, ThemeToggle };
