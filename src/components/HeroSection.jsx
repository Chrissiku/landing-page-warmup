import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center">
        <h1
          className="text-2xl md:text-4xl mb-1 md:mb-3 
        text-indigo-700 dark:text-indigo-400 font-semibold"
        >
          Hi There, This is Christian Siku
        </h1>
        <p
          className="text-md md:text-xl max-w-md mb-3 
        text-gray-700 dark:text-gray-400"
        >
          A Fullstack Software Developer And Holder Of A Bachelor Degree ...
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 border border-transparent
        text-base font-medium rounded-md text-white 
        bg-indigo-600 hover:bg-indigo-700 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
