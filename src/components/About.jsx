import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-700 dark:text-gray-300">
          A Fullstack Software Developer And Holder Of A Bachelor Degree In
          Computer Science , I Am A Transversal Profile With 3 Years Of
          Experience In The Development Of Web Application And Embedded
          Electronics. Sociable And Determined, I Pursue Innovation Across The
          World And Its Cultures. Organize, Renew And Learn Are My Watchwords.
          Something I Can't Do? I Will Learn It!
        </p>
        <a
          href="mailto:chrissiku5@gmail.com"
          className="block mt-3 text-md md:text-lg font-regular text-gray-700 
          dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          chrissiku5@gmail.com
        </a>
      </div>
      <img
        src={`https://media.istockphoto.com/id/1407201397/pl/zdj%C4%99cie/wideokonferencja-online-spotkanie-wirtualnych-ludzi-biznes.jpg?b=1&s=170667a&w=0&k=20&c=PGG-IRakdZLeiKn9tl15WT7FsRqitfYlueJUbF8YJEo=`}
        alt="christian siku"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
};

export default About;
