import { useEffect, useState } from "react";
import { Hero, Services } from "./components";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Theme switcher function
  const handleThemeSwitcher = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <button
        onClick={handleThemeSwitcher}
        type="button"
        className="fixed z-10 md:right-5 md:top-5 right-2 top-2 
      bg-indigo-500 text-lg p-2 rounded-md"
      >
        {theme === "dark" ? "🌞" : "🌒"}
      </button>
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <Hero />
          <Services />
        </div>
      </div>
    </>
  );
};

export default App;
