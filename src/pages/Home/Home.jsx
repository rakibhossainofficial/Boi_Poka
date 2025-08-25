import BooksSection from "../../Components/BooksSection/BooksSection.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksData = useLoaderData();
  console.log(booksData);

  return (
    <div>
      <Hero></Hero>

      <h3 className="text-center text-3xl font-semibold mt-10">Books</h3>
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">

        {booksData.map((singlebooks) => (
          <BooksSection
            key={singlebooks.id}
            singlebooks={singlebooks}
          ></BooksSection>
        ))}
      </div>
    </div>
  );
};

export default Home;
