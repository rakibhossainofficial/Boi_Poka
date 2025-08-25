import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

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

      <div className="flex gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-green-100  text-green-600 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
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
         <button className="w-full cursor-pointer bg-gray-200 py-2 font-bold  px-4 rounded-md">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BooksSection;
