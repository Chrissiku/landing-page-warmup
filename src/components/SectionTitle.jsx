import React from "react";

const SectionTitle = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className="text-3xl font-bold mb-5 
  text-indigo-700 dark:text-indigo-400"
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
