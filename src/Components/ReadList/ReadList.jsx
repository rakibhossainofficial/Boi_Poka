import { Link } from "react-router";

const ReadList = ({ books }) => {
  const {
    category,
    rating,
    bookName,
    totalPages,
    tags,
    review,
    image,
    author,
    publisher,
    yearOfPublishing,
    bookId,
  } = books;

  return (
    <div className="w-full mx-auto p-3 sm:p-4">
      <div className="flex flex-col md:flex-row items-start gap-4 rounded-xl border border-gray-200 shadow-sm bg-white p-4 sm:p-6">
        {/* Book Image */}
        <div className="w-24 sm:w-28 md:w-32 flex-shrink-0 mx-auto md:mx-0">
          <img
            src={image}
            alt={bookName}
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="flex-1 mx-auto text-center items-center justify-center md:text-left">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
            {bookName}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">By : {author}</p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
            <span className="text-xs sm:text-sm bg-green-100 text-green-600 px-2 py-1 rounded-md font-medium">
              {category}
            </span>

            <span className="text-xs sm:text-sm text-gray-500 flex items-center">
              Year of Publishing: {yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs sm:text-sm text-gray-600 mb-2">
            <span> Publisher: {publisher}</span>
            <span> Page: {totalPages}</span>
          </div>

          {/* Divider */}
          <div className="border my-3 border-gray-100"></div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Category + Rating */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <span className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full bg-blue-50 text-blue-600 font-medium">
                Category: {category}
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-full bg-orange-50 text-orange-500 font-medium">
                Rating: {rating}
              </span>
            </div>

            {/* Button */}
            <Link to={`/bookdetails/${bookId}`} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto ml-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full cursor-pointer shadow hover:bg-green-600 transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
