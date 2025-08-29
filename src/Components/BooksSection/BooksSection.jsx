import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";

const BooksSection = ({ singlebooks }) => {
  const {
    category,
    rating,
    bookName,
    totalPages,
    tags,
    review,
    image,
    author,
    bookId,
  } = singlebooks;

  return (
    <div className="max-w-xs rounded-2xl shadow-md border border-slate-200 p-4 bg-white">
      <div className="bg-[#F3F3F3] rounded-md py-3 flex justify-center">
        <img src={image} alt="Book Cover" className="h-40 object-cover" />
      </div>

      <div>
        <h2 className="mt-3 text-lg font-semibold">{bookName}</h2>
        <p className="text-gray-500 ">By : {author}</p>
      </div>

      <div className="flex justify-between items-center mt-3 font-semibold text-gray-700 text-sm ">
        <span>{category}</span>
        <div className="flex items-center gap-1">
          <span>{rating}</span>
          <CiStar />
        </div>
      </div>

      <div className="my-2">
        <Link to={`/bookdetails/${bookId}`}>
          <button className="w-full cursor-pointer border shadow-sm border-gray-200 py-2 font-bold px-4 rounded-md flex items-center justify-center group">
            View Details
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              <FaAngleRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksSection;
