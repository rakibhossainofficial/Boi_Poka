import BooksSection from "../../Components/BooksSection/BooksSection.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import { useLoaderData } from "react-router";
import { Suspense } from "react";


const Home = () => {
  const booksData = useLoaderData();

  return (
    <div>
      <Hero></Hero>

      <h3 className="text-center text-3xl font-semibold mt-10">Books</h3>

      <Suspense fallback={<span>Loading...</span>}>
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {booksData.map((singlebooks) => (
            <BooksSection
              key={singlebooks.bookId}
              singlebooks={singlebooks}
            ></BooksSection>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Home;

