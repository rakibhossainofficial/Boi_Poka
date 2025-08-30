import BooksSection from "../../Components/BooksSection/BooksSection.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import { useLoaderData } from "react-router";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const booksData = useLoaderData();

  const [displayBooks, setDisplayBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayBooks(booksData);
    } else setDisplayBooks(booksData.slice(0, 4));
  }, [booksData, showAll]);

  return (
    <div>
      <Hero></Hero>

      <h3 className="text-center text-3xl font-semibold mt-10">Books</h3>

      <Suspense fallback={<span>Loading...</span>}>
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {displayBooks.map((singlebooks) => (
            <BooksSection
              key={singlebooks.bookId}
              singlebooks={singlebooks}
            ></BooksSection>
          ))}
        </div>
      </Suspense>

      <div className="flex items-center justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 border my-5 rounded-lg cursor-pointer"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Home;
