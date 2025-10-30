import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiArrowDownOutline } from "react-icons/ti";



const HeroSection = ({ onSearch, onSelectGenre, activeGenre,load }) => {
  const [query, setQuery] = useState("");

  const genres = [
    "Fiction",
    "Romance",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Thriller",
    "Biography",
    "Adventure",
    "History",
    "Horror",
    "Poetry",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  console.log(window.innerHeight);
  
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white "
      style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000)`, 
    }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

        <div className="size-10  rounded-full fixed right-5 bottom-5 animate-bounce"> 
                <div className="size-full flex justify-center items-center text-2xl">
                    <TiArrowDownOutline className="fill-white" />
                </div>

        </div>

      <div className="relative z-10 text-center px-6" data-aos="fade-up">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          data-aos="fade-down"
        >
          Find Your Next Favorite Book
        </h1>

        <p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Dive into stories that inspire, entertain, and transport you to new
          worlds. Search by title or browse by genre.
        </p>

     
        <form
          onSubmit={handleSearch}
          className="flex justify-center mb-6"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <input
            type="text"
            placeholder="Search for books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-72 md:w-96 px-4 py-2 rounded-l-full text-gray-900  border-white bg-amber-50"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-full text-white font-semibold transition-all duration-300"
          >
            Search
          </button>
        </form>

       
        <p
          className="text-sm md:text-base italic text-gray-300 mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          📚 Unlock worlds within pages — explore, learn, and dream.
        </p>
      </div>

      
      <div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay="500"
        
      >
        <h3 className="text-gray-300 text-lg font-medium mb-3 animate-pulse">
          Browse by Genre
        </h3>
        <div className="flex flex-wrap justify-center gap-3 px-6">
          {genres.map((genre, index) => (
            <button
              key={genre}
              onClick={() => onSelectGenre(genre)}
              className={`px-5 py-2 rounded-full font-semibold text-sm shadow-md transition-all
                ${
                  activeGenre === genre
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
            >
              {genre}
            </button>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




