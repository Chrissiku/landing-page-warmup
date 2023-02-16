import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Christian Siku
      </a>
      <a
        href="mailto:chrissiku5@gmail.com"
        className="text-sm md:text-mg hover:text-indigo-500"
      >
        chrissiku5@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">
        Built with <span className="text-red-600">❤</span> by Christian Siku |{" "}
        {new Date().getFullYear()} &copy; All right reserved
      </p>
    </div>
  );
};

export default Footer;
