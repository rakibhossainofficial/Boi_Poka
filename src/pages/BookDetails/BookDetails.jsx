import { Navigate, useLoaderData, useNavigate, useParams } from "react-router";
import { IoCaretBackSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const handlenavigate = useNavigate();

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
  } = singleBook;

  return (
    <div>
      <div className="max-w-5xl mx-auto p-4">
        {/* back button  */}
        <button
          onClick={() => handlenavigate(-1)}
          className="flex items-center px-3 py-1 border border-gray-300 rounded-md m-2 cursor-pointer"
        >
          <span>
            <IoCaretBackSharp />
          </span>{" "}
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md rounded-2xl p-6">
          {/* Left - Book Image */}
          <div className="flex justify-center items-start">
            <img
              src={image}
              alt="Book Cover"
              className="w-56 md:w-72 object-contain rounded"
            />
          </div>

          {/* Right - Book Info */}
          <div>
            <h2 className="text-2xl font-semibold">{bookName}</h2>
            <p className="text-gray-600 mt-1">By : {author}</p>
            <p className="text-gray-700 mt-3 font-medium">{category}</p>
            <hr className="my-3" />

            {/* Review */}
            <p className="text-gray-800 text-sm leading-relaxed">
              <span className="font-semibold">Review : {review}</span>
            </p>

            {/* Tags */}
            <div className="flex gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100  text-green-600 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <hr className="my-3" />

            {/* Extra Details */}
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                Number of Pages: <span className="font-bold">{totalPages}</span>
              </p>
              <p>
                Publisher: <span className="font-bold">{publisher}</span>
              </p>
              <p>
                Year of Publishing: <span className="font-bold">{yearOfPublishing}</span>
              </p>
              <p className="flex items-center gap-1">
                Rating: <span className="font-bold flex items-center">{rating}<FaRegStar /> </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100">
                Read
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
