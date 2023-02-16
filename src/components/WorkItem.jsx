import React from "react";

const WorkItem = (props) => {
  return (
    <a
      href={props.workUrl}
      rel="noreferrer"
      target="_blank"
      className="block bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
    >
      <div className="h-36 w-full md:h-48">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-700 dark:text-gray-300 p-5 w-full">
        <h3 className="text-md md:text-lg mb-2 md:mb-3 font-semibold">
          {props.title}
        </h3>
        <p className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm">
          {props.tech.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default WorkItem;
