import { Link } from "react-router-dom"

const Library = ({books}) => {




  return (
    <div className="page-container">
      <h1>Library</h1>
      {/* loop through books array, and show books */}
      {books.map((eachBook) => {
        return (
          <Link to={`/single_book/?bookId=${eachBook.id}`} key={JSON.stringify(eachBook)}>
            <div>{eachBook.title}</div>
          </Link>
        )
      })}
      {/* if no books, show "no books in your library!" */}
    </div>
  )
}

export default Library