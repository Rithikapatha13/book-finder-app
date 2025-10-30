import React from "react";

const BookList = ({ books, onSelectBook }) => {
  if (!books.length)
    return <p className="text-center text-gray-600 mt-6">No books found. Try a different search!</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
          onClick={() => onSelectBook(book)}
        >
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : "https://via.placeholder.com/200x300?text=No+Cover"
            }
            alt={book.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold truncate">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author_name?.[0] || "Unknown Author"}</p>
            <button className="mt-3 text-blue-600 font-semibold hover:underline">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;


