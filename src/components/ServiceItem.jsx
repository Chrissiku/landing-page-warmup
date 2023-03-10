import React from "react";

const ServiceItem = (props) => {
  return (
    <div
      className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800
     dark:hover:bg-slate-700 p-5 hover:-translate-y-2 transform transition rounded-md"
    >
      <div className="text-gray-800 dark:text-gray-300 w-8 h-8 mb-3">
        {props.icon}
      </div>
      <h1 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-1">
        {props.title}
      </h1>
      <p className="text-md text-gray-700 dark:text-gray-300">
        {props.description}
      </p>
    </div>
  );
};

export default ServiceItem;
