import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import BookList from "./components/BookList";
import Pagination from "./components/Pagination";
import BookModal from "./components/BookModal";
import Loader from "./components/Loader";

const App = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeGenre, setActiveGenre] = useState(null);
  const [load,setLoad]=useState(false)
  const booksPerPage = 20;

  const fetchBooks = async (term) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${term}`);
      const data = await response.json();
      setBooks(data.docs || []);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchBooksByGenre = async (genre) => {
    try {
      setActiveGenre(genre);
      setLoad(true)
      const response = await fetch(`https://openlibrary.org/search.json?subject=${genre}`);
      const data = await response.json();
      setLoad(false)
      setBooks(data.docs || []);
      setQuery(genre);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching genre books:", error);
    }
  };

  const handleSearch = (term) => {
    setQuery(term);
    setActiveGenre(null);
    fetchBooks(term);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

console.log(load);


  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        onSearch={handleSearch}
        onSelectGenre={fetchBooksByGenre}
        activeGenre={activeGenre}
        load={load}
      />

{
  load?<Loader></Loader>:<>
        {query && (
        <div className="px-8 py-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Results for "<span className="text-blue-600">{query}</span>"
          </h2>

        
       <BookList books={currentBooks} onSelectBook={setSelectedBook} ></BookList>
        

          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}
  
  </>
}

      {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
};

export default App;

