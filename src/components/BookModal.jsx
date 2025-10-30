import React from "react";

const BookModal = ({ book, onClose }) => (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
    <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-2xl">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
      >
        ×
      </button>
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "https://via.placeholder.com/200x300?text=No+Cover"
        }
        alt={book.title}
        className="w-48 mx-auto mb-4 rounded-lg shadow-md"
      />
      <h2 className="text-2xl font-bold mb-2 text-center">{book.title}</h2>
      <p className="text-center text-gray-600 mb-2">
        <strong>Author:</strong> {book.author_name?.[0] || "Unknown"}
      </p>
      <p className="text-center text-gray-600">
        <strong>First Published:</strong> {book.first_publish_year || "N/A"}
      </p>
    </div>
  </div>
);

export default BookModal;
