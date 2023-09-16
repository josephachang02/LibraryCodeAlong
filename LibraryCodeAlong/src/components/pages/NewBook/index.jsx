import { useState } from 'react';
import './index.css'


const NewBook = ({ books, setBooks }) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setSubmitSuccess(false)
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  const handlePagesChange = (e) => {
    if (e.target.value > 0) {
      setPages(e.target.value);
    }
  }

  function generateID(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleSubmit = (e) => {
    console.log("trying to submit")
    e.preventDefault();
    let newBooksArray = [
      ...books,
      {
        title: title,
        author: author,
        pages: pages,
        id: generateID()
      }
     ]
     localStorage.setItem('books', JSON.stringify(newBooksArray))
     setBooks(newBooksArray);

     setTitle("")
     setAuthor("")
     setPages(1)
     setSubmitSuccess(true)

  }

  return (
    <div  className="page-container">
      <h2>Enter a new book!</h2>
      {submitSuccess ? <p style={{color: "green"}}>Your books was submitted!</p> : <></>}
      <form className="flex-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
        </label>
        <input onChange={handleTitleChange} name="title" type="text" value={title} />

        <label htmlFor="author">
          Author
        </label>
        <input onChange={handleAuthorChange} name="author" type="text" value={author} />

        <label htmlFor="pages">
          Pages
        </label>
        <input onChange={handlePagesChange} min="1" name="pages" type="number" value={pages} />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default NewBook