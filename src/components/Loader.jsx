import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 z-50">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        className="animate-bounce"
      >
        <path
          fill="#facc15"
          d="M2 4c0-1.1.9-2 2-2h7v2H4v16h7v2H4c-1.1 0-2-.9-2-2V4Zm20 16c0 1.1-.9 2-2 2h-7v-2h7V4h-7V2h7c1.1 0 2 .9 2 2v16Z"
        />
        <path
          fill="#fde68a"
          d="M11 2h2v20h-2z"
          className="animate-pulse"
        />
      </svg>

      
      <h1 className="text-3xl font-bold text-yellow-300 mt-6 animate-pulse tracking-wide">
        Fetching books from library...
      </h1>

      
      <div className="mt-6 w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
