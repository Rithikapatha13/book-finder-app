import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
      setTerm("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 bg-white shadow-md rounded-xl p-2"
    >
      <input
        type="text"
        placeholder="Search for a book..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg  border-black-200 focus:outline-none focus:ring-2 focus:ring-pink-400 border-4"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
