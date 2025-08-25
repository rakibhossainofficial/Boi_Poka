import React from "react";

import { CiStar } from "react-icons/ci";


const BooksSection = ({ singlebooks }) => {
  console.log(singlebooks);

  const { category, rating,bookName,  totalPages, tags, review, image, author } = singlebooks;

  return (
    <div>
     

      <div className="max-w-xs rounded-2xl shadow-md border border-slate-200 p-4 bg-white">
        {/* Book Image */}
        <div className="bg-[#F3F3F3] rounded-md py-3 flex justify-center">
          <img
            src={image}
            alt="Book Cover"
            className="h-40 object-contain"
          />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4">
         {
            tags.map((tag) => <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">{tag}</span>)
         }
        </div>

        {/* Book Info */}
        <h2 className="mt-3 text-lg font-semibold">{bookName}</h2>
        <p className="text-gray-500 ">By : {author}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 text-gray-700 text-sm">
          <span>{category}</span>
          <div className="flex items-center gap-1">
            <span>{rating}</span>
           <CiStar />

          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
