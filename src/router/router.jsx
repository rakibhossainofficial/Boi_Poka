import { createBrowserRouter } from "react-router";
import root from "../root/root";
import Home from "../pages/Home/Home.jsx"
import PagesToRead from "../pages/PagesToRead/PagesToRead.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx"
import BookDetails from "../pages/BookDetails/BookDetails.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: root ,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        index: true,
        loader: ()=>  fetch("booksData.json"),
        path: '/',
        element: <Home> </Home>,
      },
      {
        path: "listedbooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookdetails/:id",
        loader: ()=>  fetch("booksData.json"),
        element: <BookDetails></BookDetails>
      }

    ]
  }
]);
