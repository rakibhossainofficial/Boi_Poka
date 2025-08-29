import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDb";
import ReadList from "../../Components/ReadList/ReadList";
import WishList from "../../Components/WishList/WishList";

const ListedBooks = () => {
  const [readList, setReadList] = useState([])
  const data = useLoaderData()
  console.log(data);
  
  useEffect(()=>{
    const storeBookData = getStoredBook()
    const convertedStoreBooks = storeBookData.map(id => parseInt(id))
    const myReadlist = data.filter(book => convertedStoreBooks.includes(book.bookId))
    setReadList(myReadlist)
    console.log(readList);

    
  },[])

  return (
    <div>
      <h3 className="my-3 p-4 bg-gray-100 rounded-md text-center font-bold">Books</h3>
      <Tabs className="mt-6">
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          {
            readList.map((books) => <ReadList key={books.bookId} books={books}> </ReadList> )
          }
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
