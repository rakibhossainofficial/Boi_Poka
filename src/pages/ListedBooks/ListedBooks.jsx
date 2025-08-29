import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDb";
import ReadList from "../../Components/ReadList/ReadList";
import WishList from "../../Components/WishList/WishList";
import { FaArrowDown } from "react-icons/fa6";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storeBookData = getStoredBook();
    const convertedStoreBooks = storeBookData.map((id) => parseInt(id));
    const myReadlist = data.filter((book) =>
      convertedStoreBooks.includes(book.bookId)
    );
    setReadList(myReadlist);
    console.log(readList);
  }, []);

  const handleSort = (type) => {
    setSort(type)
    if(type === "pages"){
      const sorttedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sorttedByPage)
    }
    if(type === "ratings"){
      const sorttedByRatings = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sorttedByRatings)
    }
  };

  return (
    <div>
      <h3 className="my-3 p-4 bg-gray-100 rounded-md text-center font-bold">
        Books
      </h3>

      {/* sort by  */}
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-4 border-1 bg-green-500 text-white  rounded-md"
          >
            Short By {sort ? sort : ""}
            <span>
              <FaArrowDown />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-10 w-52 p-2 shadow-md"
          >
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs className="mt-6">
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readList.map((books) => (
            <ReadList key={books.bookId} books={books}>
            </ReadList>
          ))}
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
