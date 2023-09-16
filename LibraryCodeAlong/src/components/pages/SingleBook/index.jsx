import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SingleBook = ({books}) => {
    // 1. get the ID from the URL
  // 2. look through books array for the right books
  // 3. show THAT book's info
  const [bookToShow, setBookToShow] = useState(null);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const bookIdFromURL = params.get('bookId');
  console.log(bookIdFromURL);

  useEffect(() => {
    let myBook = books.find((book) => book.id === bookIdFromURL);
    console.log(myBook);
    if (myBook !== undefined) {
      setBookToShow(myBook)
    }
  }, [books]);

  return (
    <div className="page-container">
      {bookToShow ?
      <>
        <h1>{bookToShow.title}</h1>
        <p>{bookToShow.author}</p>
        <p>{bookToShow.pages}</p>
      </>  
      : 
      <></>
    }
   
    </div>
  )
}

export default SingleBook