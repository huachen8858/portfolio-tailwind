import React from "react";

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "text-white border-b border-blue-300" : "text-[#ADB7BE]";

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
